import React from 'react'
import { NavLink } from 'react-router-dom'
import { LayoutGrid, Factory, ClipboardList, Box } from 'lucide-react'


const menuItems = [
  { to: '/dashboard', label: 'Overview', Icon: LayoutGrid },
  { to: '/manufacturing', label: 'Manufacturing', Icon: Factory },
  { to: '/orders', label: 'Orders', Icon: ClipboardList },
  { to: '/inventory', label: 'Inventory', Icon: Box },
]

const ItemLog = () => {
  return (
    <div>ItemLog</div>
  )
}

export default ItemLog