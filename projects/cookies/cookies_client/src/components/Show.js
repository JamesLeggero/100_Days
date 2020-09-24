import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function Show (props) {

    



    return (
        <>
            {
                props.recipes.map(recipe => {
                    return (
                        <div key={recipe.id}>
                            <h5 >{recipe.user_id.name}</h5>
                            <h6>{recipe.recipe}</h6>
                        </div>
                    )
                })
            }
        </>
    )
}