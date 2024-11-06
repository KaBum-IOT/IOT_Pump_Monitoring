"use client"
import React, { useState, useEffect } from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

interface Perfomance {
    id: number;
    step: string;
    cycletime: string;
    quantity: number;
    rating: string;
    energy: string;
}

export default function DashDataTable() {
    const [performance, setPerfomance] = useState<Perfomance[]>([]);

    useEffect(() => {
        const data: Perfomance[] = [
            { id: 1, step: "Produção", cycletime: "5s", quantity: 10, rating: "5%", energy: "5 Wh"},
            { id: 2, step: "Qualidade", cycletime: "2s", quantity: 7, rating: "9%", energy: "1 Wh"},
            { id: 3, step: "Separação", cycletime: "5s", quantity: 13, rating: "8%", energy: "3 Wh"},
            { id: 4, step: "Produção", cycletime: "3s", quantity: 12, rating: "7%", energy: "12 Wh"},
            { id: 5, step: "Qualidade", cycletime: "10s", quantity: 4, rating: "8%", energy: "18 Wh"},
            { id: 6, step: "Produção", cycletime: "8s", quantity: 8, rating: "3%", energy: "7 Wh"},
            { id: 7, step: "Separação", cycletime: "7s", quantity: 7, rating: "4%", energy: "12 Wh"},
            { id: 8, step: "Produção", cycletime: "2s", quantity: 12, rating: "2%", energy: "18 Wh"},
            { id: 9, step: "Qualidade", cycletime: "5s", quantity: 16, rating: "10%", energy: "7 Wh"},
            { id: 10, step: "Separação", cycletime: "3s", quantity: 7, rating: "4%", energy: "5 Wh"},
        ];

        setPerfomance(data);
    }, []);

    return (
        <DataTable value={performance}>            
            <Column field="id" header="Id"></Column>
            <Column field="step" header="Etapa"></Column>
            <Column field="cycletime" header="Tempo Ciclo"></Column>
            <Column field="quantity" header="QUantidade"></Column>
            <Column field="rating" header="Taxa"></Column>
            <Column field="energy" header="Consumo"></Column>
        </DataTable>
    );
}
        