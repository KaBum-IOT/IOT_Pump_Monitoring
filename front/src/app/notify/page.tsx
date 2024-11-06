import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Report() {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="Relatórios" username="André Souza" />
            <main>
              <h1>Alertas e Notificações</h1>

                Lista de alertas em tempo real (ex: aumento súbito na taxa de defeitos, consumo excessivo de energia).<br />
                Filtros para classificar alertas por tipo (Ex: produção, energia, qualidade).<br />
                Botão para marcar alertas como resolvidos ou arquivar.<br />
                Indicadores visuais (cores) para alertas de maior prioridade.

            </main>
          </div>
        </div>
    );
}

// React Router-DOM