import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import styles from '../minus-grid.css'

class Grid extends Component {
  constructor (props) { // eslint-disable-line
    super(props)
  }

  componentDidMount () {
    this.setProps()
  }

  componentDidUpdate () {
    this.setProps()
  }

  setProps () {
    const {margin, padding, columns} = this.props
    this.root.style.setProperty('--column-margin', margin)
    this.root.style.setProperty('--column-padding', padding)
    this.root.style.setProperty('--column-count', columns)
  }

  render () {
    return (

        <div className={classNames(styles.grid, this.props.className)}
             ref={x => { this.root = x }}>
          {this.props.children}
        </div>
    )
  }
}

Grid.propTypes = {
  margin: PropTypes.number,
  padding: PropTypes.number,
  columns: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node
}

export default Grid
