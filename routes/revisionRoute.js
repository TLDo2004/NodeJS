import express from 'express'
import {
  revisionCre,
  revisionAll,
  revisionById,
  revisionUpd,
  revisionDel
} from '../controllers/revisionController.js'

const router = express.Router()

router.post('', revisionCre)
router.get('', revisionAll)
router.get('/:id', revisionById)
router.patch('/:id', revisionUpd)
router.delete('/:id', revisionDel)

export default router