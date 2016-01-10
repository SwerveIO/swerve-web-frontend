import React, { PropTypes } from 'react';
import s from './Button.scss';
import withStyles from '../../decorators/withStyles';

// Login buttons don't need a state, so they get no state!
function Button({ onClick, buttonSpecialClass, text }) {
  let className = s.container;

  if (typeof buttonSpecialClass !== 'undefined') {
    className += buttonSpecialClass.map(specialClass => s[specialClass]).join(' ');
  }

  return (
    <button onClick={onClick} className={className}>{text}</button>
  );
}

Button.propTypes = {
  buttonSpecialClass: PropTypes.array,
  text: PropTypes.string,
};

export default withStyles(s)(Button);
