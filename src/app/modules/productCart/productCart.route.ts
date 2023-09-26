import express from "express"

import { CartValidation } from "./productCart.validation"
import { CartController } from "./productCart.controller"
import validateRequestZod from "../../middlewares/validateRequestZod"

const router = express.Router()


router.post('/',
validateRequestZod(CartValidation.createCartZOdValidation),
CartController.createCart)
router.get('/:category',CartController.getCart)

export const cartRouter = router