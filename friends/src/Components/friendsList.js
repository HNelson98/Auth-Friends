import React, { useEffect, useState } from 'react'
import { axiosWithAuth } from '../utills/axiosWithAuth'
import FriendCard from './FriendCard'

const FriendsList = () => {
const[state, setState] = useState ({
    friends: [],
    id: Date.now(),
    name: '',
    age: '',
    email: '',
}
)
    useEffect(() => {
        axiosWithAuth()
            .get('api/friends')
            .then(res => {
                setState({
                    friends: res.data
                })
            })
            .catch(err => console.log(err))
    }, [])

   
return(
        <div>
            <h1>Here Are Your Friends!</h1>
            <div>
                {
                    state.friends.map(item => (
                        <FriendCard key={item.id} name={item.name} age={item.age} email={item.email} />))

                }


            </div>
        </div>

    )
}


export default FriendsList