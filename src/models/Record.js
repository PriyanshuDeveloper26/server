const mongoose = require('mongoose');

// create dynamic model
const createDynamicModel = (collectionName, headers) => {
  const schemaDefinition = {};
  headers.forEach((key) => {
    schemaDefinition[key] = { type: mongoose.Schema.Types.Mixed };
  });

  const schema = new mongoose.Schema(schemaDefinition, { strict: false });

  // return model
  return mongoose.models[collectionName] || mongoose.model(collectionName, schema, collectionName);
};

module.exports = createDynamicModel;
