import React from 'react'
import CIcon from '@coreui/icons-react'
import {
  cilBell,
  cilCalculator,
  cilChartPie,
  cilCursor,
  cilDescription,
  cilDrop,
  cilExternalLink,
  cilNotes,
  cilPencil,
  cilPuzzle,
  cilSpeedometer,
  cilStar,
  cilWarning,
  cilUser, 
  cilSettings

} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Denuncias',
    to: '/denuncias',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon" style={{ color: 'red' }} />,
  },
  {
    component: CNavItem,
    name: 'Denuncias activas',
    to: '/theme/colors',
    icon: <CIcon icon={cilWarning} customClassName="nav-icon"   style={{ color: 'red' }}/>,
  },
  {
    component: CNavItem,
    name: 'Conteudos',
    to: '/theme/typography',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon"   style={{ color: 'red' }}/>,
  },
  {
    component: CNavItem,
    name: 'Gestao de Usuarios',
    to: '/users',
    icon: <CIcon icon={cilUser} customClassName="nav-icon"   style={{ color: 'red' }}/>,
  },
  {
    component: CNavItem,
    name: 'Definicoes',
    to: '/theme/typography',
    icon: <CIcon icon={cilSettings} customClassName="nav-icon"  style={{ color: 'red' }}/>,
  },
]

export default _nav
