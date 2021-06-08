const vehicleRepository = require('../repository/vehicleRepository');
const parse = require('csv-parse/lib/sync');
const uuid = require('uuid');


async function uploadCsvService(csv) {
    let result = parse(csv, {
        columns: true,
        skip_emty_lines: true
    });

    for (let element of result) {
        console.log("uuid -> " + uuid.v1());
        element.UUID = uuid.v1();
        element.create_date = Date.now();
        element.update_date = Date.now();
        
        let result = await vehicleRepository.saveVehicle(element);
        console.log(result);
    };

    console.log("RECORDS ---------__>"+ JSON.stringify(result));

    console.log("file name" + csv)

}

module.exports = uploadCsvService;