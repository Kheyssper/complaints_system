import React, { useState } from 'react'
import { CTable, CTableHead, CTableRow, CTableHeaderCell, CTableBody, CTableDataCell, CButton, CModal, CModalHeader, CModalTitle, CModalBody, CModalFooter, CPagination, CPaginationItem } from '@coreui/react'

const usuariosData = [
  { id: 1, nome: 'João Silva', contacto: '123456789', role: 'Policial' },
  { id: 2, nome: 'Maria Oliveira', contacto: '987654321', role: 'Psicóloga' },
  { id: 3, nome: 'Carlos Pereira', contacto: '456123789', role: 'Policial' },
  { id: 4, nome: 'Ana Costa', contacto: '321654987', role: 'Advogado' },
  { id: 5, nome: 'Pedro Santos', contacto: '654987321', role: 'Advogado' },
  { id: 6, nome: 'Lucas Lima', contacto: '789123456', role: 'Policial' },
  { id: 7, nome: 'Mariana Souza', contacto: '987321654', role: 'Psicóloga' },
  { id: 8, nome: 'Fernanda Alves', contacto: '123789456', role: 'Advogado' },
  { id: 9, nome: 'Ricardo Gomes', contacto: '456789123', role: 'Policial' },
  { id: 10, nome: 'Paulo Mendes', contacto: '789456123', role: 'Advogado' },
  { id: 11, nome: 'Laura Martins', contacto: '321987654', role: 'Psicóloga' },
  { id: 12, nome: 'Roberto Silva', contacto: '654321987', role: 'Policial' },
  { id: 13, nome: 'Clara Nunes', contacto: '987654321', role: 'Advogado' },
  { id: 14, nome: 'Bruno Costa', contacto: '123456789', role: 'Policial' },
  { id: 15, nome: 'Juliana Souza', contacto: '456123789', role: 'Psicóloga' },
  { id: 16, nome: 'Fernando Almeida', contacto: '789123654', role: 'Advogado' },
  { id: 17, nome: 'Patrícia Lima', contacto: '321654987', role: 'Psicóloga' },
  { id: 18, nome: 'Rafael Silva', contacto: '654987321', role: 'Policial' },
  { id: 19, nome: 'Gabriela Costa', contacto: '987321456', role: 'Advogado' },
  { id: 20, nome: 'Thiago Santos', contacto: '123789654', role: 'Policial' },
  { id: 21, nome: 'Isabela Oliveira', contacto: '456789321', role: 'Psicóloga' },
]

const Typography = () => {
  const [visible, setVisible] = useState(false)
  const [createVisible, setCreateVisible] = useState(false)
  const [selectedUsuario, setSelectedUsuario] = useState(null)
  const [newUsuario, setNewUsuario] = useState({ nome: '', contacto: '', role: 'Policial', password: '', confirmPassword: '' })
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 10

  const handleViewClick = (usuario) => {
    setSelectedUsuario(usuario)
    setVisible(true)
  }

  const handleAddClick = () => {
    setNewUsuario({ nome: '', contacto: '', role: 'Policial', password: '', confirmPassword: '' })
    setCreateVisible(true)
  }

  const handleNewUsuarioChange = (e) => {
    const { name, value } = e.target
    setNewUsuario({ ...newUsuario, [name]: value })
  }

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  const indexOfLastItem = currentPage * itemsPerPage
  const indexOfFirstItem = indexOfLastItem - itemsPerPage
  const currentItems = usuariosData.slice(indexOfFirstItem, indexOfLastItem)

  return (
    <div>
      <h4>Usuários</h4>
      <CButton color="primary" className="mb-3" onClick={handleAddClick}>
        Adicionar Usuário
      </CButton>
      <div style={{ boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', borderRadius: '8px', overflow: 'hidden' }}>
        <CTable align="middle" className="mb-0 border" hover responsive>
          <CTableHead className="text-nowrap" style={{ backgroundColor: '#f8f9fa' }}>
            <CTableRow>
              <CTableHeaderCell>ID</CTableHeaderCell>
              <CTableHeaderCell>Nome</CTableHeaderCell>
              <CTableHeaderCell>Contacto</CTableHeaderCell>
              <CTableHeaderCell>Categoria/Role</CTableHeaderCell>
              <CTableHeaderCell>Ações</CTableHeaderCell>
            </CTableRow>
          </CTableHead>
          <CTableBody>
            {currentItems.map((item, index) => (
              <CTableRow key={index}>
                <CTableDataCell>{item.id}</CTableDataCell>
                <CTableDataCell>{item.nome}</CTableDataCell>
                <CTableDataCell>{item.contacto}</CTableDataCell>
                <CTableDataCell>{item.role}</CTableDataCell>
                <CTableDataCell>
                  <CButton color="info" size="sm" className="me-2" onClick={() => handleViewClick(item)}>
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
      </div>
      <CPagination align="center" className="mt-3">
        <CPaginationItem disabled={currentPage === 1} onClick={() => handlePageChange(currentPage - 1)}>
          Anterior
        </CPaginationItem>
        {[...Array(Math.ceil(usuariosData.length / itemsPerPage)).keys()].map((number) => (
          <CPaginationItem key={number + 1} active={number + 1 === currentPage} onClick={() => handlePageChange(number + 1)}>
            {number + 1}
          </CPaginationItem>
        ))}
        <CPaginationItem disabled={currentPage === Math.ceil(usuariosData.length / itemsPerPage)} onClick={() => handlePageChange(currentPage + 1)}>
          Próximo
        </CPaginationItem>
      </CPagination>

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
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="role" style={{ display: 'block', marginBottom: '.5rem' }}>Categoria/Role</label>
                <select id="role" value={selectedUsuario.role} onChange={(e) => setSelectedUsuario({ ...selectedUsuario, role: e.target.value })} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }}>
                  <option value="Policial">Policial</option>
                  <option value="Psicóloga">Psicóloga</option>
                  <option value="Advogado">Advogado</option>
                </select>
              </div>
              <form>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>Senha</label>
                  <input type="password" id="password" placeholder="Digite a senha" value={selectedUsuario.password || ''} onChange={(e) => setSelectedUsuario({ ...selectedUsuario, password: e.target.value })} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
                </div>
                <div style={{ marginBottom: '1rem' }}>
                  <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '.5rem' }}>Confirmar Senha</label>
                  <input type="password" id="confirmPassword" placeholder="Confirme a senha" value={selectedUsuario.confirmPassword || ''} onChange={(e) => setSelectedUsuario({ ...selectedUsuario, confirmPassword: e.target.value })} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
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

      <CModal visible={createVisible} onClose={() => setCreateVisible(false)} size="lg">
        <CModalHeader closeButton>
          <CModalTitle>Adicionar Usuário</CModalTitle>
        </CModalHeader>
        <CModalBody>
          <div style={{ lineHeight: '1.6' }}>
            <form>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="nome" style={{ display: 'block', marginBottom: '.5rem' }}>Nome</label>
                <input type="text" id="nome" name="nome" placeholder="Digite o nome" value={newUsuario.nome} onChange={handleNewUsuarioChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="contacto" style={{ display: 'block', marginBottom: '.5rem' }}>Contacto</label>
                <input type="text" id="contacto" name="contacto" placeholder="Digite o contacto" value={newUsuario.contacto} onChange={handleNewUsuarioChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="role" style={{ display: 'block', marginBottom: '.5rem' }}>Categoria/Role</label>
                <select id="role" name="role" value={newUsuario.role} onChange={handleNewUsuarioChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }}>
                  <option value="Policial">Policial</option>
                  <option value="Psicóloga">Psicóloga</option>
                  <option value="Advogado">Advogado</option>
                </select>
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="password" style={{ display: 'block', marginBottom: '.5rem' }}>Senha</label>
                <input type="password" id="password" name="password" placeholder="Digite a senha" value={newUsuario.password} onChange={handleNewUsuarioChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="confirmPassword" style={{ display: 'block', marginBottom: '.5rem' }}>Confirmar Senha</label>
                <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirme a senha" value={newUsuario.confirmPassword} onChange={handleNewUsuarioChange} style={{ width: '100%', padding: '.5rem', borderRadius: '4px', border: '1px solid #ced4da' }} />
              </div>
            </form>
          </div>
        </CModalBody>
        <CModalFooter>
          <CButton color="secondary" onClick={() => setCreateVisible(false)}>
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