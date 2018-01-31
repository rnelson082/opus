import React from 'react';
import { Link, withRouter } from 'react-router-dom';


class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.signInDemo = this.signInDemo.bind(this);
  }

  componentDidMount(){
    this.props.receiveErrors([]);
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname){
      this.props.receiveErrors([]);
    }
    if (nextProps.loggedIn) {
      this.props.history.push('/');
    }
  }

  signInDemo(e){
    e.preventDefault()
    const fakeUser = {
      username: 'userBob',
      password: 'iambob',
      email: 'bobisgreat@gmail.com'
    };
    this.props.login(fakeUser);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = this.state;
    this.props.processForm(user);
  }

  navLink() {
    if (this.props.formType === 'login') {
      return <p>New to Opus? <Link to="/signup">Sign up</Link></p>
    } else {
      return <p> Have an account? <Link to="/login">Log in</Link></p>
    }
  }

  renderErrors() {
    if (this.props.errors){
      return(
        <ul className="error-list">
          {this.props.errors.map((error, i) => (
            <li key={`error-${i}`}>
              {error}
            </li>
          ))}
        </ul>
      );
    }
  }

  render() {
    const correctFont = (this.props.formType === 'signup' ? 'Sign up' : 'Log in');

    const correctButton = this.props.formType === 'signup' ? <input className="userbutton"
       type="submit" value="Create Account" /> : <input className="userbutton"
          type="submit" value="Log Me In!" />


    const signUpEmailForm = this.props.formType === 'signup' ?     <input type="text"
          value={this.state.email}
          onChange={this.update('email')}
          className="login-input"
          placeholder="Email"
        /> : ""

    const demo = <input className="demo-btn"
       type="submit" value="Try the Demo!" onClick={e=>this.signInDemo(e)}/>;

     const loginReveal = 5

     const loginFormFull = (
       <div className="login-form-container" style={{ "zIndex": `${loginReveal}`}}>
         <form onSubmit={this.handleSubmit} className="login-form-box">
           <div className="nav-link">
             {this.navLink()}
           </div>

           <h2 className="session-title">{correctFont}</h2>

           {this.renderErrors()}
           <div className="login-form">

               <input type="text"
                 value={this.state.username}
                 onChange={this.update('username')}
                 className="login-input"
                 placeholder="Name"
               />
             <br/>
             {signUpEmailForm}
               <input type="password"
                 value={this.state.password}
                 onChange={this.update('password')}
                 className="login-input"
                 placeholder="Password"
               />
             <br/>
             {correctButton}
             {demo}
           </div>
         </form>
       </div>
     );
    return (
      <div className="session-container">


            {loginFormFull}

      </div>
    );
  }
}

export default withRouter(SessionForm);
