import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { Fragment, useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'

import { CartItem } from '../../components/CartItem'
import { PaymentButton } from '../../components/PaymentButton'
import { cartContext } from '../../contexts/CartContext'
import {
  CheckoutContainer,
  CartContainer,
  CartSeparator,
  CartCheckoutDetail,
  CartItemFinishButton,
  FormRow,
  FormHeader,
  FormItem,
  ItemList,
  SessionTitle,
  InputContainer,
  InputElement,
  FormContainer,
} from './styles'

export enum PaymentTypes {
  CREDIT_CARD = 'Cartãp de Crédito',
  DEBIT_CARD = 'Cartão de Débito',
  MONEY = 'Dinheiro',
}

const checkouFormValidationSchema = zod.object({
  zip_code: zod.string().length(8, 'Cep precisa ter 8 digitos'),
  address: zod.string(),
  number: zod.string(),
  complement: zod.string(),
  district: zod.string(),
  city: zod.string(),
  uf: zod.string().length(2, 'UF precisa ter 2 digitos'),
})

export type CheckoutFormData = zod.infer<typeof checkouFormValidationSchema>

export function Checkout() {
  const { cart, clearCart } = useContext(cartContext)
  const navigate = useNavigate()
  const [paymentType, setPaymentType] = useState<PaymentTypes | null>()

  const checkoutForm = useForm<CheckoutFormData>({
    resolver: zodResolver(checkouFormValidationSchema),
    defaultValues: {
      zip_code: '',
      address: '',
      number: '',
      complement: '',
      district: '',
      city: '',
      uf: '',
    },
  })

  const { register, handleSubmit } = checkoutForm

  function handleCheckoutSubmit(data: CheckoutFormData) {
    navigate('/finished', {
      state: {
        ...data,
        paymentType,
      },
    })
    clearCart()
  }

  const total = cart.reduce((acc, item) => {
    acc += item.price * item.quantity
    return acc
  }, 0)

  const deliveryPrice = 3.5

  const {
    formState: { errors, isSubmitting },
  } = checkoutForm

  console.log(errors)

  return (
    <CheckoutContainer>
      <form onSubmit={handleSubmit(handleCheckoutSubmit)}>
        <FormContainer>
          <SessionTitle>Complete seu pedido</SessionTitle>
          <FormItem>
            <FormHeader type="location">
              <MapPinLine size={22} />
              <div>
                <span>Endereço de entrega</span>
                <span>Informe o endereço onde deseja receber seu pedido</span>
              </div>
            </FormHeader>
            <FormRow>
              <InputContainer required={true} width="200px">
                <InputElement
                  id="zip_code"
                  type="text"
                  placeholder="CEP"
                  required
                  {...register('zip_code')}
                />
              </InputContainer>
            </FormRow>
            <FormRow>
              <InputContainer required={true}>
                <InputElement
                  id="address"
                  type="text"
                  placeholder="Rua"
                  required
                  {...register('address')}
                />
              </InputContainer>
            </FormRow>
            <FormRow>
              <InputContainer required={true} width="200px">
                <InputElement
                  id="number"
                  type="text"
                  placeholder="Número"
                  required
                  {...register('number')}
                />
              </InputContainer>
              <InputContainer required={false}>
                <InputElement
                  id="complement"
                  type="text"
                  placeholder="Complemento"
                  {...register('complement')}
                />
              </InputContainer>
            </FormRow>
            <FormRow>
              <InputContainer required={true} width="200px">
                <InputElement
                  id="district"
                  type="text"
                  placeholder="Bairro"
                  required
                  {...register('district')}
                />
              </InputContainer>
              <InputContainer required={true}>
                <InputElement
                  id="city"
                  type="text"
                  placeholder="Cidade"
                  required
                  {...register('city')}
                />
              </InputContainer>
              <InputContainer required={true} width="80px">
                <InputElement
                  id="uf"
                  type="text"
                  placeholder="UF"
                  required
                  {...register('uf')}
                />
              </InputContainer>
            </FormRow>
          </FormItem>
          <FormItem>
            <FormHeader type="payment">
              <CurrencyDollar size={22} />
              <div>
                <span>Pagamento</span>
                <span>
                  O pagamento é feito na entrega. Escolha a forma que deseja
                  pagar
                </span>
              </div>
            </FormHeader>
            <FormRow>
              <PaymentButton
                type="button"
                icon={<CreditCard size={22} />}
                title="Cartão de crédito"
                active={paymentType === PaymentTypes.CREDIT_CARD}
                onClick={() => setPaymentType(PaymentTypes.CREDIT_CARD)}
              />
              <PaymentButton
                type="button"
                icon={<Bank size={22} />}
                title="Cartão de débito"
                active={paymentType === PaymentTypes.DEBIT_CARD}
                onClick={() => setPaymentType(PaymentTypes.DEBIT_CARD)}
              />
              <PaymentButton
                type="button"
                icon={<Money size={22} />}
                title="Dinheiro"
                active={paymentType === PaymentTypes.MONEY}
                onClick={() => setPaymentType(PaymentTypes.MONEY)}
              />
            </FormRow>
          </FormItem>
        </FormContainer>
        <div>
          <SessionTitle>Cafés selecionados</SessionTitle>
          <CartContainer>
            <ItemList>
              {cart.map((item) => (
                <Fragment key={item.id}>
                  <CartItem data={item} />
                  <CartSeparator />
                </Fragment>
              ))}
            </ItemList>
            <CartCheckoutDetail>
              <p>
                <span>Total de itens</span>
                <span>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  }).format(total)}
                </span>
              </p>
              <p>
                <span>Entrega</span>
                <span>R$ 3,50</span>
              </p>
              <p>
                <strong>Total</strong>
                <strong>
                  {new Intl.NumberFormat('pt-BR', {
                    style: 'currency',
                    currency: 'BRL',
                    minimumFractionDigits: 2,
                  }).format(total + deliveryPrice)}
                </strong>
              </p>
            </CartCheckoutDetail>
            <CartItemFinishButton type="submit">
              Confirmar pedido
            </CartItemFinishButton>
          </CartContainer>
        </div>
      </form>
    </CheckoutContainer>
  )
}
