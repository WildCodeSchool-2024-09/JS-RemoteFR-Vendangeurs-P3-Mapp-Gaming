import type { NextFunction, Request, RequestHandler, Response } from "express";
import Joi from "joi";

const validateDatas = (req: Request, res: Response, next: NextFunction) => {
  console.info("début de la validation des données");

  console.info(req.body);

  const userAction = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
  });

  const { error } = userAction.validate(req.body);

  if (error) {
    console.info("erreur de validation des données", error.details);
    return res.status(400).json({ error: error.details });
  }

  console.info("fin de la validation des données");

  next();
};

export default validateDatas;
