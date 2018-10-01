import React from 'react';

const button = (props) => <button className = {props.className} onClick = {props.clicked}>{props.children}</button>

export default button;