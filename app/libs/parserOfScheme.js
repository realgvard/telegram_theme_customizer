import _ from 'lodash';

// JS
import { getParsedColor } from 'libs/colorParser';


function _getKeyColor(scheme, property) {
    const searchValue = /:.*;/;
    const isHex = /#[0-9a-fA-F]+/;

    const found = _.head(property.match(searchValue)).replace(/:|;/g, '').trim();

    if(isHex.test(found)) {
        // console.log('yes:', found)

        return found;
    } else { // Is property


        // console.log('noe:', found, _getColor(property))
        // console.log('noe:', found)
        return _getKeyColor(scheme, _findProperty(scheme, found));
    }
}

function _getKeyInfo(property) {
    const searchComment = /\/\/.*/;

    return _.head(property.match(searchComment)).replace('// ', '');
}

function _findProperty(scheme, key) {
    const searchKey = `${key}:`;

    return _.find(scheme, value => value.includes(searchKey));
}


function _getCombinedProperties(scheme, item) {

    const property = _findProperty(scheme, item.key);

    return {
        info: _getKeyInfo(property),
        color: getParsedColor(_getKeyColor(scheme, property)),
        defaultColor: _getKeyColor(scheme, property)
    };
}


export function mergeScheme(scheme, elements) {
    let result = [];

    const copyScheme = _.compact(scheme.split('\n'));

    elements.forEach((item) => {


        result.push({
            ...item,
            ...item.protected ? {} : _getCombinedProperties(copyScheme, item)
        })
    });

    return result;
}


