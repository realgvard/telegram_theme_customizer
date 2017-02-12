import _ from 'lodash';

import { getActiveStyle } from './cssStyles.js';


export function selector({ id, key, editor }) {

    const foundGroup = _.find(editor.elements, { id });
    let foundElement = null;

    foundGroup.collection.forEach(obj => {


        if(!foundElement) {
            foundElement = _.find(obj.elements, {key})
        } else {
            // throw new Error('Found duplicate of object in group');
        }
    });

    if(!foundElement) {
        throw new Error(`By id: "${id}", result of search element by key "${key}" is empty`);
    }

    // console.log(foundGroup, foundElement)

    return {
        state: {
            hovered: foundGroup.hovered,
            editing: foundGroup.editing
        },
        styles: getActiveStyle({
            state: {
                hovered: foundGroup.hovered,
                editing: foundGroup.editing
            }
        }, editor),
        element: foundElement,
        id
    }
}
