
import ProductTemplate from '../models/productTemplate'


const api = {
  add: (req, res) => {
    ProductTemplate.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  list: (req, res) => {
    ProductTemplate.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  item: (req, res) => {
    ProductTemplate.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  delete: (req, res) => {
    ProductTemplate.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  },
  update: (req, res) => {
    ProductTemplate.run().then(result => {
      res.status(200).json(result)
    }).error(err => {
      res.status(404).json(err)
    })
  }
}


export default api
