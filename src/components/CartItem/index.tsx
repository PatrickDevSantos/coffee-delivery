import { Minus, Plus, Trash } from 'phosphor-react'
import { useContext } from 'react'
import {
  cartContext,
  CartItem as CartItemType,
} from '../../contexts/CartContext'
import {
  CartQuantity,
  CartItemButtonContainer,
  CartItemContainer,
  CartItemTitle,
  CartItemPrice,
  CartItemRemoveButton,
  CartItemInfo,
} from './styles'

interface Props {
  data: CartItemType
}

export function CartItem({ data }: Props) {
  const { addQuantityToCart, removeQuantityToCart, removeToCart } =
    useContext(cartContext)

  return (
    <CartItemContainer>
      <img src={data.image} alt="" />
      <CartItemInfo>
        <CartItemTitle>{data.title}</CartItemTitle>
        <CartItemButtonContainer>
          <CartQuantity>
            <button type="button" onClick={() => removeQuantityToCart(data, 1)}>
              <Minus size={14} weight="bold" />
            </button>
            <input type="text" name="quantity" value={data.quantity} />
            <button type="button" onClick={() => addQuantityToCart(data, 1)}>
              <Plus size={14} weight="bold" />
            </button>
          </CartQuantity>
          <CartItemRemoveButton onClick={() => removeToCart(data.id)}>
            <Trash size={16} />
            <span>REMOVER</span>
          </CartItemRemoveButton>
        </CartItemButtonContainer>
      </CartItemInfo>
      <CartItemPrice>
        {new Intl.NumberFormat('pt-BR', {
          style: 'currency',
          currency: 'BRL',
          minimumFractionDigits: 2,
        }).format(data.price * data.quantity)}
      </CartItemPrice>
    </CartItemContainer>
  )
}
