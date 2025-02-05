import React from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CBadge } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilEye, cilPencil, cilTrash } from '@coreui/icons'

const denunciasData = [
  { id: 1, codigo: 'D001', data: '2023-01-01', anonimo: true, status: 'Pendente' },
  { id: 2, codigo: 'D002', data: '2023-01-02', anonimo: false, status: 'Em andamento' },
  { id: 3, codigo: 'D003', data: '2023-01-03', anonimo: true, status: 'Concluído' },
  // Adicione mais dados conforme necessário
]

const Denuncias = () => {
  return (
    <div>
      <h4>Denúncias</h4>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Código de Denúncia</CTableHeaderCell>
            <CTableHeaderCell>Data de Recepção</CTableHeaderCell>
            <CTableHeaderCell>Anonimo</CTableHeaderCell>
            <CTableHeaderCell>Status</CTableHeaderCell>
            <CTableHeaderCell>Ações</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {denunciasData.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{item.id}</CTableDataCell>
              <CTableDataCell>{item.codigo}</CTableDataCell>
              <CTableDataCell>{item.data}</CTableDataCell>
              <CTableDataCell>
                <CBadge color={item.anonimo ? 'success' : 'danger'}>
                  {item.anonimo ? 'Sim' : 'Não'}
                </CBadge>
              </CTableDataCell>
              <CTableDataCell>{item.status}</CTableDataCell>
              <CTableDataCell>
                <CButton color="info" size="sm" className="me-2">
                  <CIcon icon={cilEye} /> Ver
                </CButton>
                <CButton color="warning" size="sm" className="me-2">
                  <CIcon icon={cilPencil} /> Acompanhar
                </CButton>
                <CButton color="danger" size="sm">
                  <CIcon icon={cilTrash} /> Eliminar
                </CButton>
              </CTableDataCell>
            </CTableRow>
          ))}
        </CTableBody>
      </CTable>
    </div>
  )
}

export default Denuncias