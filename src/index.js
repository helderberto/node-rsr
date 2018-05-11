'use strict';

const ValidateRsr = require('./validate');

class Rsr {

  static save(model, options) {
    const { data, error, validate } = options;
    const errorValidate = ValidateRsr.setAlert('save', validate);
    const errorSave = ValidateRsr.setAlert('save', error);

    ValidateRsr.isValid(data, errorValidate);

    return model.create(data)
      .then((response) => {
        ValidateRsr.handleError(response, errorSave);
        return response;
      })
      .catch((err) => {
        console.error(err.message);
        return err;
      });
  }

  static delete(model, options) {
    const { params, error, validate } = options;

    ValidateRsr.isValid(params.id);

    return model.destroy({
      where: params
    })
      .then((response) => {
        ValidateRsr.handleError(response, error);
        return response;
      })
      .catch((err) => {
        console.error(err.message);
        return err;
      });
  }

  static update(model, options) {
    const { params, error, validate, data } = options;

    ValidateRsr.isValid(options.params, validate);

    return model.update(data, {
      where: params
    })
      .then((response) => {
        ValidateRsr.handleError(response, error);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static findAll(model, options) {
    const { error, params } = options;
    const errorFind = ValidateRsr.setAlert('find', error);

    return model.findAll(params)
      .then((response) => {
        ValidateRsr.handleError(response, errorFind);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static findOne(model, options) {
    const { error, params, validate } = options;
    const errorValidate = ValidateRsr.setAlert('save', validate);
    const errorFind = ValidateRsr.setAlert('find', error);

    return model.findOne(params)
      .then((response) => {
        ValidateRsr.handleError(response, errorFind);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

}

module.exports = Rsr;
