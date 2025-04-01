export default function ProductDetail( {params} : { //params is the folder [productId]
    params: { productId: string };
}) {
    return <h1>Details about product {params.productId}</h1>;
}
