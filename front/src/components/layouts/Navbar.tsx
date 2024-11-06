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
            <Link href="/reports" className={`navlink ${pathname === '/reports' ?'active':''}`}>
                <i className="pi pi-receipt pr-4"></i> Reports</Link>
            <Link href="/reports" className={`navlink ${pathname === '/sensors' ?'active':''}`}>
                <i className="pi pi-eye pr-4"></i> Sensors</Link>
            <Link href="/reports" className={`navlink ${pathname === '/monitoring' ?'active':''}`}>
                <i className="pi pi-desktop pr-4"></i> Monitoring</Link>
            <Link href="/reports" className={`navlink ${pathname === '/configuration' ?'active':''}`}>
                <i className="pi pi-cog pr-4"></i> Configuration</Link>
            <Link href="/reports" className={`navlink ${pathname === '/login' ?'active':''}`}>
                <i className="pi pi-user pr-4"></i> Login</Link>
        </div>
        <div className="navbar-bottom">
            <hr />
            <Link href="/logout" className="navlink">
                <i className="pi pi-sign-out pr-4"></i> Logout</Link>
        </div>
      </nav>
  );
}
