import { React, useState } from 'react'
import Button from './Button'
import Data from './Data'
import Functions from './Functions'

function Main(props) {
  const handleClick = (numbers) => {
    setAllResult((prevNumbers) => {
      return [...prevNumbers, numbers]
    })
  }

  const buttons = Data.map((button) => {
    return (
      <Button
        key={button.id}
        id={button.id}
        {...button}
        handleClick={handleClick}
      />
    )
  })

  const [result, setResult] = useState(0)
  const [allResult, setAllResult] = useState([0])

  return (
    <div className="main">
      <div className="main--content">
        <div className="content--result">
          <h1>{result}</h1>
          <h2>{allResult}</h2>
        </div>
        <div className="content--numbers">{buttons}</div>
      </div>
    </div>
  )
}

export default Main
