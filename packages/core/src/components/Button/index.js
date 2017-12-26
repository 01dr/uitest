import React from 'react';
import s from './styles.css';

const Button = (props) => (
  <button className={s.button}>{props.children}</button>
);

export default Button;
