/* Routing logic */
const KoaRouter = require('koa-router');
const search = require('../../controller/search')
const insert = require('../../controller/insertData')
const router = new KoaRouter();

router.get('/api/autocomplete', search.autocomplete);
router.post('/api/insert', insert.insertData);

module.exports = router;