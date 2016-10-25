/* eslint-env jest */
import React from 'react'
import {shallow, mount} from 'enzyme'

import Column from '..'

describe('<Column />', () => {
  it('renders children when passed in', () => {
    const wrapper = shallow(
      <Column>
        <div className='unique'/>
      </Column>
    )
    expect(wrapper.contains(<div className='unique'/>)).toEqual(true)
  })
  it('allows us to extend the className', () => {
    const wrapper = mount(<Column className='custom'/>)
    expect(wrapper.props().className).toEqual('custom')
    wrapper.setProps({ className: 'changed' })
    expect(wrapper.props().className).toEqual('changed')
  })
})
