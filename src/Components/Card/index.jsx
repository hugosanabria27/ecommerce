import { PlusIcon, CheckIcon } from "@heroicons/react/24/solid";
import { UseShoppingCart } from "../../Hooks/UseShoppingCart";


export const Card = ( { data } ) => {
  const { category, creationAt, description, id, images, price, title, updatedAt } =  data

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
    closeCheckoutSideMenu
  } = UseShoppingCart();

  const handleShowProduct = ( productDetail ) => {
    openProductDetail();
    setProductToShow( productDetail );
  }

  const addProductsToCart = ( event, productData ) => {
    event.stopPropagation();
    setShoppingCartCount( shoppingCartCount + 1 );
    setCartProducts([...cartProducts, productData]);
    openCheckoutSideMenu();
    closeProductDetail();
    console.log(cartProducts);
  }

  // const renderIcon = () => {
  //   return (
  //     <div
  //     className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
  //     onClick={ ( event ) => addProductsToCart(event, data)}>
  //     <PlusIcon className="w-6 h-6 text-black"></PlusIcon>
       
  //    </div>
  //   );
  // }

  return (
    <div 
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={ () => handleShowProduct(data) }>
        <figure className="relative mb-2 w-full h-4/5">
            <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5">{ category.name }</span>
            <img className="w-full h-full object-cover rounded-lg" src={ images[0] } alt={ description } />
            <div
             className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
             onClick={ ( event ) => addProductsToCart(event, data)}>
             <PlusIcon className="w-6 h-6 text-black"></PlusIcon>
              
            </div>

        </figure>
        <p className="flex justify-between">
            <span className="text-sm font-light">{ title }</span>
            <span className="text-lg font-bold">{ `${price}$` }</span>
        </p>
    </div>
  )
}
