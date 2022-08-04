import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import {
  Container,
  DeliveryInfoContainer,
  FinishedContainer,
  TagContainer,
  TagTextContainer,
} from './styles'

import image from '../../assets/finished-image.svg'
import { useLocation } from 'react-router-dom'
import { CheckoutFormData, PaymentTypes } from '../Checkout'

interface FinishedData extends CheckoutFormData {
  paymentType: PaymentTypes
}

export function Finished() {
  const location = useLocation()
  const state = location.state as FinishedData

  return (
    <FinishedContainer>
      <h1>Uhu! Pedido confirmado</h1>
      <span>Agora é só aguardar que logo o café chegará até você</span>

      <Container>
        <DeliveryInfoContainer>
          <TagContainer tagColor="purple">
            <MapPin size={16} weight="fill" />
            <TagTextContainer>
              <span>
                Entrega em{' '}
                <strong>
                  {state.address}, {state.number}
                </strong>
              </span>
              <span>
                {state.district} - {state.city}, {state.uf}
              </span>
            </TagTextContainer>
          </TagContainer>
          <TagContainer tagColor="yellow">
            <Timer size={16} weight="fill" />
            <TagTextContainer>
              <span>Previsão de entrega</span>
              <span>
                <strong>20 min - 30 min</strong>
              </span>
            </TagTextContainer>
          </TagContainer>
          <TagContainer tagColor="yellowDark">
            <CurrencyDollar size={16} weight="fill" />
            <TagTextContainer>
              <span>Pagemento na entrega</span>
              <span>
                <strong>{state.paymentType}</strong>
              </span>
            </TagTextContainer>
          </TagContainer>
        </DeliveryInfoContainer>
        <img src={image} alt="" />
      </Container>
    </FinishedContainer>
  )
}
