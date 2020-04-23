import React from 'react'


function FriendCard(props) {

    return(
        <div className= "card">
            <h2>{props.name}</h2>
            <p>
                Age: {props.age}<br/>
                Email: {props.email}
            </p>
        </div>
    )
}

export default FriendCard