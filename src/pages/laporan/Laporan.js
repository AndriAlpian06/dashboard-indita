import React from 'react'
import SideBar from '../../components/SideBar'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

const Laporan = () => {
  return (
    <>
        <SideBar />

        <div className='p-4 xl:ml-80'>
            <Navbar />

            {/* <Footer /> */}
        </div>
    </>
  )
}

export default Laporan