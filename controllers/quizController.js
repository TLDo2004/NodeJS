import quizModel from '../models/quizModel.js' 

export const quizCre = async (req, res, next) => {
  try {
    const cre = await quizModel.create(req.body);
    res.status(200).json({ status: 'Create successful', data: cre })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const quizAll = async(req, res, next) => {
  try {
    const all = await quizModel.find({})
    res.status(200).json({ data: all });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const quizById = async(req, res, next) => {
  const { id } = req.params
  try {
    const byId = await quizModel.findById({_id: id}).populate('words')
    if(!byId) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ data: byId });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const quizUpd = async(req, res, next) => {
  const { id } = req.params
  const { type, point, timer } = req.body
  try {
    const upd = await quizModel.findByIdAndUpdate({_id: id}, {  type, point, timer }, { new: true })
    if(!upd) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ status: 'Update successful', data: upd });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const quizDel = async(req, res, next) => {
  const { id } = req.params
  try {
    const del = await quizModel.findById({_id: id})
    if(!del) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    await quizModel.findByIdAndDelete({ _id: id })
    res.status(200).json({ status: 'Delete successful', data: del })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}