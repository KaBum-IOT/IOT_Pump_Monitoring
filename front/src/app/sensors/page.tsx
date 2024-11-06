import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Sensor() {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="Sensores" username="André Souza" />
            <main>
              <h1>Conteúdo</h1>
              Nome do Sensor <br />
              Tipo de Sensor <br />
              Localização <br />
              <br />
              Listagem de Sensores
            </main>
          </div>
        </div>
    );
}