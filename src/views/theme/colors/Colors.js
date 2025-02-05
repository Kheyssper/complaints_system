import React, { useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CBadge, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

const denunciasData = [
  { id: 1, codigo: 'D001', data: '2023-01-01', anonimo: true, status: 'Pendente', nome: 'João Silva', localizacao: 'Rua A, Bairro B', contacto: '123456789', conteudo: 'A denúncia relata que há um problema grave de poluição na Rua A, Bairro B. Os moradores estão preocupados com a saúde e segurança devido ao descarte inadequado de resíduos.' },
  { id: 2, codigo: 'D002', data: '2023-01-02', anonimo: false, status: 'Em andamento', nome: 'Maria Oliveira', localizacao: 'Avenida C, Bairro D', contacto: '987654321', conteudo: 'A denúncia descreve um caso de violência doméstica na Avenida C, Bairro D. A denunciante pede ajuda urgente para a vítima que está em situação de risco.' },
  { id: 3, codigo: 'D003', data: '2023-01-03', anonimo: true, status: 'Concluído', nome: 'Carlos Pereira', localizacao: 'Travessa E, Bairro F', contacto: '456123789', conteudo: 'A denúncia informa sobre um ponto de tráfico de drogas na Travessa E, Bairro F. A comunidade está assustada e solicita uma intervenção policial.' },
  // Adicione mais dados conforme necessário
]

const Colors = () => {
  const [visible, setVisible] = useState(false)
  const [selectedDenuncia, setSelectedDenuncia] = useState(null)

  const handleViewClick = (denuncia) => {
    setSelectedDenuncia(denuncia)
    setVisible(true)
  }

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
              <p><strong>Nome:</strong> {selectedDenuncia.nome}</p>
              <p><strong>Localização:</strong> {selectedDenuncia.localizacao}</p>
              <p><strong>Contacto:</strong> {selectedDenuncia.contacto}</p>
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