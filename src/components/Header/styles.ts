import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.header`
  height: 6.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  z-index: 999;

  background: ${(props) => props.theme.background};
`

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  max-width: 70rem;
  width: 100%;
`

export const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const LocationButton = styled.button`
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  font-size: 0.875rem;

  display: flex;
  align-items: center;
  gap: 4px;

  background: ${(props) => props.theme['purple-light']};
  color: ${(props) => props.theme['purple-dark']};
`

export const CartButton = styled(NavLink)`
  padding: 0.5rem;
  border: 0;
  border-radius: 8px;

  display: flex;
  align-items: center;
  position: relative;

  background: ${(props) => props.theme['yellow-light']};
  color: ${(props) => props.theme['yellow-dark']};
`

export const Badge = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 999px;
  font-size: 0.75rem;

  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  top: -8px;
  right: -8.35px;

  background: ${(props) => props.theme['yellow-dark']};
  color: ${(props) => props.theme.white};
`
