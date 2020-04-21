import React from 'react'
import axios from 'axios'

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };

    handleChange = event =>{
        this.setState({
            credentials: {
                ...this.state.credentials,
                [event.target.name]: event.target.value 
            }
        })
    }

    handleLogin = event =>{
        event.preventDefault();
        axios
        .post('http://localhost:5000/api/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', JSON.stringify(res.data.payload))
            this.props.history.push('/protected')
        })
        .catch(err => console.log(err))
    }


    render() {
        return (
            <div className="formDiv">
                <form onSubmit= {this.handleLogin} >
                    <label htmlFor= "username" name= "username" >Username*</label> 
                    <br/>

                    <input
                    type= "text"
                    name= "username"
                    value= {this.state.credentials.username}
                    onChange= {this.handleChange}
                    />
                    <br/>
                    <label htmlFor= "password" name= "password" >Password*</label> 
                    <br/>
                    <input
                    type= "password"
                    name= "password"
                    value= {this.state.credentials.password}
                    onChange= {this.handleChange}
                    />
                    <br/>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login