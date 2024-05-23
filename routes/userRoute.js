import express from 'express'
import {
  userCre,
  userAll,
  userByName,
  userUpd,
  userDel
} from '../controllers/userController.js'

const router = express.Router()

router.post('', userCre)
router.get('', userAll)
router.get('/:name', userByName)
router.patch('/:id', userUpd)
router.delete('/:id', userDel)

export default router