import * as KoaRouter from 'koa-router';
import * as Koa from 'koa';
import * as greet from './greeter';

export function load(app: Koa): void {
  var router = KoaRouter()
  greet.load(router)
  app.use(router.routes())
  app.use(router.allowedMethods())
}

