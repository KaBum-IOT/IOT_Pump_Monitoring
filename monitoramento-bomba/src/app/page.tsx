import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import SensorData from "@/components/sensor/SensorData";
import React from "react";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Página Inicial" username="Test" />
        <main className="p-4 flex-1 flex flex-col text-black">

            {/* Boas-vindas */}
            <section className="bg-white p-6 rounded-lg shadow-md mb-4">
            <h2 className="text-2xl font-bold">Bem-vindo de volta!</h2>
            <p className="text-gray-600 mt-2">
              Olá! Acompanhe os dados do projeto via cards abaixo ou navegando na barra lateral!
            </p>
          </section>

          <SensorData type={"total"}/>

        </main>
      </div>
    </div>
  );
}