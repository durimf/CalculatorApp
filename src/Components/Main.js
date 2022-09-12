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
  const [prevNumbers, setPrevNumbers] = useState([0])
  const [currentMath, setMath] = useState({
    isAddition: false,
    isSubtraction: false,
    isMultiply: false,
    isDivision: false,
    hasPoint: false,
    isPercentage: false,
  })

  const handleAddition = (value) => {
    setResult([currentNumbers])
    setMath((prevState) => ({
      ...prevState,
      isAddition: true,
    }))
    setPrevNumbers([currentNumbers, ' ', value])

    // let final = parseFloat(num1) + parseFloat(num2)
    // console.log(final)
    // setCurrentNumber(final)

    // setMath((prevState) => ({
    //   ...prevState,
    //   isAddition: true,
    // }))
    // setPrevNumbers((prevState) => {
    //   if (prevState[0] !== 0) {
    //     return [prevState, currentNumbers, ' ', value, ' ']
    //   } else {
    //     return [currentNumbers, ' ', value, ' ']
    //   }
    // })
  }

  const handleSubtraction = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isSubtraction: false,
    }))
    let final = parseFloat(num1) - parseFloat(num2)
    setCurrentNumber(final)
  }

  const handleMultiply = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isMultiply: false,
    }))
    let final = parseFloat(num1) * parseFloat(num2)
    setCurrentNumber(final)
  }

  const handleDivision = (num1, num2) => {
    setMath((prevState) => ({
      ...prevState,
      isDivision: false,
    }))
    let final = parseFloat(num1) / parseFloat(num2)
    setCurrentNumber(final)
  }

  const handlePoint = (value) => {
    setMath((prevState) => ({
      ...prevState,
      hasPoint: false,
    }))
    setCurrentNumber((prevState) => {
      return [prevState, value]
    })
  }

  const handlePercentage = () => {
    // setMath({
    //   isAddition: false,
    //   isSubtraction: false,
    //   isMultiply: false,
    //   isDivision: false,
    //   hasPoint: false,
    //   isPercentage: false,
    // })
    let value1 = 0
    let value2 = 0
    if (result.length === 1) {
      value1 = result
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
    if (result === null) {
      setCurrentNumber([0])
    } else {
      let final = (parseInt(value1) / 100) * parseInt(value2)
      setCurrentNumber([final])
    }
  }

  const handleNumber = (value, e) => {
    currentNumbers[0] === 0
      ? setCurrentNumber(value)
      : setCurrentNumber((prevState) => {
          return [...prevState, value]
        })

    currentNumbers.length === 2 &&
      setCurrentNumber((prevState) => {
        return [...prevState, ', ']
      })
    currentNumbers.length === 6 &&
      setCurrentNumber((prevState) => {
        return [...prevState, ', ']
      })
    currentNumbers.length === 10 &&
      setCurrentNumber((prevState) => {
        return [...prevState, ', ']
      })
    currentNumbers.length === 14 &&
      setCurrentNumber((prevState) => {
        return [...prevState, ', ']
      })
    currentNumbers.length === 18 &&
      setCurrentNumber((prevState) => {
        return [...prevState, ',']
      })

    let newArr = []
    currentNumbers.length === 21 &&
      currentNumbers.forEach((element) => {
        newArr.unshift(element)
      })

    currentNumbers.length === 21 && setCurrentNumber(newArr)

    // setCurrentNumber(newArr)

    // if (currentNumbers[0] === 0) {
    //   setCurrentNumber(value)
    // } else if (
    //   currentNumbers.length === 3 ||
    //   currentNumbers.length === 7 ||
    //   currentNumbers.length === 11 ||
    //   currentNumbers.length === 15 ||
    //   currentNumbers.length === 19
    // ) {
    //   setCurrentNumber((prevState) => {
    //     return [...prevState, ', ', value]
    //   })
    // } else {
    //   setCurrentNumber((prevState) => {
    //     return [...prevState, value]
    //   })
    // }
  }

  const handleClear = () => {
    setCurrentNumber([0])
    setResult([0])
    setPrevNumbers(0)
  }

  const handleEquals = () => {
    // setPrevNumbers((prevState) =>
    //   prevState[0] !== 0
    //     ? [prevState, currentNumbers, ' ', value]
    //     : [currentNumbers, ' ', value],
    // )

    let newResult = result.concat()
    let newCurrentNumbers = currentNumbers.concat()

    console.log(`NewRes: ${newResult}`)

    result.length > 1
      ? (newResult = newResult.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
        ))
      : setResult((prevResult) => prevResult)

    // result.length === 1
    //   ? (value1 = result)
    //   : (value1 = result.reduce(
    //       (previousValue, currentValue) => previousValue + currentValue,
    //     ))
    currentNumbers.length > 1
      ? (newCurrentNumbers = newCurrentNumbers.reduce(
          (previousValue, currentValue) => previousValue + currentValue,
        ))
      : setCurrentNumber((prevCurrentNumbers) => prevCurrentNumbers)
    // ? (value2 = currentNumbers[0])
    // : (value2 = currentNumbers.reduce(
    //     (previousValue, currentValue) => previousValue + currentValue,
    //   ))

    console.log(`NewResult: ${newResult}`)
    console.log(newCurrentNumbers)

    currentMath.isAddition &&
      setCurrentNumber(parseInt(newResult) + parseInt(newCurrentNumbers))
    // currentMath.isAddition &&
    //   setCurrentNumber(parseInt(newResult) + parseInt(newCurrentNumbers))
    // handleAddition(value1, value2)
    // currentMath.isSubtraction && handleSubtraction(value1, value2)
    // currentMath.isMultiply && handleMultiply(value1, value2)
    // currentMath.isDivision && handleDivision(value1, value2)
  }

  const handleClick = (id, value, type, e) => {
    currentNumbers > 0 &&
      setCurrentNumber((prevState) => {
        return [...prevState]
      })
    type === 'number' && handleNumber(value, e)
    type === 'addition' && handleAddition('+')
    type === 'equals' && handleEquals()
    type === 'c' && handleClear()

    // if (type === 'number') {
    //   // if (currentNumbers.length === 21) {
    //   //   let newArr = []
    //   //   currentNumbers.forEach((element) => {
    //   //     newArr.unshift(element)
    //   //   })
    //   //   setCurrentNumber(newArr)
    //   // } else {
    //   //   handleNumber(value, e)
    //   // }
    // }
    // // else if (type === 'addition') {
    // //   // setResult(currentNumbers)
    // //   // setMath((prevState) => ({
    // //   //   ...prevState,
    // //   //   isAddition: true,
    // //   // }))
    // //   // setPrevNumbers((prevState) => {
    // //   //   if (prevState[0] !== 0) {
    // //   //     return [prevState, currentNumbers, ' ', value, ' ']
    // //   //   } else {
    // //   //     return [currentNumbers, ' ', value, ' ']
    // //   //   }
    // //   // })

    // //   setCurrentNumber([0])
    // // }
    // else if (type === 'minus') {
    //   setMath((prevState) => ({
    //     ...prevState,
    //     isSubtraction: true,
    //   }))
    //   setResult(currentNumbers)
    //   setPrevNumbers((prevState) => {
    //     if (prevState[0] !== 0) {
    //       return [prevState, currentNumbers, ' ', value, ' ']
    //     } else {
    //       return [currentNumbers, ' ', value, ' ']
    //     }
    //   })
    //   setCurrentNumber([0])
    // } else if (type === 'multiply') {
    //   setMath((prevState) => ({
    //     ...prevState,
    //     isMultiply: true,
    //   }))
    //   setResult(currentNumbers)
    //   setPrevNumbers((prevState) => {
    //     if (prevState[0] !== 0) {
    //       return [prevState, currentNumbers, value]
    //     } else {
    //       return [currentNumbers, value]
    //     }
    //   })
    //   setCurrentNumber([0])
    // } else if (type === 'division') {
    //   setMath((prevState) => ({
    //     ...prevState,
    //     isDivision: true,
    //   }))
    //   setResult(currentNumbers)
    //   setPrevNumbers((prevState) => {
    //     if (prevState[0] !== 0) {
    //       return [prevState, currentNumbers, value]
    //     } else {
    //       return [currentNumbers, value]
    //     }
    //   })
    //   setCurrentNumber([0])
    // }
    // // else if (type === 'equals') {
    // //   handleEquals(id, value, type)
    // // }
    // else if (type === 'delete') {
    //   let newArr = currentNumbers.filter((element, index) => {
    //     return index != currentNumbers.length - 1
    //   })
    //   setCurrentNumber(newArr)
    // } else if (type === 'c') {
    //   setCurrentNumber([0])
    //   setResult(null)
    //   setPrevNumbers([0])
    // } else if (type === 'point') {
    //   setMath((prevState) => ({
    //     ...prevState,
    //     hasPoint: true,
    //   }))
    //   handlePoint(value)
    // } else if (type === 'percentage') {
    //   setMath((prevState) => ({
    //     ...prevState,
    //     isPercentage: true,
    //   }))
    //   handlePercentage()
    // } else {
    //   console.log('asd')
    // }
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
          <h2 className="prevNumbers">{prevNumbers}</h2>
          <h1>{currentNumbers}</h1>
        </div>
        <div className="content--numbers">{buttons}</div>
      </div>
    </div>
  )
}
export default Main
