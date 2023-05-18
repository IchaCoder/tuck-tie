import React, { useState } from "react";
import { useGlobalContext } from "../context/context";
import SingleCartItem from "./SingleCartItem";
import { PaystackButton } from "react-paystack";

export default function () {
    const {
        showCheckOut,
        setShowCheckOut,
        cartItems,
        totalPrice,
        setCartItems,
    } = useGlobalContext();
    const publicKey = "pk_test_7bd2336b0f2e066d4a87bf9efc348eea92f67b9f";
    const amount = 1000; // Remember, set in kobo!
    const [email, setEmail] = useState("example@email.com");
    const [name, setName] = useState("Emmanuel");
    const [phone, setPhone] = useState(+233555543385);

    const componentProps = {
        email,
        amount,
        currency: "GHS",
        metadata: {
            name,
            phone,
        },
        publicKey,
        text: "Pay Now",
        onSuccess: () =>
            alert("Thanks for doing business with us! Come back soon!!"),
        onClose: () => alert("Wait! You need this oil, don't go!!!!"),
    };

    function handleOnclick(e) {
        if (e.target.classList.contains("fixed")) setShowCheckOut(false);
    }

    const clearCart = () => setCartItems([]);

    return (
        <>
            {showCheckOut && (
                <div
                    className="fixed w-full h-full bg-[rgba(0,0,0,.3)] z-10 overflow-scroll"
                    onClick={handleOnclick}
                >
                    <section className="mt-4 pb-8 max-w-[90%] sm:max-w-[50%] lg:max-w-[35%] mx-auto grid gap-4 bg-white ">
                        {cartItems.map((item) => (
                            <SingleCartItem key={item.id} item={item} />
                        ))}
                        <hr />
                        <div className="flex justify-between w-[90%] mx-auto">
                            <div>Total</div>
                            <div>GHC {totalPrice.toFixed(2)}</div>
                        </div>
                        <PaystackButton
                            className="paystack-button bg-yellow-300 w-1/2 hover:text-yellow-300 hover:bg-black button font-semibold rounded-sm  m-2 flex justify-center justify-self-center p-2 text-sm"
                            {...componentProps}
                        />
                        <button
                            onClick={clearCart}
                            className=" w-1/2 hover:text-black text-yellow-300 border border-black border-solid hover:border-none hover:bg-yellow-300 button font-semibold rounded-sm  m-2 flex justify-center justify-self-center p-2 text-sm"
                        >
                            Clear Cart
                        </button>
                    </section>
                </div>
            )}
        </>
    );
}
