import styled, { css } from 'styled-components'

interface Props {
  active: boolean
}

export const PaymentButtonContainer = styled.button<Props>`
  border-radius: 6px;
  padding: 1rem;

  font-size: 0.75rem;
  text-transform: uppercase;

  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  border: 1px solid transparent;

  cursor: pointer;

  background: ${(props) => props.theme['base-button']};
  color: ${(props) => props.theme['base-text']};

  > svg {
    color: ${(props) => props.theme.purple};
  }

  &:hover {
    background: ${(props) => props.theme['base-hover']};
    color: ${(props) => props.theme['base-subtitle']};

    > svg {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  ${(props) =>
    props.active &&
    css`
      background: ${(props) => props.theme['purple-light']};
      border: 1px solid ${(props) => props.theme.purple};

      &:hover {
        background: ${(props) => props.theme['purple-light']};
        color: ${(props) => props.theme['base-subtitle']};
        > svg {
          color: ${(props) => props.theme.purple};
        }
      }
    `}
`
