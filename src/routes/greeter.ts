import * as KoaRouter from 'koa-router';
import * as Koa from 'koa';

export function load(app: KoaRouter): KoaRouter {
  app.get('/', function (ctx, next) {
    ctx.body = "moi"
  })
  return app
}
