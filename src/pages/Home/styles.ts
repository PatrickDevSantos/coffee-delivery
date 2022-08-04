import styled from 'styled-components'

import bg from '../../assets/bg.svg'

export const HomeContainer = styled.div`
  margin-top: 6.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
`

export const BannerContainer = styled.div`
  display: flex;
  padding: 5.875rem 0 6.75rem;
  margin-bottom: 2rem;
  justify-content: center;
  width: 100vw;

  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;

  h1 {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 3rem;
    line-height: 1.3;
    color: ${(props) => props.theme['base-title']};
  }

  h2 {
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.3;
    margin-top: 1rem;
    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const BannerItems = styled.div`
  display: flex;
  max-width: 70rem;

  gap: 3.5rem;
`

export const TagContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.25rem 0;
  margin-top: 4.125rem;
`

export const TagItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;

  color: ${(props) => props.theme.background};

  > span {
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.3;
    color: ${(props) => props.theme['base-text']};
  }
`

export const TAG_COLORS = {
  yellowDark: 'yellow-dark',
  baseText: 'base-text',
  yellow: 'yellow',
  purple: 'purple',
} as const

export interface TagContainerProps {
  tagColor: keyof typeof TAG_COLORS
}

export const TagIconContainer = styled.div<TagContainerProps>`
  width: 2rem;
  height: 2rem;

  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 100%;

  color: ${(props) => props.theme.white};
  background: ${(props) => props.theme[TAG_COLORS[props.tagColor]]};
`

export const Wrapper = styled.div`
  display: flex;
  justify-content: center;
`

export const ListContainer = styled.main`
  max-width: 70rem;

  & > span {
    font-family: 'Baloo 2', sans-serif;
    font-weight: 800;
    font-size: 2rem;
    line-height: 1.3;

    color: ${(props) => props.theme['base-subtitle']};
  }
`

export const ItemsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;

  margin: 3.37rem 0;
`
