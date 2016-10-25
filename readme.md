# Minus minus grid | React.js

A simple wrapper around the [Minus minus Grid](https.//github.com/pixelass/minus-grid)

[Documentation](https://pixelass.github.io/react-minus-grid/api/)  
[Demo](https://pixelass.github.io/react-minus-grid/)

[![npm](https://img.shields.io/npm/v/react-minus-grid.svg)](https://www.npmjs.com/package/react-minus-grid)
[![Coveralls branch](https://img.shields.io/coveralls/pixelass/react-minus-grid.svg)](https://coveralls.io/github/pixelass/react-minus-grid)
[![bitHound Overall Score](https://www.bithound.io/github/pixelass/react-minus-grid/badges/score.svg)](https://www.bithound.io/github/pixelass/react-minus-grid)
[![Standard Version](https://img.shields.io/badge/release-standard%20version-brightgreen.svg)](https://github.com/conventional-changelog/standard-version)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)  
[![Travis](https://img.shields.io/travis/pixelass/react-minus-grid.svg)](https://travis-ci.org/pixelass/react-minus-grid)
[![David](https://img.shields.io/david/pixelass/react-minus-grid.svg)](https://david-dm.org/pixelass/react-minus-grid)
[![David](https://img.shields.io/david/dev/pixelass/react-minus-grid.svg)](https://david-dm.org/pixelass/react-minus-grid#info=devDependencies&view=table)  
[![GitHub license](https://img.shields.io/github/license/pixelass/react-minus-grid.svg)](https://github.com/pixelass/react-minus-grid/blob/master/LICENSE)
[![GitHub issues](https://img.shields.io/github/issues/pixelass/react-minus-grid.svg)](https://github.com/pixelass/react-minus-grid/issues)
[![GitHub forks](https://img.shields.io/github/forks/pixelass/react-minus-grid.svg)](https://github.com/pixelass/react-minus-grid/network)
[![GitHub stars](https://img.shields.io/github/stars/pixelass/react-minus-grid.svg)](https://github.com/pixelass/react-minus-grid/stargazers)


```jsx

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

```

