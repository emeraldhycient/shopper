import { TproductCards } from '@/types'
import { create } from 'zustand'
import { persist } from "zustand/middleware"

let cartstore = (set:any) => ({
    cart: [],
    addToCart: (cartitem: TproductCards) => set((state: any) => ({ cart: [...state.cart, cartitem] })),
    clearCart: () => set({ cart: [] }),
})

const store = persist(cartstore, { name: "cartstore" })

const useCart = create(store)

export { useCart };