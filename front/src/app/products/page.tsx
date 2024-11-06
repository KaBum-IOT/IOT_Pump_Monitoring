"use client"
import React from "react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import Products from "@/components/products/Products";

// Página dos produtos -> A lógica da requisição de dados via API está dentro do componente 'Products'
export default function User() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Usuários" username="André Souza" />
        <main className="flex-1">
          <Products />     
        </main>
      </div>
    </div>
  );
}