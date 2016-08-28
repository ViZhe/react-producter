
import thinky, {type, r} from 'thinky'

const Product = thinky.createModel('Product', {
  id: type.string(),
  meta: {
    isActivated: type.boolean(),
    isDeleted: type.boolean(),
    createdAt: type.date().default(r.now()),
    updatedAt: type.date()
  },
  data: {
    title: type.string(),
    description: type.string(),
    article: type.string(),
    content: type.string()
  },
  price: {
    current: type.number(),
    stock: type.number()
  },
  templateId: type.string(),
  options: type.object()
})

export default Product
