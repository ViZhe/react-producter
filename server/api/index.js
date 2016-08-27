
import {Router} from 'express'
import r from 'rethinkdbdash'

// import {
//   fields,
//   groups,
//   templates
// } from './options'

const router = new Router()

// router.get('/fields', fields.list)
// router.get('/fields/:id', fields.list)
router.get('/fields', (req, res) => {
  r().db('Hoppas').table('options_fields').run()
    .then(result => {
      res.status(200).json(result)
    })
    .error(err => {
      res.status(404).json(err)
    })
})


// exports.users = function(req , res){
//   r.db('Hoppas').table('options_fields_aafc19a498fe').run().then(function(result) {
//     res.status(200).json(result)
//   }).error(function(err){
//     res.status(404).json({message : 'An Error has Occured'});
//   })
//
//   // var user = User.run().then(function(result){
//   // 	res.status(200).json(result);
//   // }).error(function(err){
//   // 	res.status(404).json({message : 'An Error has Occured'});
//  // 	});
// };


// router.get('/:slug', (req, res) => {
//   const index = fakeDB.findIndex(el => el.slug === req.params.slug)
//   if (index < 0) {
//     res.status(404).json({
//       error: 'Post does not exist in db'
//     })
//   }
//
//   setTimeout(() => {
//     res.status(200).json(fakeDB[index])
//   }, 300)
// })
//
// module.exports = router

export default router
