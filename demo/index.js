import React from 'react'
import {render} from 'react-dom'
import {Grid, Column, Row} from '../src'

const App = () => {
  const half = 'calc(var(--column-count) / 2)'
  const oneFourth = 'calc(var(--column-count) / 4)'
  const threeFourth = 'calc(var(--column-count) / 4 * 3)'

  return (
    <Grid>
      <Column>1</Column>
      <Column m={2}>2</Column>
      <Column m={3}>3</Column>
      <Column m={4}>4</Column>
      <Column m={2} l={4}>2 || 4</Column>
      <Column m={4} l={8}>4 || 8</Column>
      <Column m={half} l={oneFourth}>1/2 || 1/4</Column>
      <Column m={half} l={threeFourth}>1/2 || 1/4 * 3 </Column>
      <Column m={half}>
        1/2
        <Row>
          <Column m={half}> 1/2</Column>
          <Column m={half}> 1/2</Column>
        </Row>
      </Column>
    </Grid>
  )
}

const mountPoint = document.getElementById('mountPoint')
render(<App/>, mountPoint)
