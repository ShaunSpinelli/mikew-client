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
        expect(sentState).toEqual(false)
    })
    it('send button', () => {
      const wrapper = shallow(<Contact />)
      const text = wrapper.find('.sendContact').text()
      expect(text).toContain('Send')
  })
    it('send button to call send function', () => {
      const wrapper = shallow(<Contact />)
      const sendButton = wrapper.find('.sendContact')
      sendButton.simulate('click', { preventDefault: () => {} })
      const text = wrapper.find('.sendContact').text()
      expect(text).toEqual(' Send ')
  })
})