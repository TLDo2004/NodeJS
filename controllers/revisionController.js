import revisionModel from '../models/revisionModel.js' 

export const revisionCre = async (req, res, next) => {
  try {
    const cre = await revisionModel.create(req.body);
    res.status(200).json({ status: 'Create successful', data: cre })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const revisionAll = async(req, res, next) => {
  try {
    const all = await revisionModel.find({})
    res.status(200).json(all);
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const revisionById = async(req, res, next) => {
  const { id } = req.params
  try {
    const byId = await revisionModel.findById({_id: id}).populate('words')
    if(!byId) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json(byId);
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const revisionUpd = async(req, res, next) => {
  const { id } = req.params
  const { cre_dt, alarm_dt, interval, words } = req.body
  try {
    const upd = await revisionModel.findByIdAndUpdate({_id: id}, { cre_dt, alarm_dt, interval, words }, { new: true })
    if(!upd) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    res.status(200).json({ status: 'Update successful', data: upd });
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}

export const revisionDel = async(req, res, next) => {
  const { id } = req.params
  try {
    const del = await revisionModel.findById({_id: id})
    if(!del) {
      res.status(404).json({ status: 'error', message: 'Not found' })
    }
    await revisionModel.findByIdAndDelete({ _id: id })
    res.status(200).json({ status: 'Delete successful', data: del })
  } catch(e) {
    res.status(500).json({ status: 'error', message: e.message })
  }
}