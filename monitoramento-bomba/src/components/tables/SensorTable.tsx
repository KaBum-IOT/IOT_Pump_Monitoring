"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchSensorData } from "@/services/SensorService";

interface SensorData {
    labels: string;
    datasets: {
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
    };
}

interface Table {
    date: string;
    value: number;
}

interface TableGeral {
    date: string;
    temperature: number;
    vibration: number;
    current: number;
}

interface TableProps {
    type: string;
}

export default function SensorTable({type}: TableProps)  {
    const [tableData, setTableData] = useState<Table[]>([]);
    const [tableData2, setTableData2] = useState<TableGeral[]>([]);

    useEffect(() => {
        const getSensorData = async () => {
            try {
                const data: SensorData[] = await fetchSensorData();

                let formattedData = data.map(sensor => ({
                    date: sensor.labels,
                    value: sensor.datasets.temperature.data,
                }));;

                let formattedData2 =  data.map(sensor => ({
                    date: sensor.labels,
                    temperature: sensor.datasets.temperature.data,
                    vibration: sensor.datasets.vibration.data,
                    current: sensor.datasets.current.data
                }));
                
                if(type == "Temperatura") {
                    formattedData = data.map(sensor => ({
                        date: sensor.labels,
                        value: sensor.datasets.temperature.data,
                    }));
                }
                else if(type == "Vibração") {
                    formattedData = data.map(sensor => ({
                        date: sensor.labels,
                        value: sensor.datasets.vibration.data,
                    }));   
                }
                else if(type == "Corrente") {
                    formattedData = data.map(sensor => ({
                        date: sensor.labels,
                        value: sensor.datasets.current.data,
                    }));
                }
                
                if(type == "total") 
                    setTableData2(formattedData2);
                else
                    setTableData(formattedData);
            } catch (error) {
                console.error('Erro ao requisitar os dados');
            }
        };
        getSensorData();
    }, []);

    return (
        <>
            { type != "total" ? 
                <DataTable value={tableData} className='text-black'>
                    <Column field="date" header="Data"></Column>
                    <Column field="value" header={type}></Column> 
                </DataTable>
            : 
                <DataTable value={tableData2} className='text-black w-full'>
                    <Column field="date" header="Data"></Column>
                    <Column field="temperature" header={"Temperatura"}></Column> 
                    <Column field="vibration" header={"Vibração"}></Column> 
                    <Column field="current" header={"Corrente"}></Column> 
                </DataTable>
            }
        </>
    );
}