import { checkSchema } from 'express-validator'

export default checkSchema({
  name: {
    errorMessage: "The 'name' field is required",
    notEmpty: true,
  },
  file: {
    errorMessage: "The 'file' field is required",
    custom: {
      options: (value, { req}) => {
        return Boolean(req.file)
      },
    }
  }
})
