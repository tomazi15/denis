import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoAlbumContainer from './PhotoAlbumContainer';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Does PhotoAlbumCOntainer Component Render', () => {

    let container = shallow(<Provider store={store}><PhotoAlbumContainer /></Provider>);

    it('PhotoAlbumCOntainer component renders', () => {
        console.log(container.debug())
        expect(container.find('Connect(PhotoAlbumContainer)')).toHaveLength(1);
    });
});