import Joi from '@hapi/joi';

export default Joi.object({
  page: Joi.number(),
  limit: Joi.number(),
  sort: Joi.string(),
});
