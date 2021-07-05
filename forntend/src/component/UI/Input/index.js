import React from 'react';
import {Form } from 'react-bootstrap'

/**
* @author
* @function Input
**/

const Input = (props) => {
  return(
    <div className="form-group">
            <label>{props.label}</label>
            <input 
            type={props.type} className="form-control" placeholder={props.placeholder}
            value={props.value}
            onChange={props.onChange}
            />
            {props.errorMessage}
          </div>
   )

 }

export default Input