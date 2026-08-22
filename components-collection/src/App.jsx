import React,{useState} from 'react'
import FaqAccordion from './components/FaqAccordion'
import FlashCardDeck from './components/FlashCardDeck'
import ProfileCard from './components/ProfileCard'




const App = () => {
  return (
    <div className="h-screen  flex justify-center items-center bg-slate-100">
        <ProfileCard name="Navi Talib" role="Full Stack Developer" initialLike={780} />
    </div>
  )
}

export default App