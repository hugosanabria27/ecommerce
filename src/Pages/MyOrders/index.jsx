import { Layout } from "../../Components/Layout"
import { OrdersCard } from "../../Components/OrdersCard"
import { UseShoppingCart } from "../../Hooks/UseShoppingCart"

export const MyOrders = () => {
  return (
    <Layout>
      MyOrders
      <OrdersCard />
    </Layout>
  )
}
