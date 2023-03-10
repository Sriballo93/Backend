const magic = require('../../utils/magic');
const enum_ = require('../../utils/enum');
const odmCharacter = require('../odm/odm-character');

exports.getAll = async (req, res) => {
  let status = 'Success',
    errocode = ' ',
    message = '',
    data = ' ',
    statuscode = 0,
    response = {};
  try {
    let respOdm = await odmCharacter.getAll();
    if (respOdm.err) {
      (status = 'Failure'),
        (errocode = respOdm.err.code),
        (statuscode = enum_.CODE_BAD_REQUEST);
    } else {
      (message = 'Success Response'),
        (data = respOdm),
        (statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT);
    }
    response = await magic.ResponseService(status, errocode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log('err = ', error);
    response = await magic.ResponseService(
      'Failure',
      enum_.CRASH_LOGIC,
      error,
      ''
    );
    return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
  }
};

exports.Create = async (req, res) => {
  let status = 'Success',
    errorcode = '',
    message = '',
    data = '',
    statuscode = 0,
    response = {};
  try {
    const Name = req.body.name;
    const Status = req.body.status;
    const Town = req.body.town;

    if (Name && Status && Town) {
      let respOdm = await odmCharacter.Create(Name, Status, Town);

      if (respOdm.err) {
        (status = 'Failure'),
          (errorcode = respOdm.err.code),
          (message = respOdm.err.messsage),
          (statuscode = enum_.CODE_BAD_REQUEST);
      } else {
        (message = 'Character created'), (statuscode = enum_.CODE_CREATED);
      }
    } else {
      (status = 'Failure'),
        (errorcode = enum_.ERROR_REQUIRED_FIELD),
        (message = 'All fields are required'),
        (statuscode = enum_.CODE_BAD_REQUEST);
    }
    response = await magic.ResponseService(status, errorcode, message, data);
    return res.status(statuscode).send(response);
  } catch (err) {
    console.log('err = ', err);
    return res
      .status(enum_.CODE_INTERNAL_SERVER_ERROR)
      .send(
        await magic.ResponseService('Failure', enum_.CRASH_LOGIC, 'err', '')
      );
  }
};

exports.DeleteId = async (req, res) => {
  let status = 'Success',
    errocode = ' ',
    message = '',
    data = ' ',
    statuscode = 204,
    response = 'delete success';
  try {
    const { id } = req.params;
    let respOdm = await odmCharacter.Delete(id);
    if (respOdm.err) {
      (status = 'Failure'),
        (errocode = respOdm.err.code),
        (statuscode = enum_.CODE_BAD_REQUEST);
    } else {
      (message = 'Success Response'),
        (data = respOdm),
        (statuscode = data.length > 0 ? enum_.CODE_OK : enum_.CODE_NO_CONTENT);
    }
    response = await magic.ResponseService(status, errocode, message, data);
    return res.status(statuscode).send(response);
  } catch (error) {
    console.log('err = ', error);
    response = await magic.ResponseService(
      'Failure',
      enum_.CRASH_LOGIC,
      error,
      ''
    );
    return res.status(enum_.CODE_INTERNAL_SERVER_ERROR).send(response);
  }
};
