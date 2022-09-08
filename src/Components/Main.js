import {
  LocalConvenienceStoreOutlined,
  ReviewsOutlined,
} from '@mui/icons-material'
import { elementAcceptingRef } from '@mui/utils'
import { React, useState, useEffect } from 'react'
import Button from './Button'
import Data from './Data'
import Functions from './Functions'

function Main(props) {
  const [result, setResult] = useState(0)
  const [currentNumbers, setCurrentNumber] = useState([0])
  const [currentMath, setMath] = useState({
    isAddition: false,
    isSubtraction: false,
    isMultiply: false,
    isDivision: false,
  })

  const handleAddition = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isAddition: false,
    }))
    let final = parseInt(num1) + parseInt(num2)
    setCurrentNumber(final)
  }

  const handleSubtraction = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isSubtraction: false,
    }))
    let final = parseInt(num1) - parseInt(num2)
    setCurrentNumber(final)
  }

  const handleMultiply = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isMultiply: false,
    }))
    let final = parseInt(num1) * parseInt(num2)
    setCurrentNumber(final)
  }

  const handleDivision = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isMultiply: false,
    }))
    let final = parseInt(num1) / parseInt(num2)
    setCurrentNumber(final)
  }

  const handleNumber = (value, e) => {
    if (currentNumbers[0] === 0) {
      setCurrentNumber(value)
    } else {
      setCurrentNumber((prevState) => {
        return [...prevState, value]
      })
    }
  }

  const handleEquals = (id, value, type) => {
    let value1 = 0
    let value2 = 0
    if (result.length === 1) {
      value1 = result[0]
    } else {
      value1 = result.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
      )
    }
    if (currentNumbers.length === 1) {
      value2 = currentNumbers[0]
    } else {
      value2 = currentNumbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
      )
    }
    if (currentMath.isAddition) {
      handleAddition(value1, value2)
    } else if (currentMath.isSubtraction) {
      handleSubtraction(value1, value2)
    } else if (currentMath.isMultiply) {
      handleMultiply(value1, value2)
    } else if (currentMath.isDivision) {
      handleDivision(value1, value2)
    }
  }

  const handleClick = (id, value, type, e) => {
    console.log(currentMath)
    if (type === 'number') {
      handleNumber(value, e)
    } else if (type === 'addition') {
      setMath((prevState) => ({
        ...prevState,
        isAddition: true,
      }))
      setResult(currentNumbers)
      setCurrentNumber([0])
    } else if (type === 'minus') {
      setMath((prevState) => ({
        ...prevState,
        isSubtraction: true,
      }))
      setResult(currentNumbers)
      setCurrentNumber([0])
    } else if (type === 'multiply') {
      setMath((prevState) => ({
        ...prevState,
        isMultiply: true,
      }))
      setResult(currentNumbers)
      setCurrentNumber([0])
    } else if (type === 'division') {
      setMath((prevState) => ({
        ...prevState,
        isDivision: true,
      }))
      setResult(currentNumbers)
      setCurrentNumber([0])
    } else if (type === 'equals') {
      handleEquals(id, value, type)
    } else if (type === 'delete') {
      let newArr = currentNumbers.filter((element, index) => {
        return index != currentNumbers.length - 1
      })
      setCurrentNumber(newArr)
    } else if (type === 'c') {
      setCurrentNumber([0])
      setResult(null)
    } else {
      console.log('hi')
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
