import Router from 'koa-router';

const router = Router();

router.get('/', ctx => console.log(ctx.body = 'INITIAL ROUTE'));

router.get('/second_route', ctx => console.log(ctx.body = 'I am second_route'));

router.post('/something', ctx => {
  ctx.body = {
    something: 'something here'
  };
});

module.exports = router;
