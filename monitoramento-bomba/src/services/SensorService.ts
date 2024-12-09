import axios from "axios";

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

export const fetchSensorData = async (): Promise<SensorData[]> => {
    try {
        const response = await axios.get('http://localhost:5074/api/Sensors');

        const data = response.data;

        const data2 = data.map((data:any) => ({
                labels: data.date,
                datasets: 
                    {
                        temperature: {
                            label: 'Temperatura (Cº)',
                            data: data.temperature,
                            borderColor: '#FF8384',
                            backgroundColor: 'rgba(255, 99, 132, 0.2)',
                            fill: true,
                            tension: 0.4,
                        },
                        vibration: {
                            label: 'Vibração (%)',
                            data: data.vibration,
                            borderColor: '#36A2EB',
                            backgroundColor: 'rgba(54, 162, 235, 0.2)',
                            fill: true,
                            tension: 0.4,
                        },
                        current: {
                            label: 'Corrente (A)',
                            data: data.current,
                            borderColor: '#FFCE56',
                            backgroundColor: 'rgba(255, 206, 86, 0.2)',
                            fill: true,
                            tension: 0.4,
                        }
                    }
                
            })
        )

        return data2;
    } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
        throw error;
    }
}