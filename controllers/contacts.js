const mongodb = require('./db');
const ObjectId = require('mongodb').ObjectId;

const getAllContacts = async (req, res, next) => {
  const result = await mongodb.getDb().db('W01').collection('contacts').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists);
  });
};

const getSingleContact = async (req, res, next) => {
  const id = new ObjectId(req.params.id);
  if (id) {
    const result = await mongodb.getDb().db('W01').collection('contacts').find({ _id: id });
    result.toArray().then((lists) => {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(lists[0]);
    });
  }
};

module.exports = {
  getAllContacts,
  getSingleContact
};
