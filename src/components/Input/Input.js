import React from 'react';

import './Input.css';

const input = (props) => <input type={props.type} placeholder = {props.placeholder} className={props.className} value = {props.value} onClick={props.onClick} onChange = {props.onChange}/> 

export default input;