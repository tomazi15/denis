import { FETCH_PHOTO_DATA } from '../actions';

const getDataReducer = (state=[], action) => {
    switch (action.type) {
        case FETCH_PHOTO_DATA:
            return state = action.result    
        default:
            return state    
    }
}

export default getDataReducer;