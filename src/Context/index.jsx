import { createContext, useState } from "react"

export const ShoppingCartContext = createContext(null);


export const ShoppingCartProvider = ( { children } ) => {

    // Shopping Cart Increment Counter
    const [shoppingCartCount, setShoppingCartCount] = useState(0);


    // Product Detail  Open / Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu Open / Close
    const [isCheckoutSideMenuOpen, setIsCheckoutSideMenuOpen] = useState(false);
    const openCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(true);
    const closeCheckoutSideMenu = () => setIsCheckoutSideMenuOpen(false);

    //Product Detail - Show Product
    const [productToShow, setProductToShow] = useState({});

    //Shopping Cart - Add Products
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <ShoppingCartContext.Provider value={ {
            shoppingCartCount,
            setShoppingCartCount,
            isProductDetailOpen,
            openProductDetail,
            closeProductDetail,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckoutSideMenuOpen,
            setIsCheckoutSideMenuOpen,
            openCheckoutSideMenu,
            closeCheckoutSideMenu
        } }>
            { children }
        </ShoppingCartContext.Provider>
    );
}