import { useState } from 'react'
import './App.css'
import Stepper from './components/Stepper'

function App() {
  const steps = [
    {
      content: "Personal Info Content",
      lable: "Personal Info"
    },
    {
      content:"Account Info Content",
      lable: "Account Info"
    },
    {
      content: "Payment Content",
      lable: "Payment"
    },
    {
      content: "Confirmation Content",
      lable: "Confirmation"
    },
    {
      content: "Review Content",
      lable: "Review"
    },
  ]

  return (
    
    <Stepper steps={steps}/>
    
  )
}

export default App
