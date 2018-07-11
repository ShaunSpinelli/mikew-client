import React from 'react'
import AllBookings from '../components/AllBookings.js'
import { shallow } from 'enzyme'

import './setUpTests'

describe('All Bookings component', () => {
  it('renders correctly', () => {
    const wrapper = shallow(<AllBookings />)
    expect(wrapper).toMatchSnapshot()
  })
  it('calls admin clicks approved, approvedBooking function is called', () => { //failing.... idk why
    const handleApprovedBooking = jest.fn();
    const wrapper = shallow(<AllBookings />)
    const approvedButton = wrapper.find('.approve-button').at(1)
    approvedButton.simulate('click')
    expect(handleApprovedBooking).toHaveBeenCalledTimes(1)
  })
})


