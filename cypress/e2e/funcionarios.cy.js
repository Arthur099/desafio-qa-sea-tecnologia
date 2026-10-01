describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://analista-teste.seatecnologia.com.br/')
  })
});

it('Adicionar Funcionário ativo', function() {

  cy.visit('https://analista-teste.seatecnologia.com.br/')

  cy.get('#root button.c-kUQtTK').click()
  cy.get('#root div.ant-switch-handle').click()

  cy.get('#root [name="name"]')
    .type('automação 01', { delay: 100 })

  cy.get('#root [name="cpf"]')
    .type('9852621540', { delay: 100 })

  cy.get('#root [name="rg"]')
    .type('985326', { delay: 100 })

  cy.get('#root [name="birthDay"]')
    .type('1999-05-17', { delay: 100 })

  cy.get('#root [name="caNumber"]')
    .type('54566556565', { delay: 100 })

  cy.get('#root button.save').click()

  // validação
  cy.contains('automação 01')
    .should('be.visible')
})

