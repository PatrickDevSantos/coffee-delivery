import { ButtonHTMLAttributes, ReactNode } from 'react'
import { PaymentButtonContainer } from './styles'

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  icon: ReactNode
  title: string
  active?: boolean
}

export function PaymentButton({ icon, active = false, title, ...rest }: Props) {
  return (
    <PaymentButtonContainer active={active} {...rest}>
      {icon}
      {title}
    </PaymentButtonContainer>
  )
}
