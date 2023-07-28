const Joi = require('joi');


module.exports = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

    password: Joi.string()
        .required(),
  })
  try {
    const value = schema.validate({ email: req.email, password: req.password});
    next();
  }
  catch (error) {
    res.status(400).json( { error })
  }

}