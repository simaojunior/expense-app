import Koa from "koa";
import Router from "koa-router";
import bodyParser from "koa-bodyparser";

const router = new Router();

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());

router.get("/", async (ctx: any) => {
  ctx.body = "Expense App!";
});

app.listen(3333, () => {
  console.log("Sever running!");
});
