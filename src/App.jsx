import Header from './components/Header'
import Hero from './components/Hero'
import BookCta from './components/BookCta'
import Metrics from './components/Metrics'
import Problem from './components/Problem'
import Product from './components/Product'
import Platform from './components/Platform'
import Roadmap from './components/Roadmap'
import Founders from './components/Founders'
import Market from './components/Market'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <BookCta />
        <Metrics />
        <Problem />
        <Product />
        <Platform />
        <Roadmap />
        <Founders />
        <Market />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
