import React from 'react'
import { axiosWithAuth } from '../utills/axiosWithAuth';



class AddFriend extends React.Component {
    state = {
        id: Date.now(),
        name: '',
        age: '',
        email: ''
    }
    handleChange = event => {
        this.setState({

            ...this.state,
            [event.target.name]: event.target.value

        })
    }

    handleAdd = event => {
        event.preventDefault();
        axiosWithAuth()
            .post('/api/friends', this.state)
            .then(res => {
                this.setState({
                    id: Date.now(),
                    name: '',
                    age: '',
                    email: ''
                })
            })
            .catch(err => console.log(err));

    }


    render() {
        return (
            <div>
                <h1>Add A Friend</h1>
                <div className="formDiv">
                    <form onSubmit= {this.handleAdd}>
                        <label htmlFor="name" name="name" >Name*</label>
                        <br />

                        <input
                            type="text"
                            name="name"
                            value={this.state.name}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="age" name="age" >Age*</label>
                        <br />
                        <input
                            type="age"
                            name="age"
                            value={this.state.age}
                            onChange={this.handleChange}
                        />
                        <br />
                        <label htmlFor="email" name="email" >email</label>
                        <br />
                        <input
                            type="text"
                            name="email"
                            value={this.state.email}
                            onChange={this.handleChange}
                        />
                        <br />
                        <button>Add Friend</button>
                    </form>
                </div>
            </div>

        )
    }
}

export default AddFriend