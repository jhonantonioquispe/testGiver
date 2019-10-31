'use strict';
class ControllerBuilder {
    constructor(model) {
        this.model = model;

        this.addRoute = (req, res, next) => {
            let data = req.body;

            return this.model.create(data)
                .then(newItem => {
                    res.send({ data: newItem });
                    return;
                })
                .catch((err) => {
                    const error = {
                        title: 'Failed to create student',
                        description: 'Internal server error',
                        status: 500,
                        err: err
                    };
                    next(error);
                });
        }

        this.updateRoute = (req, res, next) => {
            let data = req.body;
            return this.model.update(data)
                .then(newItem => {
                    res.send({ data: newItem });
                    return;
                })
                .catch((err) => {
                    const error = {
                        title: 'Failed to create student',
                        description: 'Internal server error',
                        status: 500,
                        err: err
                    };
                    next(error);
                });
        }

        this.getAllRoute = (req, res, next) => {
            const data = req.body;
            let queryParams = req.originalUrl;

            const getFilterFields = (paramsString) => {
                let [entity, listParams] = paramsString.split("?");
                listParams = listParams? listParams.split(",") : [];

                return listParams.map(p => {
                    const [key, value] = p.split("=");
                    return (key && value) ? { key, value } : null;
                });
            };
            
            const filterMap = getFilterFields(queryParams);
            const obj = {};

            filterMap.forEach(({key, value}) => {
                if (key && value != undefined) {
                    obj[key]=value;
                }
            });

            return this.model.find(obj)
                .then(allItems => res.send({ data: allItems }))
                .catch(error => next(error));
        }

        this.getRoute = (req, res, next) => {
            let data = req.params.id;
            return this.model.get(data)
                .then(allItems => res.send({ data: allItems }))
                .catch(error => next(error));
        }


    }
}

module.exports = ControllerBuilder;
