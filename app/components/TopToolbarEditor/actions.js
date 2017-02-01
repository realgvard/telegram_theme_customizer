import * as action from './constans';



export function changeFileName(fileName) {
    return {
        type: action.CHANGE_FILE_NAME,
        fileName
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


