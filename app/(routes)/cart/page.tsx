"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { useState, useEffect } from "react";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const cart = useCart();

  useEffect(() => {
    if (isMounted) return;
    setIsMounted(true);
  }, [isMounted]);

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1>Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
            <div className="lg:col-span-7">
              {cart.items.length === 0 && (
                <p className="text-neutral-500">No Items added</p>
              )}
              <ul>
                {cart.items.map(product => (
                  <CartItem key={product.id} product={product} />
                ))}
              </ul>
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartPage;
