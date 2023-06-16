import { ProductDetail } from "../../Components/ProductDetail"
import { useState, useEffect } from "react"
import { Layout } from "../../Components/Layout"
import { Card } from "../../Components/Card/index"

export const Home = () => {

  const apiUrl = "https://api.escuelajs.co/api/v1/products";

  const [products, setProducts] = useState(null);
  
  const fetchData = async () => {
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      // console.log( data );
      setProducts(data);
    } catch ( error ) {
      console.log(`Ocurrio un error al obtener los productos: ${error}`);
    }
  }

  useEffect( () => {
    fetchData();
  }, [])


  return (
    <Layout className="bg-red-100">
      Home
      <div className="grid gap-4 grid-cols-4 w-full max-w-screen-lg">
        {
          products?.map ( ( product ) => (
            <Card key={ product.id } data={ product } />
          ))
        }
      </div>
      <ProductDetail />
    </Layout>
  );
}
