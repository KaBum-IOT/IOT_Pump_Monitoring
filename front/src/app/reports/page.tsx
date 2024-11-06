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
              <h1>Relatórios</h1>

              Formulário para selecionar parâmetros do relatório (Ex: período, etapa da produção, tipo de relatório: produção, consumo de energia, defeitos).<br />
              Botão "Gerar Relatório".<br />
              Relatórios em PDF ou CSV disponíveis para download.<br />
              Gráfico gerado com base nos parâmetros escolhidos (Ex: produção diária, comparativo de consumo de energia entre turnos).<br />
              Tabela resumida com os principais dados do relatório

            </main>
          </div>
        </div>
    );
}

// React Router-DOM