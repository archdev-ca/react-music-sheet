import React from 'react'

interface Props {
    children: React.ReactNode
}

const DefaultLayout = ({children}: Props) => {
  return (
    <div>{children}</div>
  )
}

export default DefaultLayout