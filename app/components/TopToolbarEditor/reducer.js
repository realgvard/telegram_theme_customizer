import _ from 'lodash';
import initialState from 'reducers/initialState';

// Config
import dataElements from 'config/dataElements.config';

// Constants
import * as id from './constans';


const editor = (state = initialState.editor, action) => {
    let newElementsData = null;

    switch (action.type) {

        case id.CHANGE_FILE_NAME:
            const fileName = action.fileName.trim().length > 0 ? action.fileName : 'theme';

            return {
                ...state,
                fileName
            };

        case id.CHANGE_EDIT_MODE:

            return {
                ...state,
                editMode: action.mode
            };

        case id.RESET_EDITOR:

            return {
                editingElement: {},

                backgroundData: null,

                backgroundType: 'background',

                fileName: 'theme',

                editMode: true,

                elements: _.cloneDeep(dataElements),

                data: {}
            };

        default:
            return state
    }
};

export default editor