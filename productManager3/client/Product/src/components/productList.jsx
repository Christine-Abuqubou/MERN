import React, { useEffect,useState } from "react";
import { useParams } from "react-router-dom";


function ProductList() {
    const [products, setProducts] = useState(null);
    const { id } = useParams();



    useEffect(() => {
        fetch("http://localhost:8000/products/" + id)
            .then((res) => res.json())
            .then((data) => setProducts(data));
    }, [id]);

    return (
        <>
            <h1>ProductList</h1>
            {products && (
                <div>
            <h2>{products.name}</h2>
            <h2>{products.price}</h2>
            <h2>{products.description}</h2>
            </div>
            )}


        </>
    );
}

export default ProductList