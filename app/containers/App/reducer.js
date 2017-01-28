import initialState from 'reducers/initialState';

// Constants
import * as id from './constans';


const metadata = (state = initialState.metadata, action) => {

    switch (action.type) {

        case id.RESET_METADATA:

            return {
                version: action.version,
            };

        default:
            return state
    }
};

export default metadata;