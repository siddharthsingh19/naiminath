import React from 'react';
import PropTypes from 'prop-types';
import classes from 'react-style-classes';
import style from './Divider.module.css';

// const Divider = ({
//   size='sm',
//   ...props
// }) => (
//   <li
//     role='separator'
//     className={classes(style.divider, style[props.size])}
//     {...props}
//   />
// );

// Divider.propTypes = {
//   size: PropTypes.oneOf(['sm', 'lg']),
// };

// Divider.defaultProps = {
//   size: 'sm',
// };

//export default Divider;

const Divider = ({
  size = 'xs', // Using JavaScript default parameter for size
  ...props
}) => (
  <li
    role='separator'
    className={classes(style.divider, style[size])}
    {...props}
  />
);

Divider.propTypes = {
  size: PropTypes.oneOf(['xs','sm', 'lg']),
};


export default Divider;