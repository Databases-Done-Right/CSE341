const mongodb = require('./db');

const getData = async (req, res, next) => {
  const result = await mongodb.getDb().db('W01').collection('Assignments').find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists[0]);
  });
};

module.exports = {
  getData
};