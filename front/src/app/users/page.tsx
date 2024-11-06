import React from "react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import UserCard from "@/components/cards/UserCard";

export default function User() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header title="Usuários" username="André Souza" />
        <main className="flex-1">
          <div className="grid grid-cols-5 gap-4 p-4 bg-slate-400 place-items-center">
            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />

            <UserCard 
              imageSrc="/images/profiles/RafaelRodrigues.png"
              position="Supervisor"
              department="Linha de Montagem"
              name="Rafael Rodrigues"
              idProfile="1"
            />
          </div>
          
        </main>
      </div>
    </div>
  );
}