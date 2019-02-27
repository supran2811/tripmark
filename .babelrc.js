const env = require("./src/env-config");

module.exports = {
  "env": {
    "development": {
      "presets": ["next/babel"],
       "plugins": [['transform-define', env]]
    },
    "production": {
      "presets": ["next/babel"],
      "plugins": [[
        'transform-define', 
        env
      ],
      [
        "module-resolver",
        {
          "root": ["./"],
          "alias": {
            "src": "./src",
          }
        }
      ]
    ]
    },
    "test": {
      "presets": [["next/babel", { "preset-env": { "modules": "commonjs" } }]],
      "plugins": [['transform-define', env]]
    }
  }
}