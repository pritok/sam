module.exports = (robot) ->
  robot.respond /^ping$/i, (res) ->
    res.send 'pong'

  robot.hear /(.*) added (.*) to (.*)/, (res) ->
    user = res.match[1]
    item = res.match[2]
    list = res.match[3]
    res.send 'Oh god, the list has changed!'

