import _ from 'lodash';
import initialState from 'reducers/initialState';

// Config
import dataElements from 'config/dataElements.config';

// Constants
import * as id from './constans';


const editor = (state = initialState.editor, action) => {
    let newElementsData = null;

    // if disabled edit mode
    if(!state.editMode && action.type !== id.CHANGE_EDIT_MODE) {
        return state;
    }


    switch (action.type) {

        // case id.SET_EDITOR_ELEMENTS:
        //
        //     return {
        //         ...state,
        //         elements: action.data,
        //     };

        case id.SET_HOVER_ON_ELEMENT:

            newElementsData = state.elements;

            newElementsData.forEach((item) => {
                if(item.id === action.id) {
                    item.hovered = true;
                }
            });

            return {
                ...state,
                elements: newElementsData,
            };

        case id.UNSET_HOVER_ON_ELEMENT:

            newElementsData = state.elements;

            newElementsData.forEach((item) => {
                if(item.id === action.id) {
                    item.hovered = false;
                }
            });

            return {
                ...state,
                elements: newElementsData,
            };

        case id.CHANGE_EDITOR_DATA:
            let copyParentItem = null;

            newElementsData = state.elements;

            newElementsData.forEach((item) => {

                if(item.id === action.id) {

                    item.settings.forEach(childItem => {

                        if(childItem.id === action.childId) {

                            childItem.color = action.data.color;
                        }
                    });

                    copyParentItem = item;
                }
            });

            return {
                ...state,
                editingElement: copyParentItem,
                data: {
                    ...state.data,
                    [action.data.key]: action.data.color
                },
                elements: newElementsData
            };

        case id.CHANGE_EDITOR_IMAGE_DATA:

            return {
                ...state,
                backgroundData: action.data.image
            };

        case id.SET_EDITING_ELEMENT:

            newElementsData = state.elements;

            newElementsData.forEach((item) => {
                if(item.id === action.id) {
                    item.editing = true;
                } else {
                    item.editing = false;
                }
            });

            return {
                ...state,
                editingElement: Object.assign(_.find(newElementsData, { id: action.id })),
                elements: newElementsData,
            };

        case id.CHANGE_FILE_NAME:
            const fileName = action.fileName.trim().length > 0 ? action.fileName : 'theme';

            return {
                ...state,
                fileName
            };

        case id.CHANGE_BACKGROUND_TYPE:
            const backgroundType = action.backgroundType.trim().length > 0 ? action.backgroundType : 'background';

            return {
                ...state,
                backgroundType
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