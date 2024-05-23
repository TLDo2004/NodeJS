import userModel from '../models/userModel.js' 

export const userCre = async (req, res, next) => {
  try {
    const cre = await userModel.create(req.body);
    res.status(200).json({ status: 'Create successful', data: cre })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const userAll = async(req, res, next) => {
  try {
    const all = await userModel.find({})
    res.status(200).json(all);
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const userByName = async(req, res, next) => {
  const { name } = req.params
  try {
    const byName = await userModel.findOne({name: name})
    if(!byName) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    } else {
      res.status(200).json(byName);
    }
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const userUpd = async(req, res, next) => {
  const { id } = req.params
  const { name, email, pass, bio, avatar, birth } = req.body
  try {
    const upd = await userModel.findByIdAndUpdate({_id: id}, {  name, email, pass, bio, avatar, birth }, { new: true })
    if(!upd) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ status: 'Update successful', data: upd });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const userDel = async(req, res, next) => {
  const { id } = req.params
  try {
    const del = await userModel.findById({_id: id})
    if(!del) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    await userModel.findByIdAndDelete({ _id: id })
    res.status(200).json({ status: 'Delete successful', data: del })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}