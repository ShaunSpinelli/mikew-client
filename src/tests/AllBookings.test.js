import React from 'react'
import AllBookings from '../components/AllBookings.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import './setUpTests'

describe('AllBookings Component', () => {
  it('matches the snapshot', () => {
      const tree = renderer.create(<AllBookings />).toJSON()
      expect(tree).toMatchSnapshot()
    })
  it('shows all bookings', () => {
      const wrapper = shallow(<AllBookings />)
      const bookingsState = wrapper.state().bookings
      expect(bookingsState).toEqual([])
  })
  it('shows Loading Component', () => {
    const wrapper = shallow(<AllBookings />)
    const text = wrapper.find('.loadingScreen').text()
    expect(text).toContain('<Loading />')
  })
})