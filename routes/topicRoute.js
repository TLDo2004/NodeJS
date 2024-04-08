import express from 'express'
import {
  topicCre,
  topicAll,
  topicById,
  topicUpd,
  topicDel
} from '../controllers/topicController.js'

const router = express.Router()

router.post('', topicCre)
router.get('', topicAll)
router.get('/:id', topicById)
router.patch('/:id', topicUpd)
router.delete('/:id', topicDel)

export default router