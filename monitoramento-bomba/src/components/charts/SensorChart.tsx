import { Chart } from "primereact/chart";
import React from "react";

interface Dataset {
    temperature: {
        label: string;
        data: number;
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        tension: number;
    },
    vibration: {
        label: string;
        data: number;
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        tension: number;
    },
    current: {
        label: string;
        data: number;
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        tension: number;
    };
}


interface SensorProps {
    labels: string[];
    datasets: Dataset[];
    xlabel: string;
    ylabel: string;
    type: string;
}

const SensorChart: React.FC<SensorProps> = ({ labels, datasets, xlabel, ylabel, type }) => {
    let temperatures: number[] = [];
    let vibrations: number[] =[];
    let currents: number[] = [];

    datasets.forEach(datasets2 => {
        temperatures.push(datasets2.temperature.data)
        vibrations.push(datasets2.vibration.data)
        currents.push(datasets2.current.data)
    });

    var datas: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        tension: number;
    }[] = [];

    if(type == "Temperatura") {
        var datas = [
            {
                label: 'Temperatura (Cº)',
                data: temperatures,
                borderColor: '#FF8384',
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: true,
                tension: 0.4,
            }
        ]
    }

    else if(type == "Vibração") {
        var datas = [
            {
                label: 'Vibração (%)',
                data: vibrations,
                borderColor: '#36A2EB',
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                fill: true,
                tension: 0.4,
            }
        ]
    }

    else if (type == "Corrente") {
        var datas = [
            {
                label: 'Corrente (A)',
                data: currents,
                borderColor: '#FFCE56',
                backgroundColor: 'rgba(255, 206, 86, 0.2)',
                fill: true,
                tension: 0.4,
            }
        ]
    }

    console.log(datas)
    
    const data = { labels, datasets: datas };
    
    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            x: {
                title: {
                    display: true,
                    text: xlabel
                },
            },
            y: {
                title: {
                    display: true,
                    text: ylabel
                },
            },
        }
    };

    return (
        <Chart type="line" data={data} options={options} />
    );
};

export default SensorChart;
