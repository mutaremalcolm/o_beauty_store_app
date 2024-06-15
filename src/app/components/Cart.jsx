"use client"

import { useCart } from '../contexts/cartContext';
import Image from 'next/image';
import { ShoppingBag } from 'lucide-react';

const Cart = () => {
    const { cart } = useCart();

    return (
        <div className="cart">
            <h2 className="section-title">
                <ShoppingBag/>
            </h2>
            <ul>
                {cart.map((item, index) => (
                    <li key={index} className="cart-item">
                        <Image src={item.image} alt={item.title} width={50} height={50} />
                        <div className="cart-item-details">
                            <h4>{item.title}</h4>
                            <p>{item.price}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Cart;
