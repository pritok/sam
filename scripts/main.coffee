module.exports = (robot) ->
  robot.respond /^ping$/i, (res) ->
    res.send 'pong'

  robot.hear /(.*) added (.*) to (.*)/, (res) ->
    res.send 'Oh god, the list has changed!'

