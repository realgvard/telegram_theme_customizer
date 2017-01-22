import elementsData from 'components/config/optionDispatcher.config';
import _ from 'lodash';


export default {
    editor: {

        editingElement: {},

        backgroundData: null,

        hoveredElementCount: 0,

        fileName: 'theme',

        activeElement: {},

        elements: _.cloneDeep(elementsData),

        data: {}
    }
}