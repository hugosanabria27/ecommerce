import { ShoppingCartContext } from "../Context";
import { useContext } from "react";

export const UseShoppingCart = () => {
    const context = useContext(ShoppingCartContext);

    const { 
        shoppingCartCount, 
        setShoppingCartCount, 
        openProductDetail, 
        closeProductDetail, 
        setProductToShow, 
        cartProducts, 
        setCartProducts,
        isCheckoutSideMenuOpen,
        setIsCheckoutSideMenuOpen,
        openCheckoutSideMenu,
        closeCheckoutSideMenu,
        order,
        setOrder
      } = context;
    
  return {
    shoppingCartCount, 
    setShoppingCartCount, 
    openProductDetail, 
    closeProductDetail, 
    setProductToShow, 
    cartProducts, 
    setCartProducts,
    isCheckoutSideMenuOpen,
    setIsCheckoutSideMenuOpen,
    openCheckoutSideMenu,
    closeCheckoutSideMenu,
    order,
    setOrder
  }
}
