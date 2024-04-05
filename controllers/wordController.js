import wordModel from '../models/wordModel.js' 

export const wordCre = async (req, res, next) => {
  try {
    const cre = await wordModel.create(req.body);
    res.status(200).json({ status: 'Create successful', data: cre })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const wordAll = async(req, res, next) => {
  try {
    const all = await wordModel.find({})
    res.status(200).json({ data: all });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const wordById = async(req, res, next) => {
  const { id } = req.params
  try {
    const byId = await wordModel.findById({_id: id})
    if(!byId) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ data: byId });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const wordUpd = async(req, res, next) => {
  const { id } = req.params
  const { word, pos, def, img, audio, pronun, hint } = req.body
  try {
    const upd = await wordModel.findByIdAndUpdate({_id: id}, { word, pos, def, img, audio, pronun, hint }, { new: true })
    if(!upd) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ status: 'Update successful', data: upd });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const wordDel = async(req, res, next) => {
  const { id } = req.params
  try {
    const del = await wordModel.findById({_id: id})
    if(!del) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    await wordModel.findByIdAndDelete({ _id: id })
    res.status(200).json({ status: 'Delete successful', data: del })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}