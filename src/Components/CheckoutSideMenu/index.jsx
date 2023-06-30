import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'
import { OrderCard } from '../OrderCard'
import { calculateTotalPriceOfCartProduct } from '../../utils'
import { UseShoppingCart } from '../../Hooks/UseShoppingCart'
import { Link } from 'react-router-dom'



export const CheckoutSideMenu = () => {

  const { 
    isCheckoutSideMenuOpen, 
    closeCheckoutSideMenu, 
    cartProducts, 
    setCartProducts, 
    order, 
    setOrder, 
    shoppingCartCount,
    setShoppingCartCount } = UseShoppingCart();

  // console.log("CART: ",cartProducts);
  // console.log("CART: ",cartProducts.length)

  const handleDelete = ( id ) => {
    const filteredProducts = cartProducts.filter( product => product.id !== id);
    setCartProducts( filteredProducts );
    setShoppingCartCount( shoppingCartCount - 1 );
  }

  const handleCheckout = () => {
    const orderToAdd = {
      date: '01.02.2023',
      products: cartProducts,
      totalProducts: cartProducts.length,
      totalPrice: calculateTotalPriceOfCartProduct( cartProducts )
    }

    // Delete the products from the cart as you confirm the checkout :D
    setOrder([...order, orderToAdd]);
    setCartProducts([]);
    setShoppingCartCount(0);
  }


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
        <div className="px-6 overflow-y-scroll flex-1">
        {
          cartProducts.map( (product) => (
            <OrderCard 
              key={ product.id }
              id={ product.id }
              title={ product.title  }
              imageUrl={ product.images }
              price={ product.price }
              handleDelete={ handleDelete }
            />
          ))
        }
        </div>

        <div className="px-6 mb-6">
          <p className="flex justify-between items-center mb-2">
            <span className="font-light">Total: </span>
            <span className="font-bold text-2xl">${ calculateTotalPriceOfCartProduct( cartProducts ) }</span>
          </p>
          <Link to={"/my-orders/last"}>
            <button className="bg-black py-3 text-white w-full rounded-lg" onClick={() => handleCheckout() }>Checkout</button>
          </Link>
        </div>
    </aside>
  );
}
