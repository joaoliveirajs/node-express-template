import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(
    "<h1>Template made by <a href='https://github.com/joaoliveirajs'>@joaoliveirajs<a/></h1>"
  );
});

export default router;
