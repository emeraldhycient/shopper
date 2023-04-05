import { TproductCards } from '@/types'
import { create } from 'zustand'


const useCart = create((set) => ({
    cart: [],
    addToCart: (cartitem: TproductCards) => set((state: any) => ({ cart: [...state.cart, cartitem] })),
    clearCart: () => set({ cart: [] }),
}))

export { useCart };