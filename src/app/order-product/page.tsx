"use client";

import { useRouter } from "next/navigation";


export default function OrderProduct() {

    const router = useRouter();
    const handleClick = () => {
        console.log("Placing your order...");
        router.push("/"); 
        //OR router.replace("/"); // replace the current history state with the new one
        // router.back(); // go back to the previous page
    };

    return (
        <div>
            <h1>Order Product</h1>
            <button onClick={handleClick}> Place Order </button>
        </div>
    );
}