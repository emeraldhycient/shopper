import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Header from '@/components/common/Header'
import Hero from '@/components/home/Hero'
import ProductList from '@/components/home/ProductList'
import Footer from '@/components/common/Footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Header title={'pi shopping mall'} description={'your comfort shopping malls'} />
      <Hero />
      <ProductList />
      <Footer/>
    </>
  )
}
