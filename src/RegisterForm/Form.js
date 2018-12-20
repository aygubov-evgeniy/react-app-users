import React, { Component } from 'react';

class Form extends Component {
  state = {
    isLoginFormShow: true,
    userName: [],
    users: []
  }

  showRegisterForm = (e) => {
    e.preventDefault();
    const { isLoginFormShow } = this.state;
    this.setState({ isLoginFormShow: !isLoginFormShow });
  }

  handleChange = ({ target }) => {
    const { userName } = this.state;
    this.setState({ userName: target.value });
  }

  registerUser = () => {

  }
  
  renderLoginForm() {
    return (
      <div className="login-form">
        <div className="col-md-4 col-xs-12 col-md-offset-4">
          <div className="tile tile-login">
            <div className="input-icon">
              <span className="fa-user fa"></span>
              <input type="text" className="form-control" placeholder="Username"/>
            </div>

            <div className="input-icon">
              <span className="fa-lock fa"></span>
              <input type="password" className="form-control" placeholder="******"/>
            </div>

            <button className="btn btn-block btn-primary btn-embossed">Log in</button>

            <div className="login-action clearfix">
              <a href="#" onClick={this.showRegisterForm}>Register</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  renderRegisterForm() {
    return (
      <form className="reg-form">
        <div className="col-md-4 col-xs-12 col-md-offset-4">
          <div className="tile tile-login">
            <div className="input-icon">
              <span className="fa-user fa"></span>
              <input type="text" required="required" className="form-control" placeholder="Username" onChange={this.handleChange}/>
            </div>

            <div className="input-icon">
              <span className="fa-lock fa"></span>
              <input type="password" required="required" className="form-control" placeholder="Password"/>
            </div>

            <div className="input-icon">
              <span className="fa-lock fa"></span>
              <input type="password" required="required" className="form-control" placeholder="Repeat Password"/>
            </div>

            <button className="btn btn-block btn-primary btn-embossed">Register</button>

            <div className="login-action clearfix">
              <a href="#" onClick={this.showRegisterForm}>Log in</a>
            </div>
          </div>
        </div>
      </form>
    );
  }

  render() {
    return this.state.isLoginFormShow ? this.renderLoginForm() : this.renderRegisterForm();
  }
}

export default Form;
