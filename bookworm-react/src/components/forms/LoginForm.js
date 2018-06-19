import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import Validator from 'validator';
import InlineError from '../messages/InlineError';

class LoginForm extends Component {
  state = {
    data: {
      email: '',
      password: ''
    },
    loading: false,
    errors: {}
  };
//  ... means put all the previous data as it is then add new data
  onChange = e => this.setState({
    data: { ...this.state.data, [e.target.name]: e.target.value }
  });

  onSubmit = () => {
    const errors = this.validate(this.state.data);
    this.setState({ errors });
  }

  validate = (data) => {
    const errors = {}
    if(!Validator.isEmail(data.email)) errors.email = "Invalid Email";
    if(!data.password) errors.password = "can't be blank";
    return errors;
    
  }

  render() {
    const { data, errors } = this.state;
    return (
      <Form onSubmit={this.onSubmit}>
        <Form.Field>
          <label for="email">Email: </label>
          <input type="email" id="email" name="email" placeholder="example@example.com" value={data.email} onChange={this.onChange} />
          { errors.email && <InlineError text={errors.email} />}
        </Form.Field>
        <Form.Field>
          <label for="password">Password: </label>
          <input type="password" id="password" name="password" placeholder="Make it secure" value={data.password} onChange={this.onChange} />
          { errors.password && <InlineError text={errors.password} />}
        </Form.Field>
        <Button primary>Login</Button>
      </Form>
    )
  }
}
export default LoginForm;