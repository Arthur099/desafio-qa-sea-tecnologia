const { defineConfig } = require('cypress')

module.exports = defineConfig({
  viewportWidth: 1440,
  viewportHeight: 900,

  e2e: {
    baseUrl: 'https://analista-teste.seatecnologia.com.br',

    setupNodeEvents(on, config) {
      // eventos do Cypress serão configurados aqui futuramente
    },
  },
})