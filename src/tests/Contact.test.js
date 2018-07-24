import React from 'react'
import Contact from '../components/Contact.js'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'
import './setUpTests'

describe('Contacts Component', () => {
    it('matches the snapshot', () => {
        const tree = renderer.create(<Contact />).toJSON()
        expect(tree).toMatchSnapshot()
    })
    it('sent state is false', () => {
        const wrapper = shallow(<Contact />)
        const sentState = wrapper.state().sent
        expect(sentState).toEqual("Send")
    })
    it('send button', () => {
      const wrapper = shallow(<Contact />)
      const text = wrapper.find('.sendContact').text()
      expect(text).toContain('Send')
  })
})