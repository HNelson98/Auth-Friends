import React from 'react'

class Login extends React.Component {
    state = {
        credentials: {
            username: "",
            password: ""
        }
    };


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
                    />
                    <br/>
                    <label htmlFor= "password" name= "password" >Password*</label> 
                    <br/>
                    <input
                    type= "text"
                    name= "password"
                    value= {this.state.credentials.password}
                    />
                    <br/>
                    <button>Log In</button>
                </form>
            </div>
        )
    }
}

export default Login