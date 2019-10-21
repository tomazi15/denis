import React, { Component } from 'react';

import AlbumList from '../components/AlbumList/AlbumList';
import PhotoList from '../components/PhotoList/PhotoList';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { getPhotoData, setPhotoAlbums } from '../actions';
import { connect } from 'react-redux';

class PhotoAlbumContainer extends Component {

    constructor (props) {
        super(props);
        props.getPhotoData();
    }

    render() {
        const { photos, setPhotoAlbums } = this.props;

        const createAlbums = (photos) => {

            let album_one = [],
              album_two = [],
              album_three = [],
              album_four = [],
              album_five = [],
              album_six= [],
              album = [];

            for(let i=0; i < photos.length; i++) {             
                switch (photos[i].albumId) {
                    case 1:
                        album_one.push(photos[i]);
                        break;
                    case 2:
                        album_two.push(photos[i]);
                        break;
                    case 3:
                        album_three.push(photos[i]);
                        break;
                    case 4:
                        album_four.push(photos[i]);
                        break;
                    case 5:
                        album_five.push(photos[i]);
                        break;
                    case 6:
                        album_six.push(photos[i]);
                        break;
                    default:
                        return photos;                
                }
            }

            album.push(album_one, album_two, album_three, album_four, album_five, album_six);
            setPhotoAlbums(album);
        }
        
        return (
            <Router>
                {
                    createAlbums(photos)
                }
            <Switch>
                <Route path="/" exact component={AlbumList}/>
                <Route path="/album/:id" component={PhotoList}/>
                </Switch>    
            </Router>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.data
    }
}

const mapDispatchToProps = () => {
    return {
        getPhotoData,
        setPhotoAlbums
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(PhotoAlbumContainer);