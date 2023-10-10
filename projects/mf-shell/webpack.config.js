const { shareAll, withModuleFederationPlugin } = require('@angular-architects/module-federation/webpack');

module.exports = withModuleFederationPlugin({

  // Los micro-frontends que voy a integrar
  remotes: {
    "mfPayment": "http://localhost:4200/remoteEntry.js",
    "mfShopping": "http://localhost:4200/remoteEntry.js",    
  },

  // Este objeto sirve para compartir cosas entre los micro-frontends
  shared: {
    ...shareAll({ singleton: true, strictVersion: true, requiredVersion: 'auto' }),
  },

});
