import express from 'express'
import {
  quizCre,
  quizAll,
  quizById,
  quizUpd,
  quizDel
} from '../controllers/quizController.js'

const router = express.Router()

router.post('', quizCre)
router.get('', quizAll)
router.get('/:id', quizById)
router.patch('/:id', quizUpd)
router.delete('/:id', quizDel)

export default router