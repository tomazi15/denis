import { GET_ALBUM_ID } from '../actions';

const setAlbumIdReducer = (state=[], action) => {
    switch (action.type) {
        case GET_ALBUM_ID:
            return state = action.id    
        default:
            return state    
    }
}

export default setAlbumIdReducer;