var mqtt = require('mqtt')
var client  = mqtt.connect('ws://localhost:5280/mqtt', {username: "test@localhost", password: "test"})

client.on('connect', function () {
  client.subscribe('presence', function (err) {
    if (!err) {
      client.publish('presence', 'Hello mqtt')
    }
  })
})

client.on('message', function (topic, message) {
  // message is Buffer
  console.log(topic, message.toString())
  // uncommented if you want to close connection after first message received:
  //client.end()
})
