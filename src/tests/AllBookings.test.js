import React from 'react'
import AllBookings from '../components/AllBookings.js'
import { shallow } from 'enzyme'

import './setUpTests'

describe('All Bookings component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AllBookings />)
    expect(wrapper).toMatchSnapshot()
  })
})
