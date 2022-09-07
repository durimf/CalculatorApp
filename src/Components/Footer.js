import React from 'react'

function Footer() {
  const date = new Date()
  const today = date.getFullYear()
  return (
    <div className="footer">
      <p className="footer--desc">© {today} qwerty</p>
    </div>
  )
}

export default Footer
