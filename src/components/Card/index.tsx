import {
  CardButtonsContainer,
  CardBuyButton,
  CardContainer,
  CardInfoContainer,
  CardPrice,
  CardQuantity,
  CardSubtitle,
  CardTag,
  CardTagsContiner,
  CardTitle,
} from './styles'

import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { Coffee } from '../../pages/Home'
import { FormEvent, useContext, useState } from 'react'
import { cartContext } from '../../contexts/CartContext'

interface Props {
  data: Coffee
}

export function Card({ data }: Props) {
  const { addQuantityToCart } = useContext(cartContext)
  const [quantity, setQuantity] = useState(1)

  function handleAddItemToCart(event: FormEvent) {
    event.preventDefault()
    addQuantityToCart(data, quantity)
    setQuantity(1)
  }

  function handleDecreaseValue() {
    if (quantity > 1) {
      setQuantity((state) => (state -= 1))
    }
  }

  function handleIncreaseValue() {
    setQuantity((state) => (state += 1))
  }

  return (
    <CardContainer>
      <img src={data.image} alt="" />
      <CardTagsContiner>
        {data.tags.map((item) => (
          <CardTag key={item}>{item}</CardTag>
        ))}
      </CardTagsContiner>
      <CardTitle>{data.title}</CardTitle>
      <CardSubtitle>{data.description}</CardSubtitle>
      <CardInfoContainer>
        <CardPrice>
          R$
          <strong>
            {new Intl.NumberFormat('pt-BR', {
              minimumFractionDigits: 2,
            }).format(data.price)}
          </strong>
        </CardPrice>
        <CardButtonsContainer onSubmit={handleAddItemToCart}>
          <CardQuantity>
            <button type="button" onClick={handleDecreaseValue}>
              <Minus size={14} weight="bold" />
            </button>
            <input
              type="text"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(parseInt(e.target.value))}
            />
            <button type="button" onClick={handleIncreaseValue}>
              <Plus size={14} weight="bold" />
            </button>
          </CardQuantity>
          <CardBuyButton type="submit">
            <ShoppingCart weight="fill" size={22} />
          </CardBuyButton>
        </CardButtonsContainer>
      </CardInfoContainer>
    </CardContainer>
  )
}
