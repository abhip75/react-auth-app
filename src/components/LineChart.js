import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";

const LineChart = () => {
    const chartRef = useRef(null);
    let myChart = null; 

    useEffect(() => {
        const ctx = chartRef.current.getContext("2d");

        // Destroy existing chart before creating a new one
        if (myChart) {
            myChart.destroy();
        }

        // Create new chart instance
        myChart = new Chart(ctx, {
            type: "line",
            data: {
                labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
                datasets: [
                    {
                        label: "First dataset",
                        data: [33, 53, 85, 41, 44, 65],
                        fill: true,
                        backgroundColor: "rgba(75,192,192,0.2)",
                        borderColor: "rgba(75,192,192,1)"
                    },
                    {
                        label: "Second dataset",
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
        });

        // Cleanup function to destroy the chart when component unmounts
        return () => {
            if (myChart) {
                myChart.destroy();
            }
        };
    }, []);

    return (
        <div className="container">
            <canvas ref={chartRef} />
        </div>
    );
};

export default LineChart;
