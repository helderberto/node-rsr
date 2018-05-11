'use strict';

class ValidateRsr {

  static isValid(data, message = '') {
    const errorEmpty = ValidateRsr.setAlert('empty', message);

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

module.exports = ValidateRsr;
