import React from "react";
import Image from "next/image";

interface HeaderProps {
    title: string;
    username?: string;
}

export default function Header({title, username}:HeaderProps) {

  return (
    <header className="header">
        <div className="header-left">
            <h1>{title}</h1>
        </div>
        <div className="header-right">
            {username && 
                <div className="flex">
                    <Image src="/images/user2.png" width={32} height={0} alt="user" className="pb-4 pt-3" />
                    <span className="p-4">Bem-vindo {username}</span>
                </div>
            }
        </div>
    </header>
  );

}