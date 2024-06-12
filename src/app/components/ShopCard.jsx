import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";
import { ShoppingCart } from "lucide-react";

const ShopCard = ({ product }) => {
    return (
        <Card className="group overflow-hidden relative">
            <CardHeader className="p-0">
                {/* Product Image */}
                <div className="relative w-full h-[300px]">
                    <Image
                        className="object-cover w-full h-full"
                        src={product.image}
                        width={500}
                        height={300}
                        alt=""
                    />
                    {/* Add to Cart Button */}
                    <div className="absolute top-4 right-4 bg-primary text-white flex items-center justify-center w-10 h-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ShoppingCart size={20} />
                    </div>
                </div>
            </CardHeader>
            <CardContent className="p-6">
                {/* Product Title */}
                <CardTitle className="font-semibold text-xl mb-4">{product.title}</CardTitle>
                {/* Product Description */}
                <CardDescription className="text-muted-foreground">{product.description}</CardDescription>
                {/* Product Price */}
                <div className="flex items-center mt-4">
                    <span className="font-semibold text-primary">{product.price}</span>
                    {/* Product Rating */}
                    <div className="ml-auto flex items-center">
                        <span className="text-xs text-primary mr-1">{product.rating}</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-4 w-4 text-primary"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M10 1c-.3 0-.6.1-.8.4L6.5 6.6 2.2 7c-.7.1-1.1 1-.7 1.6l3.2 3.1-.8 4.7c-.1.7.5 1.3 1.2 1.3.4 0 .7-.2.9-.5l3.7-3.9 3.7 3.9c.3.3.7.5 1.1.5.7 0 1.3-.6 1.2-1.3l-.8-4.7 3.2-3.1c.5-.5.2-1.4-.5-1.6l-4.3-.4L10.8 1.4C10.6 1.1 10.3 1 10 1z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ShopCard;
