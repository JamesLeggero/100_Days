import React, {useEffect } from 'react';
import Chart from 'chart.js'

export default function LineChart(props){

    const getData = async () => {
        try {
            const response = await fetch('/ice_creams/1')
            const data = await response.json()
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => {
        getData()
    }, [])

    return(
        <>
        <h1>Ice Cream</h1>
        </>
    )
}