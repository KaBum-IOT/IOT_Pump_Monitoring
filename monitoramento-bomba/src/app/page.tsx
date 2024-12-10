"use client"
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import SensorData from "@/components/sensor/SensorData";
import React, { useState, useEffect } from "react";
import { postSensorData } from "@/services/PostSensorService";

export default function Home() {
  const [formData, setFormData] = useState({
    date: "",
    temperature: "",
    vibration: "",
    current: ""
  })

  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault()
      if (!formData.date || !formData.temperature || !formData.vibration || !formData.current)
          setError("Todos os campos são obrigatórios")
      else {
          postSensorData({ date: formData.date, temperature: formData.temperature, vibration: formData.vibration, current: formData.current })
          .then(data => console.log("Dados enviados com sucesso:", data))
          .catch(error => console.error("Erro:", error));
      }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({...formData, [e.target.name]: e.target.value})
  }
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Página Inicial" username="Username" />
        <main className="p-4 flex-1 flex flex-col text-black overflow-auto mt-[64px]">

            {/* Boas-vindas */}
            <section className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold">Bem-vindo de volta!</h2>
            <p className="text-gray-600 mt-2">
              Olá! Acompanhe os dados do projeto via cards abaixo ou navegando na barra lateral!
            </p>
          </section>

          <SensorData type={"total"}/>

          {/* Inputs para adicionar linha */}
          <section className="bg-white p-6 rounded-lg shadow-md mt-4">
            <h3 className="text-xl font-bold mb-4">Adicionar Dados</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-4 gap-4">
                <div>
                  <label className="block font-medium text-sm mb-1" htmlFor="date">
                    Data
                  </label>
                  <input
                    type="text"
                    name="date"
                    id="date"
                    value={formData.date}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1" htmlFor="temperature">
                    Temperatura
                  </label>
                  <input
                    type="text"
                    name="temperature"
                    id="temperature"
                    value={formData.temperature}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1" htmlFor="vibration">
                    Vibração
                  </label>
                  <input
                    type="text"
                    name="vibration"
                    id="vibration"
                    value={formData.vibration}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
                <div>
                  <label className="block font-medium text-sm mb-1" htmlFor="current">
                    Corrente
                  </label>
                  <input
                    type="text"
                    name="current"
                    id="current"
                    value={formData.current}
                    onChange={handleChange}
                    className="border border-gray-300 rounded-lg p-2 w-full"
                  />
                </div>
              </div>
              <button
                type="submit"
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
              >
                Adicionar Linha
              </button>
              {error && <div className="text-red-500 text-sm mt-2">{error}</div>}
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}