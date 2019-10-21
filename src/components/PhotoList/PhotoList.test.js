import React from 'react';
import { Provider } from 'react-redux';
import configureMockStore from "redux-mock-store";
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PhotoList from './PhotoList';

configure({ adapter: new Adapter() });

const mockStore = configureMockStore();
const store = mockStore({});

describe('Does PhotoList Component Render', () => {

    let photo = shallow(<Provider store={store}><PhotoList /></Provider>);

    it('PhotoList component renders', () => {
        expect(photo.find('Connect(PhotoList)')).toHaveLength(1);
    });
});