import { XMarkIcon } from "@heroicons/react/24/solid"

export const OrdersCard = ({ totalPrice, totalProducts }) => {

  return (
    <div className="flex justify-between items-center mb-3 border border-black">
      <p>
        <span>01.02.23</span>
        <span>{ totalProducts }</span>
        <span>{ totalPrice }</span>
      </p>
    </div>
  )
}
