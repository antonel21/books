import React, { Component } from 'react';
import Button from '../buttons/Button';
import './LoginForm.scss';
import Label from '../label/Label';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { iUser } from '../../utils/iUser';
import { setUserData } from '../../store/actions/bookActions';

interface LoginFormProps {
  setUserData: (data: iUser) => void;
  handleClose: any;
}

class LoginForm extends Component<LoginFormProps, iUser> {
  constructor(props: LoginFormProps) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }
  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    } as any);
  };

  handleLogin = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { username, password } = this.state;

    if (username === 'antonel' && password === '1234') {
      this.props.setUserData({ username, password });
      localStorage.setItem(
        'books.user-data',
        JSON.stringify({ username, password }),
      );
      this.props.handleClose();
    } else {
      alert('Invalid username or password');
    }
  };

  render() {
    const { username, password } = this.state;
    return (
      <form className="login-form" onSubmit={this.handleLogin}>
        <div className="input-login">
          <Label class="label-login" labelText="Username:" />
          <input
            type="text"
            name="username"
            value={username}
            onChange={this.handleInputChange}
          />
        </div>
        <div className="input-login">
          <Label class="label-login" labelText="Password:" />
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleInputChange}
          />
        </div>
        <Button
          handleClick={this.handleLogin}
          class="btn-modal"
          type="submit"
          label="LOG IN"
        />
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    setUserData: (data: iUser) => dispatch(setUserData(data)),
  };
};

export default connect(null, mapDispatchToProps)(LoginForm);
