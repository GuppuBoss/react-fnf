import React from 'react';
import PropTypes from 'prop-types';
import connect from 'react-redux'
import LoginForm from '../forms/LoginForm';
import Login from '../../actions/auth';

class LoginPage extends React.Component {
    // login is the redux thunk method and history is passed as props becoz this is a route component
    submit = (data) => this.props.login(data).then(() => this.props.history.push("/"))
    render() {
        return ( <div>
            <h1> Login Page </h1>
            <LoginForm submit = { this.submit } />
            </div>
        );
    }
}
LoginPage.propTypes = {
    login: PropTypes.fun.isRequired,
    history: PropTypes.shape({
        push: PropTypes.fun.isRequired
    })
}
// first parameter allows us to pass redux state into this component as props

export default connect(null, { login })(LoginPage);