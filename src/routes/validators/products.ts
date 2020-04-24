import Joi from '@hapi/joi';
import expressJoiValidation from 'express-joi-validation';
import obejectId from 'joi-objectid';

const joiObejectId = obejectId(Joi);

const validator = expressJoiValidation.createValidator({});

import validatorPaginate from './paginate';

export const bodyProduct = validator.body(Joi.object({
  title: Joi.string().required(),
  price: Joi.number().required(),
  quantity: Joi.number().required(),
}));

export const paramsId = validator.params(Joi.object({
  id: joiObejectId().required(),
}));

export const queryFilters = validator.query(validatorPaginate);
