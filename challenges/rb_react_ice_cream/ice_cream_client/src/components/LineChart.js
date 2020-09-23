import React, {useEffect } from 'react';
import Chart from 'chart.js'

export default function LineChart(props){

    const prepareData = data => {
        const chartData = {
            labels: [],
            datasets: [{
                label: 'Meatball Pints Sold',
                data: []
            },
        ]
        }
        data.pints.forEach(pint => {
            chartData.labels.push(pint.month)
            chartData.datasets[0].data.push(pint.pints_sold)
        })
        return chartData
    }

    const createChart = data => {
        const ctx = document.querySelector('#pints');
        const pintsChart = new Chart(ctx, {
            type: "line",
            data: data
        })
    }

    const getData = async () => {
        try {
            const response = await fetch('/ice_creams/1')
            const data = await response.json()
            // console.log(data)
            const jData = prepareData(data)
            console.log(jData)
            createChart(jData)
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
        <canvas id="pints" width="300" height="100"></canvas>
        </>
    )
}