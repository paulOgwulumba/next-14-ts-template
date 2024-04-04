const config = {};

Object.entries(config).forEach(([key, value]) => {
  if (!value) {
    throw new Error(`missing required ${key} env variable`);
  }
});

export default config;
