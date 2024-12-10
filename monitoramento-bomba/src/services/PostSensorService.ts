import axios from "axios";

interface SensorData {
    date: string;
    temperature: number;
    vibration: number;
    current: number;
}

export const postSensorData = async (sensorData: SensorData): Promise<SensorData> => {
    try {
        const response = await axios.post('http://localhost:5074/api/Users', {
            date: sensorData.date,
            temperature: sensorData.temperature,
            vibration: sensorData.vibration,
            current: sensorData.current,
        });

        const data = response.data;

        const formattedData: SensorData = {
            date: data.date,
            temperature: data.temperature,
            vibration: data.vibration,
            current: data.current,
        };

        return formattedData;
    } catch (error) {
        console.error('Erro ao enviar os dados: ', error);
        throw error;
    }
};
