"use client"
import ProductCard from "@/components/cards/ProductCard";
import { fetchProductsData } from "@/services/ProductsData";
import React, { useEffect, useState } from "react";

// Interface do card de cada produto (parâmetros que cada card recebe -> baseado nos dados do JSON)
/* Exemplo dos dados do produto no JSON:
{
    "id": "1",
    "name": "Wireless Mouse",
    "description": "Ergonomic wireless mouse with adjustable DPI settings and long battery life.",
    "price": 29.99,
    "category": "Peripherals",
    "stock": 150,
    "sku": "WMOUSE-001",
    "image_url": "https://example.com/images/wirelessmouse.jpg",
    "rating": {
      "rate": 4.5,
      "count": 200
}
*/
// OBS: usa a mesma interface da função que extrai os dados da API
interface ProductCardProps {
    id: number;
    name: string;
    description?: string;
    price?: number;
    category?: string;
    stock?: number;
    sku?: string;
    image_url?: string;
    rating?: {
        rate: number,
        count: number
    };
}

// Define a variável 'Products' como um componente funcional react (React.FC)
const Products: React.FC = () => {
    // ProductsData são os dados dos produtos, setProductsData é uma função que vai setar esses dados (utilizada no try lá embaixo)
    // O useState define o tipo de estado eperado para ProductsData, que nesse caso é 'ProductCardProps', a interface de cada produto definida lá em cima
        // Obs: é esperado um Array da interface 'ProductCardProps', para trazer todos os cards presentes no JSON
    const [ProductsData, setProductsData] = useState<ProductCardProps[] | null>(null);

    // Obtém os dados de cada produto
    useEffect(() => {
        // Cria a função assíncrona 'getProductsData' que obtém os dados pela função 'fetchProductsData()' e, em seguida, seta os dados
        const getProductsData = async () => {
            try {
                const data = await fetchProductsData();
                setProductsData(data);
            } catch(error) {
                console.error('Erro ao requisitar os dados: ', error);
            }
        };
        // Logo após a criação da função, já a chama
        getProductsData();
    }, []
    );


    return (
        // Retorna o conteúdo da página
            // A função 'map(tipo1, tipo2)' converte, para cada item em um array, do tipo1 para o tipo2
            // Como ProductsData é um array de informações para cada produto, para cada item desse array é criado um card com suas respectivas informações
            // Dentro da div tem um operador ternário, que serve para carregar o conteúdo da página somente quando os dados forem trazidos da API (JSON)
                // Enquanto os dados não são trazidos, o texto 'Carregando dados...' é exibido
        <div>
            {ProductsData ? 
            <div className="flex">
                <main className="flex-1">
                    <div className="grid grid-cols-5 gap-4 p-4">
                        {ProductsData.map(product => (
                            <ProductCard 
                            id={product!.id}
                            name={product!.name} 
                            description={product!.description}
                            price={product!.price}
                            category={product!.category}
                            stock={product!.stock}
                            sku={product!.sku}
                            image_url={product!.image_url}
                            rating={product!.rating}
                            />
                        ))}
                        
                    </div>        
                </main>
            </div> : 
            <p>Carregando dados...</p>}
        </div>
    );
}

export default Products;