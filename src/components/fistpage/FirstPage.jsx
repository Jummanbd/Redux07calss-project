import React from 'react'
import Header from '../header/Header'
import Lists from '../list/Lists'

const FirstPage = () => {
  return (
    <main className="max-w-3xl rounded-lg  mx-auto relative z-20 p-10  mt-5  bg-[#1E293B]">
        <Header />
        <Lists/>
    </main>
  )
}

export default FirstPage
