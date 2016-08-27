
import Field from '../models/Field'


export const list = (req, res) => {
  Field.run().then(result => {
    res.status(200).json(result)
  }).error(err => {
    res.status(404).json(err)
  })
}

export const add = (req, res) => {
  Field.run().then(result => {
    res.status(200).json(result)
  }).error(err => {
    res.status(404).json(err)
  })
}
