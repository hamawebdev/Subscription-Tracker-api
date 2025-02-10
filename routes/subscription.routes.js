import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
    res.send({ title: " get all subscriptions" });
})

subscriptionRouter.get("/:id", (req, res) => {
    res.send({ title: "get subscription by id" });
})

subscriptionRouter.post("/:id", (req, res) => { 
    res.send({ title: "create subscription" });
})  

subscriptionRouter.put("/:id", (req, res) => {
    res.send({ title: "update subscription" });
})  

subscriptionRouter.delete("/:id", (req, res) => {
    res.send({ title: "delete subscription" });
})

export default subscriptionRouter;