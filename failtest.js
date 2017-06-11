exports.handler = function (event, context, callback) {
  const r = Math.random()
  if (r < 0.5) {
    callback(new Error(`randomly failed: ${JSON.stringify(event, null, 2)}`))
    return
  }

  callback(null, event)
}
