import { LocalConvenienceStoreOutlined } from '@mui/icons-material'
import { elementAcceptingRef } from '@mui/utils'
import { React, useState, useEffect } from 'react'
import Button from './Button'
import Data from './Data'
import Functions from './Functions'

function Main(props) {
  const handleClick = (id, value, type) => {
    if (type === 'number') {
      let count = 1
      if (count > 1) {
        setCurrentNumber((prevState) => {
          return [prevState, value]
        })
      } else {
        setCurrentNumber(value)
      }
      count++
    } else if (type === 'addition') {
      let count2 = 0
      if (count2 > 1) {
        let num1 = parseInt(result)
        console.log(num1)
      } else {
        setResult(currentNumbers + ' +')
        setCurrentNumber((prevState) => {
          return prevState
        })
      }
      count2++
    } else if (type === 'equals') {
      let num1 = parseInt(currentNumbers[1])
      let num2 = parseInt(result[0])
      setCurrentNumber(num1 + num2)
    } else if (type === 'c') {
      setCurrentNumber([0])
      setResult()
    } else {
      console.log('hi')
    }

    const handleEquals = (value) => {
      console.log(value)

      // result.forEach((element) => {
      //   if (element === '+') {
      //     var indexToRemove = result.indexOf('+')
      //     var arr1 = result.slice(0, indexToRemove)
      //     var arr2 = result.slice(indexToRemove + 1)
      //     var arr2 =
      //     console.log(arr1.valueOf() + arr2.valueOf())
      //   }
      // })
    }
  }

  const buttons = Data.map((button) => {
    return <Button {...button} handleClick={handleClick} key={button.id} />

    // if (button.type === 'equals') {
    //   return <Button {...button} handleClick={handleEquals} />
    // } else if (button.type === 'additon') {
    //   return <Button {...button} handleClick={handleAddition} />
    // } else {
    //   return <Button {...button} handleClick={handleClick} />
    // }
  })

  const [result, setResult] = useState([0])
  const [currentNumbers, setCurrentNumber] = useState([0])

  return (
    <div className="main">
      <div className="main--content">
        <div className="content--result">
          <h2>{result}</h2>
          <h1>{currentNumbers}</h1>
        </div>
        <div className="content--numbers">{buttons}</div>
      </div>
    </div>
  )
}
export default Main
