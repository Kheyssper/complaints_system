import React, { useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CBadge, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CPagination, CPaginationItem } from '@coreui/react'

const denunciasData = [
  { id: 1, codigo: 'D001', data: '2023-01-01', anonimo: true, status: 'Pendente', conteudo: 'Venho por meio desta apresentar uma denúncia formal contra o estabelecimento comercial Supermercado Estrela, localizado na Avenida Julius Nyerere, nº 245, Maputo, devido às péssimas condições sanitárias encontradas no dia 3 de fevereiro de 2025. Durante minha visita como cliente, constatei a presença de alimentos vencidos nas prateleiras, produtos armazenados diretamente no chão e funcionários manipulando alimentos sem equipamentos de proteção individual adequados, situação que representa grave risco à saúde pública e viola as normas sanitárias vigentes no país.' },
  { id: 2, codigo: 'D002', data: '2023-01-02', anonimo: false, status: 'Em andamento', conteudo: 'Conteúdo da denúncia 2' },
  { id: 3, codigo: 'D003', data: '2023-01-03', anonimo: true, status: 'Concluído', conteudo: 'Conteúdo da denúncia 3' },
  // Adicione mais dados conforme necessário
]

const Colors = () => {
  const [visible, setVisible] = useState(false)
  const [selectedDenuncia, setSelectedDenuncia] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleViewClick = (denuncia) => {
    setSelectedDenuncia(denuncia)
    setVisible(true)
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = denunciasData.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div>
      <h4>Denúncias</h4>
      <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead className="text-nowrap" style={{ backgroundColor: '#f8f9fa' }}>
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
            {currentItems.map((item, index) => (
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
                  <CButton color="info" size="sm" className="me-2" onClick={() => handleViewClick(item)}>
                    Ver
                  </CButton>
                  <CButton color="warning" size="sm" className="me-2">
                    Acompanhar
                  </CButton>
                  <CButton color="danger" size="sm">
                    Eliminar
                  </CButton>
                </CTableDataCell>
              </CTableRow>
            ))}
          </CTableBody>
        </CTable>
      </div>
      <CPagination align="center" className="mt-3">
        <CPaginationItem disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Anterior
        </CPaginationItem>
        {[...Array(Math.ceil(denunciasData.length / itemsPerPage)).keys()].map((number) => (
          <CPaginationItem key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
            {number + 1}
          </CPaginationItem>
        ))}
        <CPaginationItem disabled={currentPage === Math.ceil(denunciasData.length / itemsPerPage)} onClick={() => handlePageChange(currentPage + 1)}>
          Próximo
        </CPaginationItem>
      </CPagination>

      <CModal visible={visible} onClose={() => setVisible(false)} size="lg">
        <CModalHeader closeButton>
          <CModalTitle>Detalhes da Denúncia</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedDenuncia && (
            <div style={{ lineHeight: '1.6' }}>
              <p><strong>ID:</strong> {selectedDenuncia.id}</p>
              <p><strong>Código:</strong> {selectedDenuncia.codigo}</p>
              <p><strong>Data:</strong> {selectedDenuncia.data}</p>
              <p><strong>Anonimo:</strong> {selectedDenuncia.anonimo ? 'Sim' : 'Não'}</p>
              <p><strong>Status:</strong> {selectedDenuncia.status}</p>
              <p><strong>Conteúdo:</strong></p>
              <p style={{ backgroundColor: '#f8f9fa', padding: '10px', borderRadius: '5px' }}>{selectedDenuncia.conteudo}</p>
            </div>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Fechar
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Colors