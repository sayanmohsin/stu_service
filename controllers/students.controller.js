var _ = require('lodash');

/** helpers */


/** ordbms db */
const db = require('../models/mysql');
const Students = db.students;

/**
 * find all students
 */
module.exports.findAll = async (req, res, next) => {
  try{
    if (req.query.offset) var offset = parseInt(req.query.offset);
    if (req.query.limit) var limit = parseInt(req.query.limit);
  
    var whereStudents = req.query.students;
    var students = await Students.findAll({
      where: whereStudents, offset, limit
    });
    res.send(students);    
  }catch(err){
    console.log('err: ', err.Error);
    next(err);
  }
};

/**
 * find students by id
 */
module.exports.findById = async (req, res, next) => {
  try{
    var students = await Students.findByPk(req.params.id, { include: [{ all: true, nested: true }]});
    res.send(students);
  }catch(err){
    console.log('err: ', err);
    next(err);
  }
};

/**
 * update students by id
 */
module.exports.update = async (req, res, next) => {
  try{
    var students = await Students.update(req.body, {where: {studentsid: req.params.id}})
    res.send(students);
  }catch(err){
    console.log('err: ', err);
    next(err);
  }
};

/**
 * add new students
 */
module.exports.create = async (req, res, next) => {
  try{
    const newData = new Students(req.body);
    var students = await newData.save();
    res.send(students);
  }catch(err){
    console.log('err: ', err);
    next(err);
  }
};