"use client"
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { fetchUserData } from "@/services/UserService";

interface UserData {
    username: string,
    email: string,
    password: string
}

export default function Register() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("");

    const [userData, setUserData] = useState<UserData[] | null>(null);

    useEffect(() => {
        const getSensorData = async () => {
            try {
                const data = await fetchUserData();
                setUserData(data);
            } catch (error) {
                console.error('Erro ao requisitar os dados');
            }
        };
        getSensorData();
    }, []);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.username || !formData.email || !formData.password)
            setError("Todos os campos são obrigatórios")
        else if (!userData || !userData.some(user => user.username === formData.username && user.email === formData.email && user.password === formData.password))
            setError("Os usuários não existem");
        else {
            setError("")
            const url =''
            await axios.post(
                url, formData, {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    }
                }
            ).then ((response) => {
                    router.push('./')
                }
            ).catch((error) => {
                    setError(JSON.stringify(error.response.data))
                }
            );

        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleRedirect = () => {
        router.push('/cadaster');
    };

    return (
        <div
        className="min-h-screen flex items-center justify-center bg-cyan-200 bg-center">
        <div className="p-6 max-w-md bg-white rounded-lg shadow-md text-gray-900">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-medium text-sm mb-1" htmlFor="username">
                Usuário
              </label>
              <input
                type="text"
                name="username"
                id="username"
                required
                value={formData.username}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-sm mb-1" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <label className="block font-medium text-sm mb-1" htmlFor="password">
                Senha
              </label>
              <input
                type="password"
                name="password"
                id="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              />
            </div>
            <div>
              <input
                type="submit"
                value="Entrar"
                className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              />
            </div>
          </form>
          {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
          <div className="mt-4">
          <button onClick={handleRedirect} className="w-full text-cyan-700 py-2 rounded-lg hover:text-blue-600 transition-colors">
            Cadastre-se
            </button>
          </div>
        </div>
      </div>   
    );
}