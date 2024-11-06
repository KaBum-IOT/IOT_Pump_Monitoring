import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import React from "react";

export default function Login() {
    return (
        <div className="flex">
          <Sidebar />
          <div className="flex-1">
            <Header title="IoT" username="André Souza" />
            <main>
              <h1>Login</h1>

                Campos de entrada para nome de usuário e senha.<br />
                Botão de login.<br />
                Link para "Esqueci minha senha".<br />

            </main>
          </div>
        </div>
    );
}
