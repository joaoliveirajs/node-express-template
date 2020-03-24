import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  return res.send(
    "<h2>Template made by <a href='https://github.com/joaoliveirajs'>@joaoliveirajs<a/></h2>"
  );
});

export default router;
