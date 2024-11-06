"use client"
import axios from "axios";

// Usa a mesma interface do componente 'Products.tsx' que exibe todos os produtos
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

// Função assíncrona que extrai os dados da API
    // Retorna uma promessa (Promise) do tipo 'ProductCardProps', que é a interface declarada acima
    // OBS: retorna um array pois retorna uma lista de dados para cada objeto extraído do JSON (API)
export const fetchProductsData = async (): Promise<ProductCardProps[]> => {
    try {
        // Acessa o JSON que contém os dados -> esse JSON é enviado pelo endpoint do backend nesse link abaixo
        const response = await axios.get(
            'https://api.mockae.com/fakeapi/products/'
        );

        // Pega os dados do JSON
        const data = response.data;

        // Dados extraídos da API
            // A extração funciona acessando cada campo do JSON (como se fosse um dict, dicionário)
            // A função map mapeia cada item 'data: any' contido no array 'data' (dados extraídos do JSON) para o modelo definido na interface declarada acima
        const productsData = data.map((data: any) => ({
            id: data.id,
            name: data.name,
            description: data.description,
            price: data.price,
            category: data.category,
            stock: data.stock,
            sku: data.sku,
            image_url: data.image_url,
            rating: {
                rate: data.rating.date,
                count: data.rating.count
            }
        }))

        // Retorna os dados
        return productsData;
    } catch(error) {
        console.error('Erro ao buscar os dados: ', error);
        throw error;
    }
};