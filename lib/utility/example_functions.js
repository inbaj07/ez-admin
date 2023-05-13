const path = require('path')
const fs = require('fs')
const { promisify } = require('util')
const readFile = promisify(fs.readFile)

exports.objectAssignFunction = async () => {
  const obj = {
    aaa: 1,
    bbb: 2
  }
  Object.assign(obj, { testData: 'test' })
  Object.assign(obj, { ungrouped: 222 })
  return obj
}
exports.reduceFunction = async () => {
  const scorers = [
    { name: 'Christiano Ronaldo', goals: 100 },
    {
      name: 'Messy',
      goals: 100
    }
  ]
  const initialValue = 0
  const totalGoals = scorers.reduce(
    (total, element) => total + element.goals, initialValue
  )
  return totalGoals
}
exports.forEachElementFieldChange = async (userData) => {
  userData.forEach(element => {
    element.otp.no = '112' // Element field value change
    element.user_id = 100000000 // Element field value change
  })
  return userData
}
exports.readFileAsync = async () => {
  let doc = ''
  // ###########From callback to promise#############
  doc = await readFile(path.join(__dirname, '../../package.json'), 'utf8')
  // ##########Callback readFile data only accessible inside##########
  /* fs.readFile(path.join(__dirname, '../../package.json'), 'utf8', function (err, data) {
    if (err) throw err
    console.log(data)
    doc = data
  }) */
  return doc
}
