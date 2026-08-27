import React,{useState} from 'react'
import FaqAccordion from './components/FaqAccordion'
import FlashCardDeck from './components/FlashCardDeck'
import ProfileCard from './components/ProfileCard'
import Timer from './components/Timer'
import SearchBox from './components/SearchBox'
import ProductCard from './components/ProductCard'




const App = () => {
  return (
    <div className="h-screen  flex justify-center items-center bg-slate-100">
        {/* <ProfileCard name="Navi Talib" role="Full Stack Developer" initialLike={780} /> */}
        {/* <Timer /> */}
        {/* <SearchBox /> */}
        <ProductCard
          name = "Wireless Headphones"
          image="https://placehold.co/250"
          price={1799}
          rating={5}
        />
        {/* <ProductCard
          name = "Water Bottle"
          image="https://placehold.co/250"
          price={99}
          rating={4.5}
        />
        <ProductCard
          name = "Shoes"
          image="https://placehold.co/250"
          price={2399}
          rating={5}
        /> */}


    </div>
  )
}

export default App