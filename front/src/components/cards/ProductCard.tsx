"use client"
import React from "react";
import Image from "next/image";
import Link from "next/link";

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

export default function UserCard({id, name, description, price, category, stock,
        sku, image_url, rating}:ProductCardProps) {
    
    return (
        <div className="bg-gray-600 opacity-70 rounded-xl flex flex-col max-w-240 text-center items-center p-4">
            {image_url && <Image src={image_url} width={240} height={0} alt={name} className="rounded-2xl" />}
            <br />
            {category && <p className="font-light text-sm">{category}</p>}
            <p className="font-bold text-lg">{name}</p>
            <p className="">{`R$${price}`}</p>
            <Link href={`/products/${id}`}>
                <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded  hover:bg-blue-800">
                    Comprar
                </button>
            </Link>
        </div>
    );
}