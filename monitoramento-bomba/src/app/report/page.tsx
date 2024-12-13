"use client";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import jsPDF from "jspdf";
import { postReportData } from "@/services/PostReportService";
import { fetchReportData } from "@/services/ReportService";
import { format } from "date-fns";
import React, { useState, useEffect } from "react";
import Card from "@/components/cards/Card";

interface ReportData {
    date: string;
    title: string;
    body: string;
  }
  
  export default function Report() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [reportData, setReportData] = useState<ReportData[] | null>(null);
    const [reload, setReload] = useState(false);
    
  
    const generatePDF = () => {
        const doc = new jsPDF();
        doc.setFontSize(18);
        doc.text(title, 10, 20);
        doc.setFontSize(12);
        doc.text(body, 10, 30);
        doc.save("report.pdf");
      
        const now = new Date();
        const formattedDate = format(now, "dd/MM/yyyy HH:mm:ss");
      
        postReportData({ date: formattedDate, title, body })
          .then((data) => {
            console.log("Dados enviados com sucesso:", data);
            setReload((prev) => !prev); 
          })
          .catch((error) => console.error("Erro:", error));
      };
  
    const fetchData = async () => {
      try {
        const data = await fetchReportData();
        setReportData(data);
        setReload(false);
      } catch (error) {
        console.error("Erro ao requisitar os dados:", error);
      }
    };
  
    useEffect(() => {
      fetchData();
    }, [reload]);
  
    if (!reportData) {
      return <p>Carregando dados...</p>;
    }
  
    return (
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col">
          <Header title="Relatório" username="Username" />
          <main className="p-4 flex-1 flex flex-col text-black space-y-4">
            <div>
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Título do Relatório:
              </label>
              <input
                id="title"
                type="text"
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>
  
            <div>
              <label htmlFor="body" className="block text-sm font-medium text-gray-700">
                Corpo do Relatório:
              </label>
              <textarea
                id="body"
                rows={6}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                value={body}
                onChange={(e) => setBody(e.target.value)}
              ></textarea>
            </div>
  
            <button onClick={generatePDF} className="w-full px-4 py-2 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Baixar PDF
            </button>
  
            <div className="grid grid-cols-3 gap-4">
                {reportData.map((report, index) => (
                <Card key={index} bgcolor="bg-blue-200 shadow-lg">
                    <div className="flex items-center justify-center gap-8 text-center text-black">
                        <div className="flex flex-col items-center justify-center">
                        <span className="text-lg font-bold">{report.title}</span>
                        <span className="text-sm text-gray-500">{report.date}</span>
                            <button
                                onClick={() => {
                                const doc = new jsPDF();
                                doc.setFontSize(18);
                                doc.text(report.title, 10, 20);
                                doc.setFontSize(12);
                                doc.text(report.date, 10, 30);
                                doc.text(report.body, 10, 40);
                                doc.save("report.pdf");
                                }}
                                className="mt-4 py-2 px-3 bg-indigo-600 text-white font-semibold rounded-md shadow hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Baixar PDF
                            </button>
                        </div>
                    </div>
                </Card>
                ))}
            </div>
          </main>
        </div>
      </div>
    );
  }
