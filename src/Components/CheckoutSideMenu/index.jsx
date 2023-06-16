import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../OrderCard'

export const CheckoutSideMenu = () => {
  const context = useContext(ShoppingCartContext);
  const { isCheckoutSideMenuOpen, closeCheckoutSideMenu, cartProducts } = context;
  console.log("CART: ",cartProducts);


  return (
    <aside 
      className={`${isCheckoutSideMenuOpen ? "flex" : "hidden"}  : flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] top-[68px] h-[calc(100vh-68px)] mr-2`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">My Order</h2>
            <div>
              <XMarkIcon 
                className="h-6 w-6 cursor-pointer"
                onClick={ () => closeCheckoutSideMenu() }></XMarkIcon>
            </div>
        </div>
        <div className="px-6 overflow-y-scroll">
        {
          cartProducts.map( (product) => (
            <OrderCard 
              key={ product.id }
              title={ product.title  }
              imageUrl={ product.images }
              price={ product.price }
            />
          ))
        }
      </div>
    </aside>
  );
}
