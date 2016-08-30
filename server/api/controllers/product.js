
import Product from '../models/product'


const api = {
  add: (req, res) => {
    Product.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  list: (req, res) => {
    Product.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  item: (req, res) => {
    Product.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  delete: (req, res) => {
    Product.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  update: (req, res) => {
    Product.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  }
}


export default api
