 "use client"
import React, { useState, useEffect } from "react";
import { fetchSensorData } from "@/services/SensorService";
import { fetchSensorData2 } from "@/services/SensorService2";
import SensorChart from "../charts/SensorChart";
import Card from "../cards/Card";
import SensorTable from "@/components/tables/SensorTable";


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
    type: string;
    startDate: string | null;
    endDate: string | null;
    reload: boolean;
}


const SensorData: React.FC<SensorProps> = ({ type, startDate, endDate, reload }) => {

    const [chartData, setChartData] = useState<SensorData[] | null>(null);

    const fetchData = async () => {
        try {
            let data;
            if (startDate && endDate) {
                data = await fetchSensorData2(startDate, endDate);
            } else {
                data = await fetchSensorData();
            }
            setChartData(data);
        } catch (error) {
            console.error("Erro ao requisitar os dados:", error);
        }
    };

    useEffect(() => {
        fetchData(); // Reexecuta quando `reload` muda
    }, [reload]); // Dependência no estado `reload`

    if (!chartData) {
        return <p>Carregando dados...</p>;
    }


    let labels: string[] = [];
    let datas: Dataset[] = [];

    chartData?.forEach(data => {
        labels.push(data.labels)
        datas.push(data.datasets)
    });

    let media = 0, media2 = 0, media3 = 0;
    let mensagem, mensagem2, mensagem3; 
    let color, color2, color3;
    let icon, icon2, icon3;

    if(type == "Temperatura") {
        datas?.forEach(data => {
            media += data.temperature.data;
        })

        mensagem = "Temperatura média"
        color = "bg-red-300 shadow-lg"
        icon = "pi pi-lightbulb text-5xl px-4";
    }

    else if(type == "Vibração") {
        datas?.forEach(data => {
            media += data.vibration.data;
        })

        mensagem = "Vibração média"
        color = "bg-blue-300 shadow-lg"
        icon = "pi pi-wave-pulse text-5xl px-4";
    }       
    
    else if(type == "Corrente") {
        datas?.forEach(data => {
            media += data.current.data;
        })

        mensagem = "Corrente média"
        color = "bg-amber-300 shadow-lg"
        icon = "pi pi-bolt text-5xl px-4";
    }

    else if (type == "total") {
        datas?.forEach(data => {
            media += data.temperature.data;
            media2 += data.vibration.data;
            media3 += data.current.data;
        })

        mensagem = "Temperatura média";
        mensagem2 = "Vibração média";
        mensagem3 = "Corrente média";
        
        color = "bg-red-300 shadow-lg";
        color2 = "bg-blue-300 shadow-lg";
        color3 = "bg-amber-300 shadow-lg";
        
        icon = "pi pi-lightbulb text-5xl px-4";
        icon2 = "pi pi-wave-pulse text-5xl px-4";
        icon3 = "pi pi-bolt text-5xl px-4";
    }

    media /= datas.length;
    media2 /= datas.length;
    media3 /= datas.length;

    media = parseFloat(media.toFixed(3));
    media2 = parseFloat(media2.toFixed(3));
    media3 = parseFloat(media3.toFixed(3));

    
    return (
        <div>
            {chartData && type != "total" ? (
                <>
                    <div className="flex space-x-4 max-w-full overflow-hidden">
                        <div className="flex-1">
                            <SensorChart labels={labels} datasets={datas} xlabel="Data e Hora" ylabel="Valor" type={type} />
                        </div>
                        <div className="flex-1">
                            <SensorTable type={type} startDate={startDate} endDate={endDate}/>
                        </div>
                    </div>
                    <div className="flex w-full gap-4">
                    <div className="flex-1">
                        <Card bgcolor={color}>
                            <div className="flex items-center justify-center gap-8 text-center">
                                <i className={icon}></i>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-3xl">{media}</span>
                                    <div className="text-xl pt-2">{mensagem}</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                    <div className="flex-1">
                        <Card bgcolor="bg-green-300 shadow-lg">
                            <div className="flex items-center justify-center gap-8 text-center">
                                <i className="pi pi-circle-on text-green-500 text-5xl px-4"></i>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-3xl">Online</span>
                                    <div className="text-xl pt-2">Sensor</div>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
                </>
            ) : chartData && type == "total" ?  (
                <div>
                    <div className="grid grid-cols-3 gap-4">
                        <Card bgcolor={color}>
                            <div className="flex items-center justify-center gap-8 text-center">
                                <i className={icon}></i>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-3xl">{media}</span>
                                    <div className="text-xl pt-2">{mensagem}</div>
                                </div>
                            </div>
                        </Card>
                        <Card bgcolor={color2}>
                            <div className="flex items-center justify-center gap-8 text-center">
                                <i className={icon2}></i>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-3xl">{media2}</span>
                                    <div className="text-xl pt-2">{mensagem2}</div>
                                </div>
                            </div>
                        </Card>
                        <Card bgcolor={color3}>
                            <div className="flex items-center justify-center gap-8 text-center">
                                <i className={icon3}></i>
                                <div className="flex flex-col items-center justify-center">
                                    <span className="text-3xl">{media3}</span>
                                    <div className="text-xl pt-2">{mensagem3}</div>
                                </div>
                            </div>
                        </Card>
                  </div>
                  <br />
                  <SensorTable type={type} startDate={startDate} endDate={endDate}/>
                </div>
                
            ) : (
                <p>Carregando dados...</p>
            )}
        </div>
    );    
}

export default SensorData;