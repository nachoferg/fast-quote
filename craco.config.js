const {
  when,
  whenDev,
  whenProd,
  whenTest,
  ESLINT_MODES,
} = require("@craco/craco");

module.exports = {
  eslint: {
    mode: ESLINT_MODES.file,
  },
  babel: {
    plugins: whenProd(() => []),
  },
};
