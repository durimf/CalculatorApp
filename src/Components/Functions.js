import React from 'react'
import Main from './Main'

function Functions(props) {
  const addition = (num1, num2) => {
    return num1 + num2
  }

  return (
    <div>
      <Main addition={addition} />
    </div>
  )
}

export default Functions
