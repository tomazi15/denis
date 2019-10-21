import React, { Component } from 'react';

import './PhotoList.scss';
import { Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class PhotoList extends Component {

    render() {

        const { photos, id } = this.props;

        return (  
          <div className="photo-list">
            <h1>Photo List</h1>
            <div className="photo-list--button">
              <Link to="/">
                <Button variant="dark" size="lg" block>Back</Button>
              </Link>
            </div>
            <ul>
              {photos.map(photo => {
                return photo.map(x => {
                  if (x.albumId === id) {
                    return <div className="photo-list--items">
                      <li key={x.id}>
                        <Image src={x.url} rounded />
                    </li>
                    </div>
                  }
                });
              })}
            </ul>    
            <Link to="/">
              <Button variant="dark" size="lg" block>Back</Button>
            </Link>
          </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        photos: state.albums,
        id: state.id
    }
}

export default connect(mapStateToProps)(PhotoList);