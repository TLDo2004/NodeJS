import Topic from '../models/topicModel.js';
import topicModel from '../models/topicModel.js' 
import wordModel from '../models/wordModel.js'

export const topicCre = async (req, res, next) => {
  const {name, des, prog, words } = req.body
  try {
    const cre = await topicModel.create({name, des, prog})
    res.status(200).json({ status: 'Create successful', data: cre })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const topicAll = async(req, res, next) => {
  try {
    const all = await topicModel.find({})
    res.status(200).json(all);
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}
 
export const topicById = async(req, res, next) => {
  const { id } = req.params
  try {
    const byId = await topicModel.findById({_id: id}).populate('words')
    if(!byId) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json(byId);
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const topicUpd = async(req, res, next) => {
  const { id } = req.params
  const { name, des, prog, words } = req.body
  try {
    const upd = await topicModel.findByIdAndUpdate({_id: id}, { name, des, prog, words }, { new: true })
    if(!upd) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ status: 'Update successful', data: upd });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const topicDel = async(req, res, next) => {
  const { id } = req.params
  try {
    const del = await topicModel.findById({_id: id})
    if(!del) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    await topicModel.findByIdAndDelete({ _id: id })
    res.status(200).json({ status: 'Delete successful', data: del })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}