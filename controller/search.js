const esModel = require('./../model/search');

module.exports = {

    async autocomplete(ctx) {

        if (typeof ctx.request.query.queryStr !== 'undefined' && ctx.request.query.queryStr !== null) {
            var queryStr = ctx.request.query.queryStr;

            ctx.set('Access-Control-Allow-Origin', '*');
            ctx.set('Content-Type', 'application/json');

            const resultData = esModel.getAutocomplete(queryStr);

            return resultData.then(function(result) {
                ctx.body = result
            });
        } else {
            ctx.body = { "meta": { "status": 200, "is_error": 1, "messages": ["Please Provide Query : 'queryStr'"], "total_records": 0 }, "data": [] }
        }
    },
}