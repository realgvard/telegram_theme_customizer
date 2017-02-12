import _ from 'lodash';

export function getActiveStyle(componentData, editorStore) {

    const activeElementStyle = {
        outline: `2px solid ${editorStore.editBorderColor}`,
        outlineOffset: -1
    };

    const defaultElementStyle = {
        outline: 'none',
        outlineOffset: -1
    };

    // if(editorStore) {
    //     console.trace(editorStore)
    // }

    if(componentData) {
        const {
            hovered,
            editing
        } = componentData.state;

        return editorStore.editMode && (hovered || editing) ? activeElementStyle : defaultElementStyle;
    } else {

        return defaultElementStyle;
    }
}