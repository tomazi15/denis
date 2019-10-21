import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AlbumList from './AlbumList';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Does AlbumList Component Render', () => {

    let album = shallow(<Provider store={store}><AlbumList /></Provider>);

    it('AlbumList component renders', () => {
        expect(album.find('Connect(AlbumList)')).toHaveLength(1);
    });
});