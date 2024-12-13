'use client'
import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {

  const pathname = usePathname();

  return (
    <nav className="navbar">
        <div className="navbar-top">
            <Link href="/" className={`navlink ${pathname === '/' ?'active':''}`}>
                <i className="pi pi-home pr-4"></i> Home</Link>
            <Link href="/temperature" className={`navlink ${pathname === '/temperature' ?'active':''}`}>
                <i className="pi pi-lightbulb pr-4"></i> Sensor de temperatura</Link>
            <Link href="/vibration" className={`navlink ${pathname === '/vibration' ?'active':''}`}>
                <i className="pi pi-wave-pulse pr-4"></i> Sensor de vibração</Link>
            <Link href="/current" className={`navlink ${pathname === '/current' ?'active':''}`}>
                <i className="pi pi-bolt pr-4"></i> Sensor de corrente</Link>
                <Link href="/report" className={`navlink ${pathname === '/report' ?'active':''}`}>
                <i className="pi pi-file pr-4"></i> Relatórios</Link>
        </div>
        <div className="navbar-bottom">
            <hr />
            <Link href="/register" className="navlink">
                <i className="pi pi-sign-out pr-4"></i> Sair</Link>
        </div>
      </nav>
  );
}
