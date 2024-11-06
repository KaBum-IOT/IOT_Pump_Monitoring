import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Monitoring() {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="IoT" username="André Souza" />
            <main>
              <h1>Monitoramento em Tempo Real</h1>

                Seletor de período (última hora, últimas 24h, semana, mês).<br />
                Gráfico de barras em tempo real para quantidade de peças produzidas por etapa de produção.<br />
                Gráfico de linhas para taxa de defeitos ao longo do tempo.<br />
                Gráfico de área para monitoramento do consumo de energia em tempo real.<br />
                Indicadores em tempo real (cards) de performance de cada etapa da linha de produção.<br />
                Tabela interativa com atualização automática listando dados de cada etapa, como tempo de ciclo, peças produzidas, defeitos, e consumo energético.


            </main>
          </div>
        </div>
    );
}
