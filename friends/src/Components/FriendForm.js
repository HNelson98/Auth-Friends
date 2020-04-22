import React from 'react'


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
    render() {
        return (
            <div>
                <h1>Add A Friend</h1>
                <div className="formDiv">
                    <form>
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