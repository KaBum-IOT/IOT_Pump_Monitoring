"use client";

import React, { useState } from "react";
import { format } from "date-fns";
import SensorData from "@/components/sensor/SensorData";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import { DatePicker } from "rsuite";

export default function Data() {
    const [startDate, setStartDate] = useState<Date | null>(null);
    const [endDate, setEndDate] = useState<Date | null>(null);
    const [formattedStartDate, setFormattedStartDate] = useState<string | null>(null);
    const [formattedEndDate, setFormattedEndDate] = useState<string | null>(null);
    const [reload, setReload] = useState(false);

    const handleStartDateChange = (value: Date | null) => {
        setStartDate(value);
    };

    const handleEndDateChange = (value: Date | null) => {
        setEndDate(value);
    };

    const handleButtonClick = () => {
        if (startDate && endDate) {
            const formattedStartDate = format(startDate, "dd/MM/yyyy HH:mm:ss");
            const formattedEndDate = format(endDate, "dd/MM/yyyy HH:mm:ss");
    
            // Agora, codifique a data usando encodeURIComponent
            const encodedStartDate = encodeURIComponent(formattedStartDate);
            const encodedEndDate = encodeURIComponent(formattedEndDate);
    
            // Atualize o estado com as datas codificadas
            setFormattedStartDate(encodedStartDate);
            setFormattedEndDate(encodedEndDate);
        } else {
            setFormattedStartDate(null);
            setFormattedEndDate(null);
        }
        setReload((prev) => !prev);
    };

    return (
        <div className="flex h-screen overflow-hidden">
            <Sidebar />
            <div className="flex-1 flex flex-col">
                <Header title="Corrente" username="Username" />
                <main className="flex-1 overflow-auto p-4">
                        <div className="mb-4">
                        <label className="block mb-2 text-black">Selecione as Datas:</label>
                        <div className="flex">
                            <div className="flex-1">
                                <label className="block mb-2 text-black">Data de Início:</label>
                                <DatePicker
                                    format="dd/MM/yyyy HH:mm"
                                    className="text-black w-full"
                                    onChange={handleStartDateChange}
                                />
                            </div>
                            <div className="flex-1">
                                <label className="block mb-2 text-black">Data de Término:</label>
                                <DatePicker
                                    format="dd/MM/yyyy HH:mm"
                                    className="text-black w-full"
                                    onChange={handleEndDateChange}
                                />
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        onClick={handleButtonClick}
                    >
                        Filtrar
                    </button>
                    <div className="flex-1 mt-4">
                        <SensorData type="Corrente" startDate={formattedStartDate} endDate={formattedEndDate} reload={reload} />
                    </div>
                </main>
            </div>
        </div>
    );
}
