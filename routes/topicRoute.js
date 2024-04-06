import express from 'express'
import {
  topicCre,
  topicAll,
  topicById,
  topicUpd,
  topicDel
} from '../controllers/topicController.js'

const router = express.Router()

router.post('', wordCre)
router.get('', wordAll)
router.get('/:id', wordById)
router.patch('/:id', wordUpd)
router.delete('/:id', wordDel)

export default router