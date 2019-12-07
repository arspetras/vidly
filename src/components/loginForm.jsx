import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import Joi from "joi-browser";
import Form from "./common/form";
import auth from "../services/authService";

class LoginForm extends Form {
  state = {
    data: { username: "", password: "" },
    errors: {}
  };

  schema = {
    username: Joi.string()
      .required()
      .label("Username"),
    password: Joi.string()
      .required()
      .label("Password")
  };

  // replaced in reusable component
  /* 
  validate = () => {
    const options = { abortEarly: false };
    const { error } = Joi.validate(this.state.data, this.schema, options);
    if (!error) return null;

    const errors = {};
    // mapping array into an object
    for (let item of error.details) errors[item.path[0]] = item.message;
    return errors;

    //validation by hand
    
    const errors = {};

    const { data } = this.state;
    if (data.username.trim() === "")
      errors.username = "Username is required";
    if (data.password.trim() === "")
      errors.password = "Password is required";

    return Object.keys(errors).length === 0 ? null : errors;
    
  };*/

  doSubmit = async () => {
    //call the server
    try {
      const { data } = this.state;
      await auth.login(data.username, data.password);

      const { state } = this.props.location;
      window.location = state ? state.from.pathname : "/";
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        const errors = { ...this.state.errors };
        errors.username = ex.response.data;
        this.setState({ errors });
      }
    }
  };

  //replaced in reusable component
  /*
  validateProperty = ({ name, value }) => {
    // validation of each field at the run time manually
    
    if (name === "username") {
      if (value.trim() === "") return "Username is required";
      //... we can have more rules here
    }
    if (name === "password") {
      if (value.trim() === "") return "Password is required";
      //... we can have more rules here
    }

    // property validation with Joi
    const obj = { [name]: value };
    const schema = { [name]: this.schema[name] };
    const { error } = Joi.validate(obj, schema);
    return error ? error.details[0].message : null;
    //same as return error ? error.details[0].message : null;
    // if (error) return null;
    // return error.details[0].message;
  };*/

  render() {
    if (auth.getCurrentUser()) return <Redirect to="/" />;

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderInput("username", "Username")}
          {this.renderInput("password", "Password", "password")}
          {this.renderButton("Login")}
        </form>
      </div>
    );
  }
}

export default LoginForm;
