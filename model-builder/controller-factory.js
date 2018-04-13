'use strict';
class ControllerBuilder {
  constructor(model) {
    this.model = model;
    this.addRoute = (req, res, next) => {
      let data = req.body;
      return this.model.create(data)
        .then(newItem => {
          res.send({ data: newItem});
          return;
        })
        .catch((err) => {
          const error = {
            title: 'Failed to create student',
            description: 'Internal server error',
            status: 500,
            err:err
          };
          next(error);
        });
    }

    this.getAllRoute = (req, res, next) => {
      let data = req.body;
      return this.model.getAll()
        .then(allItems => res.send({ data: allItems }))
        .catch((error) => {
          next(error);
        });
    }

  }
}

module.exports = ControllerBuilder;
