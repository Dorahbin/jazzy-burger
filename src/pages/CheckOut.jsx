import { useEffect } from "react"
import Footer from "../layouts/Footer"

useEffect
const CheckOut = () => {
  useEffect(()=>{
    document.title = 'check out | page'
  })
  return (
    <>
    <h2>check out</h2>
    <Footer/>
    </>

  )
}

export default CheckOut