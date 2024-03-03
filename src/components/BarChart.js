import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";


const BarChart = () => {

    const chartRef = useRef(null);
    let barChart = null;

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        if(barChart){
            barChart.destroy();
        }

        barChart = new Chart(ctx, {
            type: "bar",
            data: {
                labels : ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets : [
                    {
                        label : "Data 1",
                        data : [33, 53, 85, 41, 44, 65],
                        fill : true,
                        backgroundColor : "rgba(75,192,192,0.2)",
                        borderColor : "rgba(75,192,192,1)"
                    },
                    {
                        label: "Data 2",
                        data: [33, 25, 35, 51, 54, 76],
                        fill: false,
                        borderColor: "#742774"
                    }
                ]
            },
            options: {
                scales: {
                    x: {
                        display: true,
                        title: {
                            display: true,
                            text: "Month"
                        }
                    },
                    y: {
                        display: true,
                        title: {
                            display: true,
                            text: "Value"
                        }
                    }
                }
            }
        })

        // Cleanup function to destroy the chart when component unmounts
        return () => {
            if (barChart) {
                barChart.destroy();
            }
        };
    },[])
    return(
        <div className="container">
            <canvas ref={chartRef} />  
        </div>
    )
}

export default BarChart;