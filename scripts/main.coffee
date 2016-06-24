module.exports = (robot) ->
  robot.respond /^ping$/i, (res) ->
    res.send 'pong'


#  msg = null
#  robot.listen(
#    (message) ->
#      msg = message
#      true
#    (response) -> response.reply msg
#  )
