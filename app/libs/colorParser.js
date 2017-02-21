import _ from 'lodash';


const rgbaHexToNumber = (hex) => {
    for (var i = 1; i >= 0; i -= 0.001) {
        i = Math.round(i * 1000) / 1000;

        var alpha = Math.round(i * 255);
        var found = (alpha + 0x10000).toString(16).substr(-2);

        if(found === hex){
            return i;
        }
    }
};


export const getRgbaColorFromObject = (rgba) => {
    return `rgba(${_.values(rgba).join()})`;
};


export const hexToArgb = (hex, percentage) => {
    const value = Math.round(percentage * 100) / 100;
    const alpha = Math.round(value * 255);

    return hex + (alpha + 0x10000).toString(16).substr(-2).toUpperCase();
};


// ##37a78e40 => rgba(55,167,142, 0.25)
export const argbToRgba = (hex, alpha = 1) => {
    var c;

    if(/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)){
        c= hex.substring(1).split('');

        if(c.length === 3){
            c= [c[0], c[0], c[1], c[1], c[2], c[2]];
        }

        c= '0x'+c.join('');

        return `rgba(${[(c>>16)&255, (c>>8)&255, c&255].join(',')},${alpha})`;
    }

    throw new Error('Bad Hex');
};

/**
 * Public function.
 *
 * @param {String} color - might be HEX, ARGB or just RGBA
 * @returns {String}
 */
export const getParsedColor = (color) => {
    const isPlainHex = color.length === 7;
    const isARGB = color.length === 9;

    if(isPlainHex) { // #ffb1ff

        return argbToRgba(color);
    } else if(isARGB) { // ##37a78e40 => rgba(55,167,142, 0.25)
        const hexColor = color.slice(0, -2);
        const hexRgbaColor = color.slice(-2);

        return argbToRgba(hexColor, rgbaHexToNumber(hexRgbaColor));
    } else if(_.isObject(color)) { // is RGBA "{ r: 0, g: 0, b: 0, a: 0 }" object

        return getRgbaColorFromObject(color)
    } else if(_.isString(color)) { // might be "rgba(255,255,255,1)"

        return color;
    } else {

        throw new Error('Bad color in "getParsedColor" in function');
    }
};