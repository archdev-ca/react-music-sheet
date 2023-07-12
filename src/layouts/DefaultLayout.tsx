import React from 'react'
import { Outlet } from 'react-router-dom'

interface Props {
  children?: React.ReactNode
}

const DefaultLayout = ({children}: Props) => {
  return (
    <div><Outlet /></div>
  )
}

export default DefaultLayout