/* Koa starting server file */
const Koa = require('koa');
const bodyParser = require('koa-body');
const router = require('./system/core/router');
const config = require('./system/core/config/main');
const errorResponse = require('./system/core/errorResponse.js');
const app = new Koa();

//Set up body parsing middleware
app.use(bodyParser({
    // formidable:{uploadDir: './uploads'},
    multipart: true,
    urlencoded: true
}));

app.use(router.routes());

/*
  Below Code Is For Error Response
*/
app.use(ctx => {

    const code = ctx.status;
    errRes = {};
    metaData = {};
    metaData.status = code;
    metaData.is_error = 1;
    metaData.messages = [];
    metaData.total_records = 0;
    metaData.messages.push(errorResponse[code].message);
    errRes.meta = metaData;
    errRes.data = [];

    ctx.set('Content-Type', 'application/json');
    ctx.body = errRes;

});
// const port = process.env.PORT || 4000;
app.listen(config.port, () => console.log(`Server running on ${config.host}${config.port}`));