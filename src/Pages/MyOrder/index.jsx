import { Layout } from "../../Components/Layout"
import { UseShoppingCart } from "../../Hooks/UseShoppingCart"
import { OrderCard } from "../../Components/OrderCard";



export const MyOrder = () => {

  const { 
    cartProducts, 
    setCartProducts,
    order,
    setOrder
   } = UseShoppingCart();
  return (
    <Layout>
        My Order
       <div className="flex flex-col w-80">
        {
          order?.slice(-1)[0].products.map( (product) => (
            <OrderCard 
              key={ product.id }
              id={ product.id }
              title={ product.title  }
              imageUrl={ product.images }
              price={ product.price }
            />
          ))
        }
        </div>
    </Layout>
  )
}
