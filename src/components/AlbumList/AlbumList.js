import React, { Component } from 'react';

import './AlbumList.scss';

import { Container, Row, Col, Image, Button } from 'react-bootstrap';

import { setAlbumId } from '../../actions/index';
import { connect } from 'react-redux';

import { Link } from 'react-router-dom';

class AlbumList extends Component {
    render() {

        const { albums, setAlbumId } = this.props;

        return (
          <Container>
          <div>
            <h1>Photo Albums</h1>  
            <ul className="album-list">
            <Row>
              {albums.map(item => {
                return item.map((x, index) => {
                  if (index === 0) {
                    return (
                      <Col key={x.id} lg={2} md={4} sm={12}>
                      <div  className="album-list--items">
                        <li>
                            <div className="album-list--title">
                            <p>{x.title}</p>
                            </div>
                            <Image src={x.thumbnailUrl} thumbnail/>
                            <Link to={`/album/${x.albumId}`}>
                                <Button className="album-list--button"
                                    onClick={() => {setAlbumId(x.albumId)}} 
                                    variant="dark">
                                    View Album
                                </Button>
                            </Link>
                        </li>
                      </div>
                      </Col>    
                    );
                  }
                });
              })}
              </Row>    
            </ul>
          </div>
          </Container>  
        );
    }
}

const mapStateToProps = (state) => {
    return {
        albums: state.albums
    }
}

const mapDispatchToProps = () => {
    return {
        setAlbumId
    }
}

export default connect(mapStateToProps, mapDispatchToProps())(AlbumList);