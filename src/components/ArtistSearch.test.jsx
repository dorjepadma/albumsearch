import React from 'react';
import { shallow } from 'enzyme';
import ArtistSearch from './ArtistSearch';

describe('Controls component', () => {
  it('renders App', () => {
    const wrapper = shallow(<ArtistSearch text="Prince" onChange={() => {}} onSubmit={() => {}} />);
    expect(wrapper).toMatchSnapshot();
  });
});
