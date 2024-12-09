import axios from "axios";

interface UserData {
    username: string,
    email: string,
    password: string
}

export const fetchUserData = async (): Promise<UserData[]> => {
    try {
        const response = await axios.get('http://localhost:5074/api/Users');

        const data = response.data;

        const data2 = data.map((data:any) => ({
                username: data.user_name,
                email: data.email,
                password: data.password
            })
        )

        return data2;
    } catch (error) {
        console.error('Erro ao buscar os dados: ', error);
        throw error;
    }
}