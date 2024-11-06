"use client"
import React, { useState, useEffect } from "react";
import Header from "@/components/layouts/Header";
import Sidebar from "@/components/layouts/Sidebar";
import axios from "axios";
// Usa os parâmetros passados na URL da página (nesse caso, o id do produto quando é clicado no 'Comprar' do seu respectivo card)
    // Só funciona pois o nome da pasta criada é [id] ([parâmetro])
import { useParams } from "next/navigation";
import Image from "next/image";

// Detalhes dos produtos (informações deles contidas no JSON)
interface ProductDetail {
    id: number;
    name: string;
    description?: string;
    price?: number;
    category?: string;
    stock?: number;
    sku?: string;
    image_url: string;
    rating?: {
        rate: number,
        count: number
    };
}

// Página dos produtos -> A lógica da requisição de dados via API está dentro do componente 'Products'
const ProductDetails: React.FC = () => {
    // Pega o id do produto da URL
    const id = useParams().id;
    // Cria a variável produtos, que começa inicialmente nula '(null)' e, a função que seta seu valor, é a função 'setProduct'
        // 'product' é do tipo 'ProductDetail', ou seja, segue o mesmo formato da interface declarada acima), ou pode ser nulo, pois começa inicialmente nulo
    const [product, setProduct] = useState<ProductDetail | null> (null);

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const response = await axios.get(`https://api.mockae.com/fakeapi/products/${id}`);
                setProduct(response.data);
            } catch(error) {
                console.error("Erro ao buscar os dados do produto: ", error);
                throw error;
            }
        };
        
        getProductDetail();
    }, [])

    return (
        <div className="flex">
        <Sidebar />
        <div className="flex-1 flex flex-col">
            <Header title="Produto" username="André Souza" />
            <main className="flex-1">
                { product ? 
                    <div className="flex flex-col items-center">
                        <div className="w-full ">
                            <Image
                                src={"https://m.media-amazon.com/images/I/61UxfXTUyvL.jpg"}
                                alt={product.name}
                                width={400}
                                height={500}
                                 />
                        </div>
                    </div>  :  
                    <div>
                        <p>Carregando...</p>    
                    </div>
                }
            </main>
        </div>
        </div>
    );
}

export default ProductDetails;