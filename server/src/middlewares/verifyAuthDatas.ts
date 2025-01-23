import Joi from "joi";

export const verifyAuthDatas = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});
