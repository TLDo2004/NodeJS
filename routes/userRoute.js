import express from 'express'
import {
  userCre,
  userAll,
  userById,
  userUpd,
  userDel
} from '../controllers/userController.js'

const router = express.Router()

router.post('', userCre)
router.get('', userAll)
router.get('/:id', userById)
router.patch('/:id', userUpd)
router.delete('/:id', userDel)

export default router