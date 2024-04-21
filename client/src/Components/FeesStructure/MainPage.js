import React from 'react'
import FeesStructure from './FeesStructure'
import FeesDetails from './FeesDetails'
import Header from '../Header'
import Footer from '../Footer'

const MainPage = () => {
  return (
    <div>
        <Header/>
      <FeesStructure  courses={FeesDetails}/> 
      <Footer />
    </div>
  )
}

export default MainPage
