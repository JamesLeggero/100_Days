import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'
import Show from './Show'

export default function Users(props){

    const [users, setUsers] = useState([])

    const getData = async () => {
        try {
            const response = await axios.get('/users')
            const data = await response.data
            await setUsers(data)
            await console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getData()
    }, [])

    const [user, setUser] = useState({})

    const getUserData = async event => {
        event.persist()
        const response = await axios.get(`http://localhost:3000/users/${event.target.id}`)
       
        await setUser({...user, ...response.data})
        
        await console.log(user)
    }

    useEffect(()=>{
        
    }, [user])


    const signature = () => {
        return (
            
                {border: "1px solid red",
                borderRadius: "15px",
                padding: '5px',
                fontWeight: 'bold',
                width: 'fit-content',
                margin: '0 auto'}
            
        )
    }

    return (
        <>
        <h1>Cookie Users</h1>
        <div className='top'>

        {
            users.map(baker => {
                return (
                    <div key={baker.id}>
                        <div onClick={getUserData}>
                    
                    
                    <h2 >{baker.name}</h2>
                    </div>
                    <ul>
                    {
                        baker.cookies.map(cookie => {
                            return (
                                 cookie.id === baker.sig_rec ?
                            <li key={cookie.id} style={signature()}>{cookie.name}</li> :
                            <li key={cookie.id}>{cookie.name}</li>
                                
                            )
                        })
                    }
                    </ul>
                    
                    </div>
                )
            })
        }
        </div>
        <Show user={user} />
        </>
    )



}