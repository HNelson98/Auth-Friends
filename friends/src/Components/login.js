import React from 'react'

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


    render() {
        return (
            <div className="formDiv">
                <form>
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
                    type= "text"
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