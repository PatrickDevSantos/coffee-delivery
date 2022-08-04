import styled, { css } from 'styled-components'
import { TagContainerProps, TAG_COLORS } from '../Home/styles'

export const FinishedContainer = styled.div`
  margin-top: 9rem;
  display: flex;
  flex-direction: column;
  max-width: 70rem;
  width: 100%;

  > h1 {
    font-family: 'Baloo 2';
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['yellow-dark']};
  }

  > span {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const Container = styled.div`
  display: flex;
  gap: 6.375rem;
  margin-top: 2.25rem;
`

export const DeliveryInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 2.5rem;
  border: 1px solid #0000;
  border-radius: 6px 36px;
  width: 100%;

  ${(props) => css`
    background: linear-gradient(
          ${props.theme.background},
          ${props.theme.background}
        )
        padding-box,
      linear-gradient(140deg, #dbac2c, #8047f8) border-box;
  `}
`

export const DeliveryContent = styled.div`
  flex: 1;
`

export const TagContainer = styled.div<TagContainerProps>`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  > svg {
    background: ${(props) => props.theme[TAG_COLORS[props.tagColor]]};
    color: ${(props) => props.theme.background};
    width: 2rem;
    height: 2rem;
    padding: 0.5rem;
    border-radius: 100%;
  }
`

export const TagTextContainer = styled.div`
  display: flex;
  flex-direction: column;

  > span {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};

    > strong {
      font-weight: 700;
    }
  }
`
