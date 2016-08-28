
import thinky, {type, r} from 'thinky'

const ProductTemplate = thinky.createModel('ProductTemplate', {
  id: type.string().default(r.uuid(5)),
  name: type.string().regex(/^[a-z]*?$/),
  title: type.string(),
  fields: type.array().schema(
    type.object().schema({
      name: type.string().required(),
      title: type.string().required(),
      type: type.string().enum([
        'text',
        'textarea',
        'checkbox',
        'radio',
        'select'
      ]),
      initialValue: type.string(),
      validate: type.array().schema(
        type.object().schema({
          type: type.string().enum([
            'required',
            'regex'
          ]),
          title: type.string(),
          regex: '^[0-9]*?$'
        })
      )
    })
  ).required()

  // {
  //   name: String,
  //   title: String,
  //   fields: [
  //     {
  //       name: String
  //       title: String
  //       type: 'text',
  //       initialValue: String
  //       validate: [
  //         {
  //           type: 'required',
  //           title: String
  //         },
  //         {
  //           type: 'regex',
  //           regex: '^[0-9]*?$',
  //           title: String
  //         }
  //       ]
  //     }
  //   ]
  // }
})

export default ProductTemplate
