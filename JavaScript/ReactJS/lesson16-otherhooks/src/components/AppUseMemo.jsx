import React, { useMemo, useState } from 'react'
import users from '../data/users';

const AppUseMemo = () => {
    const [count, setCount] = useState(0);
    const [userid, setUserid] = useState(null);
    const userRows = () => {
        console.log('user is running')
        return users.map(i => (
            <li key={i.id} onClick={() => {
                setUserid(i.email)
            }} >{i.name}</li>
        ))
    }

    const optimalUsers = useMemo(()=>{return userRows()},[userid])

    return (
        <div>
            {userid}
            {optimalUsers}
            <span>{count}</span>
            <button onClick={() => {
                console.log('counter is running');
                setCount(count + 1)
            }}>+</button>
        </div>
    )
}

export default AppUseMemo