/* eslint-env jest */
import React from 'react'
import {shallow, mount} from 'enzyme'

import Grid from '..'

describe('<Grid />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Grid>
        <div className='unique'/>
      </Grid>
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = mount(<Grid className='custom'/>)
    expect(wrapper.props().className).toEqual('custom')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed')
  })
})
