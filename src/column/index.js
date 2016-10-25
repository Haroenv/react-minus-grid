import React, {Component, PropTypes} from 'react'
import classNames from 'classnames'
import styles from '../minus-grid.css'

class Column extends Component {
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
    const {m, l, xl} = this.props
    this.root.style.setProperty('--viewport-small', m)
    this.root.style.setProperty('--viewport-medium', l)
    this.root.style.setProperty('--viewport-large', xl)
  }

  render () {
    return (
      <div className={classNames(styles.column, this.props.className)}
           ref={x => { this.root = x }}>
        {this.props.children}
      </div>
    )
  }
}

Column.propTypes = {
  m: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  l: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  xl: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  className: PropTypes.string,
  children: PropTypes.node
}

export default Column
