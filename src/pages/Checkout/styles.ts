import styled, { css } from 'styled-components'

export const CheckoutContainer = styled.div`
  margin-top: 9rem;
  display: flex;
  max-width: 70rem;
  width: 100%;

  form {
    flex: 1;
    display: flex;
    gap: 2rem;
    width: 100%;
  }
`
export const FormContainer = styled.div`
  flex: 1;
`

export const SessionTitle = styled.span`
  font-family: 'Baloo 2';
  font-weight: 700;
  font-size: 1.125rem;
  line-height: 1.3;
  margin-bottom: 0.935rem;
  display: block;
  color: ${(props) => props.theme['base-subtitle']};
`

export const FormItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-radius: 6px;
  padding: 2.5rem;
  margin-bottom: 0.75rem;
  background: ${(props) => props.theme['base-card']};
`

interface FormHeaderProps {
  type: 'location' | 'payment'
}

export const FormHeader = styled.div<FormHeaderProps>`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;

  > div {
    display: flex;
    flex-direction: column;
    gap: 4px;

    > span:first-child {
      font-size: 1rem;
      color: ${(props) => props.theme['base-subtitle']};
    }

    > span:not(:first-child) {
      font-size: 0.875rem;
      color: ${(props) => props.theme['base-subtitle']};
    }
  }

  ${(props) =>
    props.type === 'location'
      ? css`
          > svg {
            color: ${props.theme['yellow-dark']};
          }
        `
      : css`
          > svg {
            color: ${props.theme.purple};
          }
        `}
`

export const FormRow = styled.div`
  display: flex;
  gap: 0.75rem;
`

export const CartContainer = styled.div`
  padding: 2.5rem;
  height: fit-content;
  min-width: 28rem;

  border-top-left-radius: 6px;
  border-top-right-radius: 44px;
  border-bottom-left-radius: 44px;
  border-bottom-right-radius: 6px;

  background: ${(props) => props.theme['base-card']};
`

export const ItemList = styled.div`
  overflow-y: auto;
  max-height: 22.5rem;
`

export const CartSeparator = styled.hr`
  height: 1px;
  width: 100%;
  margin: 1.5rem 0;
  border: 0;
  background: ${(props) => props.theme['base-button']};
`

export const CartCheckoutDetail = styled.div`
  p {
    display: flex;
    justify-content: space-between;
    color: ${(props) => props.theme['base-text']};
  }

  p > span {
    font-size: 0.875rem;
    font-weight: 400;
    line-height: 1.3;
  }

  p > strong {
    font-weight: 700;
    font-size: 1.25rem;
  }

  p + p {
    margin-top: 0.75rem;
  }
`

export const CartItemFinishButton = styled.button`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 1.6;
  text-transform: uppercase;
  border: 0;
  border-radius: 6px;
  width: 100%;
  cursor: pointer;

  padding: 0.75rem 0;
  margin-top: 1.5rem;

  background: ${(props) => props.theme.yellow};
  color: ${(props) => props.theme.white};

  &:hover {
    background: ${(props) => props.theme['yellow-dark']};
  }
`

interface InputContainerProps {
  width?: string
  required: boolean
}

export const InputContainer = styled.div<InputContainerProps>`
  display: flex;
  flex-direction: column;
  position: relative;
  ${(props) => (props.width ? `width: ${props.width}` : 'flex: 1')};

  ${(props) =>
    !props.required &&
    css`
      &::after {
        content: 'Opcional';
        font-size: 0.75rem;
        font-weight: 400;
        line-height: 1.3;
        color: ${(props) => props.theme['base-label']};
        font-style: italic;
        z-index: 999;

        position: absolute;
        right: 0.75rem;
        display: flex;
        align-items: center;
        height: 100%;
      }
    `}
`

export const InputElement = styled.input`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.3;
  padding: 0.75rem;
  position: relative;
  width: 100%;

  border-radius: 4px;
  border: 1px solid ${(props) => props.theme['base-button']};

  background: ${(props) => props.theme['base-input']};
  color: ${(props) => props.theme['base-text']};

  &::placeholder {
    color: ${(props) => props.theme['base-label']};
  }

  &:focus {
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }
`
