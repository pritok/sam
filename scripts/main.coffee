module.exports = (robot) ->
  robot.respond /^ping$/, (res) ->
    res.send 'pong'
