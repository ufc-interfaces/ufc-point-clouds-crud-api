import { checkSchema } from 'express-validator'

export default checkSchema({
  json: {
    errorMessage: "The 'json' field is invalid",
    custom: {
      options: (value, { req}) => {
        const { json = {} } = req.body || {}

        return Boolean(json) &&
          Boolean(json?.numpts) &&
          typeof json?.numpts === 'number' &&
          json?.points instanceof Array &&
          typeof json?.points[0]?.x === 'number' &&
          typeof json?.points[0]?.y === 'number' &&
          typeof json?.points[0]?.z === 'number'
      },
    }
  }
})
