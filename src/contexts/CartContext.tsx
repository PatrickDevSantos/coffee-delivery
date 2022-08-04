import { createContext, ReactNode, useState } from 'react'
import { Coffee } from '../pages/Home'

export interface CartItem {
  id: string
  image: string
  title: string
  description: string
  price: number
  tags: string[]
  quantity: number
}

interface CartContextType {
  cart: CartItem[]
  addQuantityToCart: (coffee: Coffee, quantity: number) => void
  removeQuantityToCart: (coffee: Coffee, quantity: number) => void
  removeToCart: (coffeeId: string) => void
  clearCart: () => void
}

export const cartContext = createContext({} as CartContextType)

interface CartContextProps {
  children: ReactNode
}

export function CartContextProvider({ children }: CartContextProps) {
  const [cart, setCart] = useState<CartItem[]>([])

  function addQuantityToCart(data: Coffee, quantity: number) {
    const currentItem = cart.find((item) => item.id === data.id)
    let newState
    if (currentItem) {
      newState = cart.map((item) => {
        if (item.id === data.id) {
          item.quantity += quantity
        }
        return item
      })
    } else {
      newState = [...cart, { ...data, quantity }]
    }
    setCart(newState)
  }

  function removeQuantityToCart(data: Coffee, quantity: number) {
    const currentItem = cart.find((item) => item.id === data.id)
    if (currentItem) {
      const newState = cart.map((item) => {
        if (item.id === data.id && item.quantity > 1) {
          item.quantity -= quantity
        }
        return item
      })
      setCart(newState)
    }
  }

  function removeToCart(itemId: string) {
    setCart((state) => state.filter((item) => item.id !== itemId))
  }

  function clearCart() {
    setCart([])
  }

  return (
    <cartContext.Provider
      value={{
        cart,
        addQuantityToCart,
        removeQuantityToCart,
        removeToCart,
        clearCart,
      }}
    >
      {children}
    </cartContext.Provider>
  )
}
