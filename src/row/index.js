import React, {PropTypes} from 'react'
import classNames from 'classnames'
import styles from '../minus-grid.css'

const Row = props => <div className={classNames(styles.row, props.className)}>{props.children}</div>

Row.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node
}

export default Row
