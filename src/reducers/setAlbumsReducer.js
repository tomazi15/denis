import { SET_PHOTO_ALBUMS } from '../actions';

const setAlbumsReducer = (state=[], action) => {
    switch (action.type) {
        
        case SET_PHOTO_ALBUMS:
            return state = action.albums
        default:
            return state    
    }
}

export default setAlbumsReducer;