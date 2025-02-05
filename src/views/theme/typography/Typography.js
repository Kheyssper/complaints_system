import React, { useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter } from '@coreui/react'

const usuariosData = [
  { id: 1, nome: 'João Silva', contacto: '123456789', role: 'Policial' },
  { id: 2, nome: 'Maria Oliveira', contacto: '987654321', role: 'Psicóloga' },
  { id: 3, nome: 'Carlos Pereira', contacto: '456123789', role: 'Policial' },
  // Adicione mais dados conforme necessário
]

const Typography = () => {
  const [visible, setVisible] = useState(false)
  const [selectedUsuario, setSelectedUsuario] = useState(null)
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleViewClick = (usuario) => {
    setSelectedUsuario(usuario)
    setVisible(true)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const handleConfirmPasswordChange = (e) => {
    setConfirmPassword(e.target.value)
  }

  return (
    <div>
      <h4>Usuários</h4>
      <CTable align="middle" className="mb-0 border" hover responsive>
        <CTableHead className="text-nowrap">
          <CTableRow>
            <CTableHeaderCell>ID</CTableHeaderCell>
            <CTableHeaderCell>Nome</CTableHeaderCell>
            <CTableHeaderCell>Contacto</CTableHeaderCell>
            <CTableHeaderCell>Categoria/Role</CTableHeaderCell>
            <CTableHeaderCell>Ações</CTableHeaderCell>
          </CTableRow>
        </CTableHead>
        <CTableBody>
          {usuariosData.map((item, index) => (
            <CTableRow key={index}>
              <CTableDataCell>{item.id}</CTableDataCell>
              <CTableDataCell>{item.nome}</CTableDataCell>
              <CTableDataCell>{item.contacto}</CTableDataCell>
              <CTableDataCell>{item.role}</CTableDataCell>
              <CTableDataCell>
                <CButton color="info" size="sm" className="me-2" onClick={() => handleViewClick(item)}>
                  Ver
                </CButton>
                <CButton color="warning" size="sm" className="me-2">
                  Editar
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
          <CModalTitle>Detalhes do Usuário</CModalTitle>
        </CModalHeader>
        <CModalBody>
          {selectedUsuario && (
            <div style={{ lineHeight: '1.6' }}>
              <p><strong>ID:</strong> {selectedUsuario.id}</p>
              <p><strong>Nome:</strong> {selectedUsuario.nome}</p>
              <p><strong>Contacto:</strong> {selectedUsuario.contacto}</p>
              <p><strong>Categoria/Role:</strong> {selectedUsuario.role}</p>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>Senha</label>
                  <input type="password" id="password" placeholder="Digite a senha" value={password} onChange={handlePasswordChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '.5rem' }}>Confirmar Senha</label>
                  <input type="password" id="confirmPassword" placeholder="Confirme a senha" value={confirmPassword} onChange={handleConfirmPasswordChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
                </div>
              </form>
            </div>
          )}
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setVisible(false)}>
            Fechar
          </CButton>
          <CButton color="primary">
            Salvar
          </CButton>
        </CModalFooter>
      </CModal>
    </div>
  )
}

export default Typography