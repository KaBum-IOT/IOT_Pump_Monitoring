"use client"
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { postUserData } from "@/services/PostUserService";

export default function Register() {
    const router = useRouter()

    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: ""
    })
    const [error, setError] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!formData.username || !formData.email || !formData.password)
            setError("Todos os campos são obrigatórios")
        else {
            setError("Cadastrado!");
            postUserData({ username: formData.username, email: formData.email, password: formData.password })
            .then(data => console.log("Dados enviados com sucesso:", data))
            .catch(error => console.error("Erro:", error));
        }
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleRedirect = () => {
        router.push('/register');
    };

    return (
        <div
        className="min-h-screen flex items-center justify-center bg-cyan-400 bg-center">
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
                value="Cadastrar"
                className="w-full bg-cyan-500 text-white py-2 rounded-lg hover:bg-cyan-600 transition-colors"
              />
            </div>
          </form>
          {error && <div className="mt-4 text-red-500 text-sm">{error}</div>}
          <div className="mt-4">
          <button onClick={handleRedirect} className="w-full text-cyan-700 py-2 rounded-lg hover:text-blue-600 transition-colors">
            Login
            </button>
          </div>
        </div>
      </div>   
    );
}