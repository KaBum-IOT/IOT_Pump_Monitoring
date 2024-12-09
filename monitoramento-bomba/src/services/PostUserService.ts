import axios from "axios";

interface UserData {
    username: string;
    email: string;
    password: string;
}

export const postUserData = async (userData: UserData): Promise<UserData> => {
    try {
        const response = await axios.post('http://localhost:5074/api/Users', {
            user_name: userData.username,
            email: userData.email,
            password: userData.password,
        });

        const data = response.data;

        const formattedData: UserData = {
            username: data.user_name,
            email: data.email,
            password: data.password,
        };

        return formattedData;
    } catch (error) {
        console.error('Erro ao enviar os dados: ', error);
        throw error;
    }
};
