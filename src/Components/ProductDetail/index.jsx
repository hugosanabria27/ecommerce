import { useContext } from 'react'
import { ShoppingCartContext } from '../../Context'
import { XMarkIcon } from '@heroicons/react/24/solid'

export const ProductDetail = () => {
  const context = useContext(ShoppingCartContext);
  const { isProductDetailOpen, closeProductDetail, productToShow } = context;
  return (
    <aside className={`${isProductDetailOpen ? "flex" : "hidden"}  : flex flex-col fixed right-0 border border-black rounded-lg bg-white w-[360px] top-[68px] h-[calc(100vh-68px)] mr-2`}>
        <div className="flex justify-between items-center p-6">
            <h2 className="font-medium text-xl">Detail</h2>
            <div>
              <XMarkIcon 
                className="h-6 w-6 cursor-pointer"
                onClick={ () => closeProductDetail() }></XMarkIcon>
            </div>
        </div>
        <figure className="px-6">
          <img 
            className="w-full h-full rounded-lg" 
            src={ productToShow?.images } 
            // src={ productToShow?.images ? productToShow?.images[0] : "" } 
            alt={ productToShow?.title } />
        </figure>
        <p className="flex flex-col p-6">
          <span className="font-bold text-2xl mb-2">${ productToShow?.price }</span>
          <span className="font-medium text-md">{ productToShow?.title }</span>
          <span className="font-light text-sm">{ productToShow?.description }</span>
        </p>
    </aside>
  );
}
