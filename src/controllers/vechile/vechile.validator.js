const Joi = require('joi');

export const getOtherUserProfile = {
  body: {
    userId: Joi.number().required(),
  },
};

export const create = {
  body: {
    vechile_no: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    location: Joi.string().required(),
  },
};

export const update = {
  body: {
    id: Joi.string().required(),
    vechile_no: Joi.string().required(),
    latitude: Joi.string().required(),
    longitude: Joi.string().required(),
    location: Joi.string().required(),
  },
};


