import axios from "axios";

interface ReportData {
    date: string,
    title: string,
    body: string
}

export const fetchReportData = async (): Promise<ReportData[]> => {
    try {
        const response = await axios.get('http://localhost:5074/api/Reports');

        const data = response.data;

        const data2 = data.map((data:any) => ({
                date: data.date,
                title: data.title,
                body: data.body
            })
        )

        return data2;
    } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
        throw error;
    }
}