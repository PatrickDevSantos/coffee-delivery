import { useContext } from 'react'
import { cartContext } from '../../contexts/CartContext'

import { MapPin, ShoppingCart } from 'phosphor-react'
import {
  Badge,
  ButtonsContainer,
  CartButton,
  HeaderContainer,
  LocationButton,
  Wrapper,
} from './styles'

import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { cart } = useContext(cartContext)

  const cartCount = cart.reduce((acc, item) => {
    return (acc += item.quantity)
  }, 0)

  return (
    <HeaderContainer>
      <Wrapper>
        <NavLink to="/">
          <img src={logo} alt="" />
        </NavLink>
        <ButtonsContainer>
          <LocationButton>
            <MapPin size={22} weight="fill" />
            Benevides, PA
          </LocationButton>
          <CartButton to="/checkout">
            <ShoppingCart size={22} weight="fill" />
            {cartCount > 0 && <Badge>{cartCount}</Badge>}
          </CartButton>
        </ButtonsContainer>
      </Wrapper>
    </HeaderContainer>
  )
}
