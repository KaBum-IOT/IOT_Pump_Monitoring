import Card from "@/components/cards/Card";
import DashDataTable from "@/components/tables/DataTable";
import LineChart from "@/components/charts/LineChart";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Página Inicial" username="André Souza" />
        <main className="p-4 flex-1 flex flex-col">
          <div className="grid grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 pb-4">

            <Card bgcolor="bg-green-600">
              <div className="flex items-center gap-8">
                <i className='pi pi-clock text-5xl px-4'></i>
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-3xl">30s</span>
                  <div className="text-xl pt-2">Tempo de Ciclo Médio</div>
                </div>
              </div>
            </Card>

            <Card bgcolor="bg-yellow-700">
              <div className="flex items-center gap-8">
                <i className='pi pi-cog text-5xl px-4'></i>
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-3xl">245</span>
                  <div className="text-xl pt-2">Peças Produzidas (24h)</div>
                </div>
              </div>
            </Card>

            <Card bgcolor="bg-blue-600">
              <div className="flex items-center gap-8">
                <i className='pi pi-exclamation-triangle text-5xl px-4'></i>
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-3xl">7,45%</span>
                  <div className="text-xl pt-2">Taxa de Defeitos</div>
                </div>
              </div>
            </Card>

            <Card bgcolor="bg-red-600">
              <div className="flex items-center gap-8">
                <i className='pi pi-lightbulb text-5xl px-4'></i>
                <div className="flex flex-col items-center justify-center h-full">
                  <span className="text-3xl">350kWh</span>
                  <div className="text-xl pt-2">Consumo de Energia</div>
                </div>
              </div>
            </Card>
            
          </div>
          <div className="grid grid-cols-1 2xl:grid-cols-2 gap-4">
            <Card header="Produção vs. Defeitos" bgcolor="bg-gray-500">
              <div className="bg-white"><LineChart /></div>
            </Card>

            <Card header="Desempenho por Etapa" bgcolor="bg-gray-500">
              <DashDataTable />
            </Card>
            
          </div>
        </main>
      </div>
    </div>
  );
}