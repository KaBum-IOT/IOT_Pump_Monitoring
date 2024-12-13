"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { fetchSensorData } from "@/services/SensorService";
import { fetchSensorData2 } from "@/services/SensorService2";

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
    startDate: string | null;  // Recebe as datas formatadas
    endDate: string | null;
}

export default function SensorTable({ type, startDate, endDate }: TableProps) {
    const [tableData, setTableData] = useState<Table[]>([]);
    const [tableData2, setTableData2] = useState<TableGeral[]>([]);

    const fetchData = async () => {
        try {
            let data;
            if (startDate && endDate) {
                // Passando as datas para a API
                data = await fetchSensorData2(startDate, endDate);
            } else {
                // Se não há datas, busque os dados sem elas
                data = await fetchSensorData();
            }

            // Formatação dos dados
            let formattedData = data.map(sensor => ({
                date: sensor.labels,
                value: sensor.datasets.temperature.data,
            }));

            let formattedData2 = data.map(sensor => ({
                date: sensor.labels,
                temperature: sensor.datasets.temperature.data,
                vibration: sensor.datasets.vibration.data,
                current: sensor.datasets.current.data,
            }));

            // Filtra os dados com base no tipo
            if (type === "Temperatura") {
                formattedData = data.map(sensor => ({
                    date: sensor.labels,
                    value: sensor.datasets.temperature.data,
                }));
            } else if (type === "Vibração") {
                formattedData = data.map(sensor => ({
                    date: sensor.labels,
                    value: sensor.datasets.vibration.data,
                }));
            } else if (type === "Corrente") {
                formattedData = data.map(sensor => ({
                    date: sensor.labels,
                    value: sensor.datasets.current.data,
                }));
            }

            if (type === "total") {
                setTableData2(formattedData2);
            } else {
                setTableData(formattedData);
            }
        } catch (error) {
            console.error("Erro ao requisitar os dados:", error);
        }
    };

    useEffect(() => {
        fetchData();
    }, [startDate, endDate, type]); 

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