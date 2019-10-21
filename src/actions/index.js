import { PHOTOS_API } from '../api/photosEndPoint';

export const LOADING_PHOTO_DATA = 'LOADING_PHOTO_DATA';
export const FETCH_PHOTO_DATA = 'FETCH_PHOTO_DATA';
export const SET_PHOTO_ALBUMS = 'SET_PHOTO_ALBUMS';
export const GET_ALBUM_ID = 'GET_ALBUM_ID';

export function getPhotoData () {
    return async (dispatch) => {
        dispatch({ type: LOADING_PHOTO_DATA})

        const response = await fetch(PHOTOS_API, { method: 'GET' });
        const photos = await response.json();

        let result = [];
        for (let i = 0; i < 300; i++) {
            result.push(photos[i]);
        }

        dispatch ({
            type: FETCH_PHOTO_DATA,
            result
        });
    };   
}

export function setPhotoAlbums (albums) {
    return {
        type: SET_PHOTO_ALBUMS,
        albums
    }
}

export function setAlbumId (id) {
    return {
        type: GET_ALBUM_ID,
        id
    }
}