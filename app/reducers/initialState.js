import dataElements from 'config/dataElements.config';
import _ from 'lodash';


export default {
    editor: {

        editingElement: {},

        backgroundData: null,

        backgroundType: 'background', // background, tile

        hoveredElementCount: 0,

        fileName: 'theme',

        elements: _.cloneDeep(dataElements),

        data: {}
    }
}