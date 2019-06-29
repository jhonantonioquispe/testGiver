'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

function _setAddAction(schemaToBuild) {
  this.create = function(newItem) {
    newItem.creationDate = new Date();
    return this.model.create(newItem)
      .then(newItem => {
        let result = {};
        for(let keyProperty in schemaToBuild) {
          result[keyProperty] = newItem[keyProperty];
        }
        result._id = newItem._id;
        return result;
      })
      .catch((error) => error);
  }
}

function _setUpdateAction(schemaToBuild) {
  this.update = function(itemToUpdate) {
    return this.model.findByIdAndUpdate(itemToUpdate._id, itemToUpdate)
      .then(newItem => {
        // let result = {};
        // for(let keyProperty in schemaToBuild) {
        //   result[keyProperty] = newItem[keyProperty];
        // }
        // result._id = newItem._id;
        return this.get(newItem._id);
      })
      .catch((error) => error);
  }
}

function _setGetAllAction() {
  this.getAll = function () {
    return this.model.find().lean(true)
      .then(items => {
        return items;
      })
      .catch((error) =>error);
  }
}
function _setGetOneAction() {
  this.get = function (id) {
    return this.model.findById(id).lean(true)
      .then(item => {
        return item;
      })
      .catch((error) =>error);
  }
}

class ModelBuilder {
  constructor(modelName, schemaToBuild) {
    this.modelName = modelName;
    this.schema = new Schema(schemaToBuild);
    _setAddAction.call(this, schemaToBuild);
    _setGetAllAction.call(this);
    _setGetOneAction.call(this);
    _setUpdateAction.call(this, schemaToBuild);
    this.model = mongoose.model(this.modelName, this.schema);
  }
}

module.exports = ModelBuilder;
