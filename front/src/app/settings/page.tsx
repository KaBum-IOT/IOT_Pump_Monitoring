import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Settings() {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="Relatórios" username="André Souza" />
            <main>
              <h1>Configurações</h1>

                Seção de gerenciamento de usuários (criar, editar, excluir usuários).<br />
                Configuração de parâmetros de sensores (atualização da frequência de leitura dos sensores, calibração).<br />
                Configuração de alertas e notificações (definir limites para alertas de defeitos ou consumo de energia).<br />
                Opção para configurar as preferências de visualização no dashboard (ex: escolher quais KPIs aparecem).

            </main>
          </div>
        </div>
    );
}

// React Router-DOM