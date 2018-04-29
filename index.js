const ValidateResource = require('./validate');

class ResourceService {

  static save(model, options) {
    const { data, error, validate } = options;
    const errorValidate = ValidateResource.setAlert('save', validate);
    const errorSave = ValidateResource.setAlert('save', error);

    ValidateResource.isValid(data, errorValidate);

    return model.create(data)
      .then((response) => {
        ValidateResource.handleError(response, errorSave);
        return response;
      })
      .catch((err) => {
        console.error(err.message);
        return err;
      });
  }

  static delete(model, options) {
    const { params, error, validate } = options;

    ValidateResource.isValid(params.id);

    return model.destroy({
      where: params
    })
      .then((response) => {
        ValidateResource.handleError(response, error);
        return response;
      })
      .catch((err) => {
        console.error(err.message);
        return err;
      });
  }

  static update(model, options) {
    const { params, error, validate, data } = options;

    ValidateResource.isValid(options.params, validate);

    return model.update(data, {
      where: params
    })
      .then((response) => {
        ValidateResource.handleError(response, error);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static findAll(model, options) {
    const { error, params } = options;
    const errorFind = ValidateResource.setAlert('find', error);

    return model.findAll(params)
      .then((response) => {
        ValidateResource.handleError(response, errorFind);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

  static findOne(model, options) {
    const { error, params, validate } = options;
    const errorValidate = ValidateResource.setAlert('save', validate);
    const errorFind = ValidateResource.setAlert('find', error);

    ValidateResource.isValid(params.id, errorValidate);

    return model.findOne({
      where: params
    })
      .then((response) => {
        ValidateResource.handleError(response, errorFind);
        return response;
      })
      .catch(err => {
        console.error(err.message);
        return err;
      });
  }

}

module.exports = ResourceService;