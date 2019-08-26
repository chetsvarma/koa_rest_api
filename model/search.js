const esClient = require('./../system/core/config/esConn');
const indexName = 'cities'; /* Elatascisearch index name */
const indexType = 'city'; /* Elatascisearch type name */

module.exports = {

    async getAutocomplete(queryStr) {
        var restResponse = {};

        var queryString = queryStr.trim();

        const esResponse = await esClient.search({
            "index": indexName,
            "type": indexType,
            "body": {
                "query": {
                    "bool": {
                        "must": {
                            "multi_match": {
                                "fields": ["tags"],
                                "query": queryString.toLowerCase(),
                                "analyzer": "standard",
                                "operator": "and",
                                // "fuzziness": "AUTO"
                            }
                        }
                    }
                }
            }
        });

        return JSON.stringify(esResponse['hits']['hits']);
    },
};