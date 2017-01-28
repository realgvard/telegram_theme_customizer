import * as action from './constans';


export function resetMetadata(version) {
    return {
        type: action.RESET_METADATA,
        version
    }
}
