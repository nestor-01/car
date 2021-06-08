const AWS = require('aws-sdk'); 

let options = {}
if(process.env.IS_OFFLINE){
  options = {
    region: "localhost",
    endpoint: "http://localhost:8000"
  }
}

const dynamoDb = new AWS.DynamoDB.DocumentClient(options);


async function saveVehicle(vehicle){
    console.log("vehicle to save" + JSON.stringify(vehicle));
    try {
        const vehicleInfo = {
            TableName: "vehicles",
            Item: vehicle,
        };
    return await dynamoDb.put(vehicleInfo).promise();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

module.exports = {
    saveVehicle
}
