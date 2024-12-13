import axios from "axios";

interface ReportData {
    date: string;
    title: string;
    body: string;
}

export const postReportData = async (reportData: ReportData): Promise<ReportData> => {
    try {
        const response = await axios.post('http://localhost:5074/api/Reports', {
            date: reportData.date,
            title: reportData.title,
            body: reportData.body,
        });

        const data = response.data;

        const formattedData: ReportData = {
            date: data.date,
            title: data.title,
            body: data.body,
        };

        return formattedData;
    } catch (error) {
        console.error('Erro ao enviar os dados: ', error);
        throw error;
    }
};