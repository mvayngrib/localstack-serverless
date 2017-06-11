const AWS = require('aws-sdk')
const lambda = new AWS.Lambda({ endpoint: 'http://localhost:4574' })

exports.handler = function (event, context, callback) {
  const { name } = event
  lambda.invoke({
    InvocationType: 'Event',
    Payload: 'hey',
    FunctionName: `${name}`
  })
  .promise()
  .then(() => callback(), callback)
}
