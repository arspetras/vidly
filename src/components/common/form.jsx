import React, { Component } from 'react';
import Joi from "joi-browser";

class Form extends Component {
    state = { 
        data: {},
        errors:{}
     };

     validate = () => {
        const options = { abortEarly: false };
        const { error } = Joi.validate(this.state.data, this.schema, options);
        if (!error) return null;
    
        const errors = {};
        // mapping array into an object
        for (let item of error.details) errors[item.path[0]] = item.message;
        return errors;
      };

      validateProperty = ({ name, value }) => {
        // property validation with Joi
        const obj = { [name]: value };
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj, schema);
        return error ? error.details[0].message : null;
        //same as return error ? error.details[0].message : null;
        // if (error) return null;
        // return error.details[0].message;
      };


    render() { 
        return (  );
    }
}
 
export default Form;