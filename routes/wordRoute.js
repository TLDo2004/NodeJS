import express from 'express'
import {
  wordCre,
  wordAll,
  wordById,
  wordUpd,
  wordDel
} from '../controllers/wordController.js'

const router = express.Router()

router.post('', wordCre)
router.get('', wordAll)
router.get('/:id', wordById)
router.patch('/:id', wordUpd)
router.delete('/:id', wordDel)

export default router