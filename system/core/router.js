/* Routing logic */
const KoaRouter = require('koa-router');
const search = require('../../controller/search')
const router = new KoaRouter();

router.get('/api/autocomplete', search.autocomplete);

module.exports = router;