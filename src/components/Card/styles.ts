import styled from 'styled-components'

export const CardContainer = styled.div`
  background: ${(props) => props.theme['base-card']};

  width: 16rem;
  /*height: 19.375rem;*/
  padding: 0 1.25rem 1.25rem;

  border-top-left-radius: 0.375rem;
  border-top-right-radius: 2.25rem;
  border-bottom-left-radius: 2.25rem;
  border-bottom-right-radius: 0.375rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 7.5rem;
    height: 7.5rem;

    margin-top: -1.25rem;
  }
`

export const CardTagsContiner = styled.div`
  margin-top: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: space-around;
  gap: 8px;
`

export const CardTag = styled.span`
  font-weight: 700;
  font-size: 0.625rem;
  line-height: 1.3;
  text-transform: uppercase;
  padding: 0.25rem 0.5rem;

  border-radius: 8px;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const CardTitle = styled.span`
  font-family: 'Baloo 2', sans-serif;
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.3;
  margin-top: 1rem;
  color: ${(props) => props.theme['base-title']};
`

export const CardSubtitle = styled.span`
  font-weight: 400;
  font-size: 0.875rem;
  line-height: 1.3;
  margin-top: 0.5rem;
  text-align: center;
  color: ${(props) => props.theme['base-label']};
`

export const CardInfoContainer = styled.div`
  margin-top: 2.06rem;
  width: 100%;

  display: flex;
  align-content: center;
  justify-content: space-between;
`

export const CardPrice = styled.span`
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 3px;

  strong {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 1.5rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const CardButtonsContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 8px;
`

export const CardQuantity = styled.div`
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

export const CardBuyButton = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;

  cursor: pointer;

  background: ${(props) => props.theme['purple-dark']};
  color: ${(props) => props.theme['base-card']};

  &:hover {
    background: ${(props) => props.theme.purple};
  }
`
