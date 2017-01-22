
const activeElementStyle = {
    outline: '2px solid rgba(233, 94, 94, 1)',
    outlineOffset: -2
};

export const defaultElementStyle = {
    outline: 'inherit',
    outlineOffset: -2
};


export function getActiveStyle(condition) {
    return condition ? activeElementStyle : defaultElementStyle
}