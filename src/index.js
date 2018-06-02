'use strict';

class Rsr {

  static save(model, options) {
    const { data, error, validate } = options;
    const errorValidate = Rsr.setAlert('save', validate);
    const errorSave = Rsr.setAlert('save', error);

    Rsr.isValid(data, errorValidate);

    return model.create(data)
      .then((response) => {
        Rsr.handleError(response, errorSave);
        return response;
      })
      .catch((err) => {
        console.error(err.message);
        return err;
      });
  }

  static delete(model, options) {
    const { params, error, validate } = options;

    Rsr.isValid(params.id);

    return model.destroy({
      where: params
    })
      .then((response) => {
        Rsr.handleError(response, error);
        return response;
      })
      .catch((err) => {
        console.error(err.message);
        return err;
      });
  }

  static update(model, options) {
    const { params, error, validate, data } = options;

    Rsr.isValid(options.params, validate);

    return model.update(data, {
      where: params
    })
      .then((response) => {
        Rsr.handleError(response, error);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static findAll(model, options) {
    const { error, params } = options;
    const errorFind = Rsr.setAlert('find', error);

    return model.findAll(params)
      .then((response) => {
        Rsr.handleError(response, errorFind);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static findOne(model, options) {
    const { error, params, validate } = options;
    const errorValidate = Rsr.setAlert('save', validate);
    const errorFind = Rsr.setAlert('find', error);

    return model.findOne(params)
      .then((response) => {
        Rsr.handleError(response, errorFind);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static isValid(data, message = '') {
    const errorEmpty = Rsr.setAlert('empty', message);

    if (!data) {
      throw new Error(errorEmpty);
      return;
    }
    return true;
  }

  static setAlert(type, message) {
    const defaultAlert = {
      validate: 'Verifique se os campos foram preenchidos corretamente.',
      empty: 'Os campos devem ser preenchidos.',
      delete: 'Não foi possível remover o cadastro.',
      update: 'Não foi possível atualizar o cadastro',
      save: 'Não foi possível efetuar o cadastro',
      find: 'Sua consulta não retornou resultados.',
    };

    if (message) {
      const alert = {};
      alert[type] = message;
      return alert[type];
    }
    return defaultAlert[type];
  }

  static handleError(response, error) {
    if (!response) {
      throw new Error(error);
      return;
    }
    return true;
  }

}

module.exports = Rsr;
