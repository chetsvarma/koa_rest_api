const insertModel = require('./../model/insertData');

module.exports = {

    async insertData(ctx) {

        var postData = ctx.request.body.data;
        postData = JSON.parse(postData);
         
        ctx.set('Access-Control-Allow-Origin', '*');
        ctx.set('Content-Type', 'application/json');

        if (typeof postData.id !== 'undefined' && postData.id !== null) {
            
            const resultData = insertModel.insert(postData);

            return resultData.then(function(result) {
                   ctx.body = result
            });
        } else {
            ctx.body = { "meta": { "status": 200, "is_error": 1, "messages": ["Please Provide 'id' of Document "], "total_records": 0 }, "data": [] }
        }
        // ctx.body = JSON.stringify(resultData);
    }
}