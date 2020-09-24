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

    const [recipes, setRecipes] = useState([])

    const getRecipes = async event => {
        event.persist()
        const response = await axios.get(`/recipes`)
       
        await setRecipes(response.data)
        
        await console.log(recipes)
    }

    useEffect(()=>{
        
    }, [recipes])

    const handleSubmit = async event => {
        event.preventDefault()
        const response = await axios.post('http://localhost:3000/recipes')
        // await setRecipes(response.data)
        await console.log(response.data)

    }


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
            users.map(user => {
                return (
                    <div key={user.id}>
                        
                    
                    
                    <h2 >{user.name}</h2>
                    
                    <ul>
                    {
                        user.cookies.map(cookie => {
                            return (
                                 cookie.id === user.sig_rec ?
                            <li key={cookie.id} style={signature()} >{cookie.name}</li> :
                            <li key={cookie.id}>{cookie.name}</li>
                                
                            )
                        })
                    }
                    {
                        user.recipes.map(recipe=>{
                            return <li key={recipe.id}>
                                <h6>{recipe.recipe}</h6></li>
                        })
                    }

                    

                    </ul>
                    
                    </div>
                )
            })
        }
        </div>
        {/* <Show recipes={recipes}/> */}
        <form onSubmit={handleSubmit}>
            <label htmlFor='user_id' />
            <input id='user_id' type='text' placeholder="Please enter User ID "></input>
            <label htmlFor='cookie_id' />
            <input type='text' id='cookie_id' placeholder="Please enter Cookie ID"></input>
            <label htmlFor='recipe' />
            <input type='textarea' id='recipe' placeholder="Please write recipe"></input>
            <input type='submit' value='submit'></input>            
        
        </form>
        </>
    )



}