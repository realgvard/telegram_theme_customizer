import _ from 'lodash';
import initialState from 'reducers/initialState';

// Config
import dataElements from 'config/dataElements.config';
import baseElements from 'config/elements';

// jS
import { getParsedColor } from 'libs/colorParser';

// Constants
import * as id from './constans';


const editor = (state = initialState.editor, action) => {
    let newElementsData = null;

    // if disabled edit mode
    if(!state.editMode &&
        (action.type === id.SET_HOVER_ON_ELEMENT ||
        action.type === id.UNSET_HOVER_ON_ELEMENT ||
        action.type === id.SET_EDITING_ELEMENT)) {

        return state;
    }


    switch (action.type) {

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

            newElementsData.forEach(item => {
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

            newElementsData.forEach(item => {

                if(item.id === action.id) {

                    item.collection.forEach(({
                        elements,
                        tabName
                    }) => {

                        elements.forEach(childItem => {

                            if(childItem.key === action.data.key) {

                                childItem.color = action.data.color;
                            }
                        });
                    });

                    copyParentItem = item;
                }
            });

            return {
                ...state,
                editingElement: copyParentItem,
                data: {
                    ...state.data,
                    [action.data.key]: action.data.colorData
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

            newElementsData.forEach(item => {
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

        // TOOD: refactor due change elements
        case id.PREPARE_DATA_FOR_SAVE:

            let newData = {};

            baseElements.forEach(childItem => {

                if(!_.has(state.data, childItem.key) && !childItem.protected) {
                    const colorsAreEqual = getParsedColor(childItem.defaultColor) === childItem.color;

                    newData[childItem.key] = colorsAreEqual ? childItem.defaultColor : childItem.color;
                }
            });

            return {
                ...state,
                data: {...state.data, ...newData}
            };

        case id.SET_FAVORITE_COLOR:

            let newFavoriteColors = state.favoriteColors;

            if(!newFavoriteColors.includes(action.color)) {

                newFavoriteColors = newFavoriteColors.slice(0, 15);

                newFavoriteColors.unshift(action.color);
            }

            return {
                ...state,
                favoriteColors: newFavoriteColors
            };

        case id.CHANGE_EDIT_BORDER_COLOR:

            return {
                ...state,
                editBorderColor: action.color
            };

        case id.RESET_EDITOR:

            return {
                editingElement: {},

                backgroundData: null,

                backgroundType: 'background',

                fileName: 'theme',

                editBorderColor: '#e95e5e',

                favoriteColors: [],

                editMode: true,

                elements: _.cloneDeep(dataElements),

                data: {}
            };

        default:
            return state
    }
};

export default editor;