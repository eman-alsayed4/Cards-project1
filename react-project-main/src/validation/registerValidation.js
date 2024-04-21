import Joi from "joi";

import { validateEmailLogin, validatePasswordLogin } from "./loginValidation";


const firstSchema = Joi.object({
  first: Joi.string().min(2).max(256).required(),
});
const middleSchema = Joi.object({
  middle: Joi.string().min(2).max(256),
});

const lastSchema = Joi.object({
  last: Joi.string().min(2).max(256).required(),
});

const phoneSchema =Joi.object({
  phone: Joi.string().min(9).max(11).required(),
});

const urlSchema =Joi.object({
  url: Joi.string().min(14),
});
const altSchema =Joi.object({
  alt: Joi.string().min(2).max(256),
});
const stateSchema =Joi.object({
  state: Joi.string().min(2).max(256),
});
const countrySchema = Joi.object({
  country: Joi.string().min(2).max(256).required(),
});
const streetSchema = Joi.object({
  street: Joi.string().min(2).max(256).required(),
});
const houseNumberSchema = Joi.object({
  houseNumber: Joi.number().min(2).max(256).required(),
});
const citySchema = Joi.object({
  city: Joi.string().min(2).max(256).required(),
});
const zipSchema = Joi.object({
  zip: Joi.number().min(2).max(256).required(),
}); 

const isBusinessSchema = Joi.object({
  isBusiness: Joi.boolean().required(),
})


const validateFirstSchema = (first) => firstSchema.validate(first);
const validateMiddleSchema = (middle) => middleSchema.validate(middle);
const validateLastSchema = (last) => lastSchema.validate(last);
const validatePhoneSchema = (phone) => phoneSchema.validate(phone);
const validateUrlSchema = (url) => urlSchema.validate(url);
const validateAltSchema = (alt) => altSchema.validate(alt);
const validateStateSchema = (state) => stateSchema.validate(state);
const validateCountry = (country) => countrySchema.validate(country);
const validateStreet = (street) => streetSchema.validate(street);
const validateHouseNumber = (houseNumber) => houseNumberSchema.validate(houseNumber);
const validateCity = (city) => citySchema.validate(city);
const validateZip = (zip) => zipSchema.validate(zip);
const validateisBusiness = (isBusiness) => isBusinessSchema.validate(isBusiness);


const validateSchema = {
  first: validateFirstSchema,
  middle: validateMiddleSchema,
  last:validateLastSchema,
  email: validateEmailLogin,
  password: validatePasswordLogin,
  phone:validatePhoneSchema,
  url:validateUrlSchema,
  alt:validateAltSchema,
  state:validateStateSchema,
  country:validateCountry,
  street:validateStreet,
  houseNumber:validateHouseNumber,
  city:validateCity,
  zip:validateZip,
};

export {
  validateEmailLogin,
  validatePasswordLogin,
  validateFirstSchema,
  validateMiddleSchema,
  validateLastSchema,
  validatePhoneSchema,
  validateUrlSchema,
  validateAltSchema,
  validateStateSchema,
  validateCountry,
  validateStreet,
  validateHouseNumber,
  validateCity,
  validateZip,
  validateSchema,
};
