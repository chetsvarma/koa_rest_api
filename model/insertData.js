const esClient = require('./../system/core/config/esConn');
const indexName = 'cities'; /* Elatascisearch index name */
const indexType = 'city'; /* Elatascisearch type name */

module.exports = {

    async insert(postData) {
        var restResponse = {};

        const esResponse = await esClient.index({
            "index": indexName,
            "type": indexType,
            "id": postData.id,
            "body": postData
        });

        if(esResponse["result"] == "created"){
            restResponse.success = true;
            restResponse.message = "Document Inserted Successfully!!!";
        }else if(esResponse["result"] == "updated"){
            restResponse.success = true;
            restResponse.message = "Document Updated Successfully!!!";
        }else{
            restResponse.success = false;
            restResponse.message = "Sorry Something went Wrong!!!";
        }

        return JSON.stringify(restResponse);
    }
};