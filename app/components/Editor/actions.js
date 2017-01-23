import * as action from './constans';
import _ from 'lodash';


// export function setInitialElements(data) {
//     return {
//         type: action.SET_EDITOR_ELEMENTS,
//         data
//     }
// }

export function setHoverOnElement(id) {
    return {
        type: action.SET_HOVER_ON_ELEMENT,
        id
    }
}

export function unsetHoverOnElement(id) {
    return {
        type: action.UNSET_HOVER_ON_ELEMENT,
        id
    }
}

// export function setActiveElement(id) {
//     return {
//         type: action.SET_ACTIVE_ELEMENT,
//         id
//     }
// }
//
// export function unsetActiveElement(id) {
//     return {
//         type: action.UNSET_ACTIVE_ELEMENT,
//         id
//     }
// }

export function setEditingElement(id) {
    return {
        type: action.SET_EDITING_ELEMENT,
        id
    }
}

export function changeEditorData(id, data) {
    return {
        type: action.CHANGE_EDITOR_DATA,
        id,
        data
    }
}

export function changeEditorImageData(id, data) {
    return {
        type: action.CHANGE_EDITOR_IMAGE_DATA,
        id,
        data
    }
}

export function changeFileName(fileName) {
    return {
        type: action.CHANGE_FILE_NAME,
        fileName
    }
}

export function resetEditor() {
    return {
        type: action.RESET_EDITOR
    }
}

export function injectActionsToElement({ id, condition = true, editCondition = true, dispatch }) {

    return {
        onClick(e) {

            if(condition && editCondition) {
                e.stopPropagation();

                dispatch(setEditingElement(id));
            }
        },
        onMouseEnter() {

            if(condition) {
                dispatch(setHoverOnElement(id));
            }
        },
        onMouseLeave() {

            if(condition) {
                dispatch(unsetHoverOnElement(id));
            }
        }
    }
}


// Emulate server
// export function fetchElements() {
//     return (dispatch, ownState) => {
//
//         const getBaseElements = (cb) => {
//             require.ensure([], (require) => {
//                 cb(require('config/optionDispatcher.config').default);
//             });
//         };
//
//         new Promise(resolve => {
//             getBaseElements(resolve);
//         }).then(data => {
//             dispatch(setInitialElements(_.cloneDeep(data)));
//         })
//     }
// }

