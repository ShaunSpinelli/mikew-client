import React from 'react'
import AppRouter from '../routers/AppRouter.js'
import { shallow } from 'enzyme'
import './setUpTests'

describe('renders all components without crashing', () => {
  it('renders App crashing', () => {
    shallow(<AppRouter />);
  }) 
})


