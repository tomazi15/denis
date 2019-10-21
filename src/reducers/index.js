import getDataReducer from './getDataReducer';
import setAlbumsReducer from './setAlbumsReducer';
import setAlbumIdReducer from './setAlbumId';

import { combineReducers } from 'redux';

const rootReducer = combineReducers ({
    data: getDataReducer,
    albums: setAlbumsReducer,
    id: setAlbumIdReducer,
});

export default rootReducer;