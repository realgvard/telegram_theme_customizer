import _ from 'lodash';
import initialState from 'reducers/initialState';

// Config
import dataElements from 'config/dataElements.config';

// Constants
import * as id from './constans';


const editor = (state = initialState.editor, action) => {
    let newElementsData = null;
    let newHoveredElementCount = null;

    switch (action.type) {

        case id.SET_EDITOR_ELEMENTS:

            return {
                ...state,
                elements: action.data,
            };

        case id.SET_HOVER_ON_ELEMENT:

            newElementsData = state.elements;

            newElementsData.forEach((item) => {
                if(item.id === action.id) {
                    item.hovered = true;
                }
            });

            newHoveredElementCount = _.size(_.filter(newElementsData, { hovered: true }));

            return {
                ...state,
                elements: newElementsData,
                hoveredElementCount: newHoveredElementCount
            };

        case id.UNSET_HOVER_ON_ELEMENT:

            newElementsData = state.elements;

            newElementsData.forEach((item) => {
                if(item.id === action.id) {
                    item.hovered = false;
                }
            });

            newHoveredElementCount = _.size(_.filter(newElementsData, { hovered: true }));

            return {
                ...state,
                elements: newElementsData,
                hoveredElementCount: newHoveredElementCount
            };

        // case UNSET_ACTIVE_ELEMENT:
        //
        //     newElementsData = state.elements;
        //
        //     newElementsData.forEach((item) => {
        //         if(item.id === action.id) {
        //             item.active = false;
        //         }
        //     });
        //
        //     return {
        //         ...state,
        //         activeElement: {},
        //         elements: newElementsData
        //     };
        //
        // case SET_ACTIVE_ELEMENT:
        //
        //     newElementsData = state.elements;
        //
        //     newElementsData.forEach((item) => {
        //         if(item.id === action.id) {
        //             item.active = true;
        //         }
        //     });
        //
        //     return {
        //         ...state,
        //         activeElement: Object.assign(_.find(state.elements, { id: action.id }), {
        //             active: true
        //         }),
        //         elements: newElementsData
        //     };

        case id.CHANGE_EDITOR_DATA:
            newElementsData = state.elements;

            newElementsData.forEach((item) => {
                if(item.id === action.id) {
                    item.color = action.data.color;
                }
            });

            return {
                ...state,
                // activeElement: Object.assign(_.find(state.elements, { id: action.id }), {
                //     color: action.data.color
                // }),
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

            newHoveredElementCount = _.size(_.filter(newElementsData, { hovered: true }));

            return {
                ...state,
                editingElement: Object.assign(_.find(newElementsData, { id: action.id })),
                elements: newElementsData,
                hoveredElementCount: newHoveredElementCount
            };

        case id.CHANGE_FILE_NAME:
            const fileName = action.fileName.trim().length > 0 ? action.fileName : 'theme';

            return {
                ...state,
                fileName
            };

        case id.RESET_EDITOR:

            return {
                editingElement: {},

                backgroundData: null,

                fileName: 'theme',

                hoveredElementCount: 0,

                activeElement: {},

                elements: _.cloneDeep(dataElements),

                data: {}
            };

        default:
            return state
    }
}

export default editor