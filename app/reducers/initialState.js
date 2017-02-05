import dataElements from 'config/dataElements.config';
import _ from 'lodash';


export default {
    editor: {

        editingElement: {},

        backgroundData: null,

        backgroundType: 'background', // background, tile

        editMode: true,

        favoriteColors: [],

        fileName: 'theme',

        elements: _.cloneDeep(dataElements),

        data: {}
    },

    metadata: {
        version: '0.4.0'
    }
}