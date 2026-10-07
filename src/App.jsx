
import { Suspense, useState } from 'react'
import './App.css'
import Banner from './Component/Banner/Banner'
import Navbar from './Component/Navbar/Navbar'
import Success from './Component/Success/Success'
import Premium from './Component/Premium/Premium';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const promiseData = async ()=>{
  const res = await fetch('/Products.json')
  return res.json()
}

function App() {
  const productPromise=promiseData()

  const [buyNow, setBuyNow]=useState([]);
    const [isSelected, setIsSelected]=useState(false)

  // console.log('click', buyNow);
  

  return (
    <>

     {!isSelected &&  <div className='mx-auto max-w-[1200px]'>
      <Navbar buyNow={buyNow}></Navbar>
     <Banner></Banner>
     </div>}

      {!isSelected && <div>
      <Success></Success>
     </div>}

    
     
     <Suspense fallback={<h2>Loading Data......</h2>}>
      <Premium productPromise={productPromise} buyNow={buyNow} setBuyNow={setBuyNow} setIsSelected={setIsSelected} isSelected={isSelected}></Premium>
     </Suspense>
     <ToastContainer />
    </>
  )
}

export default App
