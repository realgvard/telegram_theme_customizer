import _ from 'lodash';

const activeElementStyle = {
    outline: '2px solid rgba(233, 94, 94, 1)',
    outlineOffset: -2
};

export const defaultElementStyle = {
    outline: 'inherit',
    outlineOffset: -2
};

export function getActiveStyle(componentData) {

    if(componentData) {
        const {
            hovered,
            editing
        } = componentData.state;

        return hovered || editing ? activeElementStyle : defaultElementStyle;
    } else {

        return defaultElementStyle;
    }
}