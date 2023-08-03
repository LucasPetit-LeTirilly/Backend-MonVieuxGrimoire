const Joi = require('joi');


module.exports = async (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),

    password: Joi.string()
        .required(),
  })
    try {
      const value = await schema.validateAsync({ email: req.body.email, password: req.body.password});
      next();
    }
    catch {
      res.status(400).json({message: "erreur"})
    }
  }
