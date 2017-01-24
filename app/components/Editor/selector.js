import _ from 'lodash';


export function selector({ id, childId, editor }) {

    return {
        state: {
            hovered: _.head(_.filter(editor.elements, { id })).hovered,
            editing: _.head(_.filter(editor.elements, { id })).editing
        },
        element: _.head(_.filter(_.head(_.filter(editor.elements, { id })).settings, { id: childId ? childId : id }))
    }
}

