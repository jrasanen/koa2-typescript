import * as Koa from 'koa';

// Middleware for routing.
import * as middleware from 'koa-router';

// Middleware for logging pretty messages.
import * as logger from 'koa-logger';

// Middleware for accesing json from ctx.body.
import * as parser from 'koa-bodyparser';

// Middleware for serving static files
import * as serve from 'koa-static-server';

// Views
import * as views from 'koa-views';

// Convert koa 1 -> koa 2
import * as convert from 'koa-convert';

// Load routes
import * as routes from './routes';


// Creates the application.
var app = new Koa();

app.use(serve({rootDir: 'public', rootPath: '/public'}))

app
  .use(parser())
  .use(logger())
  .use(async function(ctx, next) {
    // console.log(ctx);
    return await next();
  })

// Initialize routes
routes.load(app)

app.listen(5050, () => console.log('Listening on port 5050.'));

export default app;
