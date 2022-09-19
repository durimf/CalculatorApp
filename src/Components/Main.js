import { Card, Grid, Paper, TextField, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import { React, useState, useEffect } from 'react'
import Button from '../Components/Button'
import Data from './Data'

function Main(props) {
  const [result, setResult] = useState([0])
  const [currentNumbers, setCurrentNumber] = useState([0])
  const [prevNumbers, setPrevNumbers] = useState([0])
  const [currentMath, setMath] = useState({
    isAddition: false,
    isSubtraction: false,
    isMultiply: false,
    isDivision: false,
    hasPoint: false,
    isPercentage: false,
    isEqual: false,
  })

  const handleAddition = (value) => {
    setResult(currentNumbers)
    setMath((prevState) => ({
      ...prevState,
      isAddition: true,
    }))
    setPrevNumbers([currentNumbers, value])
    setCurrentNumber([0])
  }

  const handleSubtraction = (value) => {
    setResult(currentNumbers)
    setMath((prevState) => ({
      ...prevState,
      isSubtraction: true,
    }))
    setPrevNumbers([currentNumbers, value])
    setCurrentNumber([0])
  }

  const handleMultiply = (value) => {
    setResult(currentNumbers)
    setMath((prevState) => ({
      ...prevState,
      isMultiply: true,
    }))
    setPrevNumbers([currentNumbers, value])
    setCurrentNumber([0])
  }

  const handleDivision = (value) => {
    setResult(currentNumbers)
    setMath((prevState) => ({
      ...prevState,
      isDivision: true,
    }))
    setPrevNumbers([currentNumbers, value])
    setCurrentNumber([0])
  }

  const handlePoint = (value) => {
    setResult(currentNumbers)
    setMath((prevState) => ({
      ...prevState,
      hasPoint: true,
    }))
    setCurrentNumber((prevState) => {
      return [prevState, value]
    })
  }

  const handlePercentage = () => {
    let result1 = result
    let current1 = currentNumbers

    if (result1.length === 1) {
      result1 = result
    } else {
      result1 = result1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
      )
    }
    if (current1.length === 1) {
      current1 = current1[0]
    } else {
      current1 = current1.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
      )
    }

    let final = (result1 / 100) * current1
    setCurrentNumber([final])
  }

  const handleNumber = (value, e) => {
    currentNumbers[0] === 0 || currentMath.isEqual
      ? setCurrentNumber(value)
      : setCurrentNumber((prevState) => {
          return [...prevState, value]
        })
  }

  const handleClear = () => {
    setMath({
      isAddition: false,
      isSubtraction: false,
      isMultiply: false,
      isDivision: false,
    })
    setCurrentNumber([0])
    setResult([0])
    setPrevNumbers(0)
  }

  const handleDelete = () => {
    let newArr = currentNumbers
    newArr = newArr.slice(0, -1)
    setCurrentNumber(newArr)
  }

  const handleEquals = () => {
    setPrevNumbers((prevState) => {
      return [...prevState, currentNumbers, '=']
    })
    let newResult = result
    console.log(newResult)
    let newCurrentNumbers = currentNumbers

    // newResult.length === 1 && (newResult = result)
    newResult.length > 1 &&
      (newResult = newResult.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      ))

    // currentNumbers.length === 1 && (newCurrentNumbers = newCurrentNumbers)
    currentNumbers.length > 1 &&
      (newCurrentNumbers = newCurrentNumbers.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0,
      ))

    currentMath.isAddition &&
      setCurrentNumber(parseFloat(newResult) + parseFloat(newCurrentNumbers))
    currentMath.isSubtraction &&
      setCurrentNumber(parseFloat(newResult) - parseFloat(newCurrentNumbers))
    console.log(currentMath)
    currentMath.isMultiply &&
      setCurrentNumber(parseFloat(newResult) * parseFloat(newCurrentNumbers))
    currentMath.isDivision &&
      setCurrentNumber(parseFloat(newResult) / parseInt(newCurrentNumbers))
  }

  const handleClick = (id, value, type, e) => {
    type === 'number' && handleNumber(value, e)
    type === 'addition' && handleAddition(value)
    type === 'minus' && handleSubtraction(value)
    type === 'multiply' && handleMultiply(value)
    type === 'division' && handleDivision(value)
    type === 'percentage' && handlePercentage(value)
    type === 'point' && handlePoint(value)
    type === 'equals' && currentNumbers.length > 0 && handleEquals(value)
    type === 'c' && handleClear()
    type === 'delete' && handleDelete()
  }

  const buttons = Data.map((button) => {
    return (
      <Grid item md={3}>
        <Button {...button} handleClick={handleClick} key={button.id} />
      </Grid>
    )
  })

  return (
    <Container>
      <Box
        marginBottom={50}
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        sx={{
          '& > :not(style)': {
            width: 400,
            height: 650,
          },
        }}
      >
        <Card>
          <Box
            sx={{
              marginY: 8,
              marginRight: 5,
            }}
          >
            <Typography variant="h5" textAlign={'end'}>
              {prevNumbers}
            </Typography>
            <Typography variant="h3" textAlign={'end'}>
              {currentNumbers}
            </Typography>
          </Box>

          <Grid
            container
            rowSpacing={0.5}
            columnSpacing={0.1}
            margin={1}
            padding={0}
          >
            {buttons}
          </Grid>
        </Card>
      </Box>
    </Container>
  )
}
export default Main
