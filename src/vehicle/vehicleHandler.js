'use strict';

const vehicleService = require('./service/vehicleService');
const constants = require('../lib/constants');
const multipart = require('aws-lambda-multipart-parser');


async function uploadCsv(request) {
    const result = multipart.parse(request, false)
    console.log(result);
    let csv = request.body;
    try {
        await vehicleService(result.fille.content);
        return ({
            statusCode: constants.HTTP_STATUS_CODE.NO_CONTENT,
        });
      }catch (error) {
        return ({
            statusCode: constants.HTTP_STATUS_CODE.NOT_FOUND,
            body: JSON.stringify({
                message: error.message
              })
          });
      }
}

module.exports = {
    uploadCsv
}
