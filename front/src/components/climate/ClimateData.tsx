"use state"
import { useState, useEffect } from "react";
import ClimateChart from "../charts/ClimateChart";
import { fetchClimateData } from "@/services/ClimateService";

interface ClimateData {
    labels: string[];
    datasets: {
        label: string;
        data: number[];
        borderColor: string;
        backgroundColor: string;
        fill: boolean;
        tension: number;
    }[];
}

const ClimateData: React.FC = () => {
    const [chartData, setChartData] = useState<ClimateData | null>(null);

    useEffect(() => {
        const getClimateData = async () => {
            try {
                const data = await fetchClimateData();
                setChartData(data);
            } catch(error) {
                console.error('Erro ao requisitar os dados: ', error);
            }
        };
        getClimateData();
    }, []
    );

    return (
        <div>
            {chartData ? (
                <ClimateChart labels={chartData.labels} datasets={chartData.datasets} 
                xlabel="Data e Hora" ylabel="Valor"/>
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
    )
}