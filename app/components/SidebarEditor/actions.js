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

export function setEditingElement(id) {
    return {
        type: action.SET_EDITING_ELEMENT,
        id
    }
}

export function changeEditorData(id, childId, data) {
    return {
        type: action.CHANGE_EDITOR_DATA,
        id,
        childId,
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

export function changeBackgroundType(type) {
    return {
        type: action.CHANGE_BACKGROUND_TYPE,
        backgroundType: type
    }
}

export function changeEditMode(mode) {
    return {
        type: action.CHANGE_EDIT_MODE,
        mode
    }
}

export function resetEditor() {
    return {
        type: action.RESET_EDITOR
    }
}

export function prepareDataForSave() {
    return {
        type: action.PREPARE_DATA_FOR_SAVE
    }
}

export function setFavoriteColor(color) {
    return {
        type: action.SET_FAVORITE_COLOR,
        color
    }
}

/**
 * Ijection event handlers for components
 * @param id <String>
 * @param dispatch <Function>
 * @returns {{onClick: (function(*)), onMouseEnter: (function()), onMouseLeave: (function())}}
 */
export function injectActionsToComponent({ id, dispatch }) {

    return {
        onClick(e) {

            if(id) {
                e.stopPropagation();

                dispatch(setEditingElement(id));
            }
        },

        onMouseEnter() {
            dispatch(setHoverOnElement(id));
        },

        onMouseLeave() {
            dispatch(unsetHoverOnElement(id));
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

