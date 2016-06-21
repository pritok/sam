module.exports = (robot) ->
  robot.respond /^ping$/i, (res) ->
    res.send 'pong'

  robot.listen(
    (message) -> true
    (response) -> response.reply "Hey there!"
  )
