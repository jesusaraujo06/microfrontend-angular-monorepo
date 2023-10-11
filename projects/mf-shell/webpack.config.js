const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // Los micro-frontends que voy a integrar
  remotes: {
    "mfShopping": "http://localhost:4201/remoteEntry.js",    
    "mfPayment": "http://localhost:4202/remoteEntry.js",
  },

  // Este objeto sirve para compartir cosas entre los micro-frontends
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

  // Alias de las librerias que vamos a utilizar en cada micro-frontend, por detras la libreria de angular-architect va a generar la instancia de las librerias y la va a injectar a cada uno de los micro-frontends.
  sharedMappings: ["@commons-lib"]

});
