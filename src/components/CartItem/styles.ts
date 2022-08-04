import styled from 'styled-components'

export const CartItemContainer = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 1.25rem;
  padding: 0.5rem 0.25rem;

  background: ${(props) => props.theme['base-card']};

  img {
    width: 4rem;
    height: 4rem;
  }
`

export const CartItemInfo = styled.div`
  flex: 1;
`

export const CartItemTitle = styled.span`
  font-weight: 400;
  font-size: 1rem;
  line-height: 1.3;
  color: ${(props) => props.theme['base-subtitle']};
`

export const CartItemButtonContainer = styled.div`
  display: flex;
  margin-top: 0.5rem;
  gap: 0.5rem;
`

export const CartQuantity = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 8px;
  background: ${(props) => props.theme['base-button']};

  & > button {
    background: transparent;
    border: 0;
    outline: none;
    cursor: pointer;

    display: flex;
    align-items: center;

    color: ${(props) => props.theme.purple};

    &:hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  & > input[type='text'] {
    flex: 1;
    background: transparent;
    border: 0;
    outline: none;
    width: 1.25rem;
    height: 1.31rem;
    font-weight: bold;
    font-size: 1rem;
    text-align: center;
    line-height: 1.3;

    color: ${(props) => props.theme['base-title']};
  }
`

export const CartItemPrice = styled.span`
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.3;

  display: flex;
  gap: 3px;

  color: ${(props) => props.theme['base-text']};
`

export const CartItemRemoveButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 4px;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme.purple};
  border-radius: 6px;
  border: 0;

  padding: 0 0.5rem;

  font-weight: 400;
  font-size: 0.75rem;
  line-height: 1.6;
  text-transform: uppercase;

  cursor: pointer;

  > span {
    color: ${(props) => props.theme['base-text']};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['purple-dark']};

    span {
      color: ${(props) => props.theme['base-subtitle']};
    }
  }
`
