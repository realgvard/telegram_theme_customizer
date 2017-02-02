import _ from 'lodash';

import { getActiveStyle } from 'components/Preview/cssStyles.js';


export function selector({ id, childId, editor }) {

    const collectionElements = _.head(_.filter(editor.elements, { id }));
    const element = _.head(_.filter(collectionElements.settings, { id: childId ? childId : id }));

    // console.log(element);

    return {
        state: {
            hovered: collectionElements.hovered,
            editing: collectionElements.editing
        },
        styles: getActiveStyle({
            state: {
                hovered: collectionElements.hovered,
                editing: collectionElements.editing
            }
        }),
        element,
        id: childId ? childId : id
    }
}

// import { getActiveStyle } from 'components/Preview/cssStyles.js';
//
//
// export function selector({ id, childId, editor }) {
//
//     const collectionElements = _.head(_.filter(editor.elements, { id }));
//
//     const element = _.head(_.filter(collectionElements.settings, { id: childId ? childId : id }));
//
//     const _state = {
//         state: {
//             hovered: collectionElements.hovered,
//             editing: collectionElements.editing
//         }
//     };
//
//
//     return {
//         state: _state,
//         styles: getActiveStyle(_state),
//         element,
//         id: childId ? childId : id
//     }
// }

