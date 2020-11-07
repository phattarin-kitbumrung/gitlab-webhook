const express = require('express')
const lineapi = require('line-api')
const app = express()
const port = process.env.PORT || 3000
const bodyParser = require('body-parser')
app.use(bodyParser.json())

app.post('/pushhook', async(req, res) => {
  const data = req.body
  try {
    const notify = new lineapi.Notify({
        token: 'lWkLPSc9FrMRJsjkmvssmT3W1P9N0FJaaEDRz0weOSN'
    })
    notify.send({
      message: data.user_username + '\uDBC0\uDCA4'+'\uDBC0\uDCA4'+'\uDBC0\uDCA4'
        + '\n push project >> ' + data.repository.name
        + '\n commits \uDBC0\uDC41' + data.commits[0].title
        + '\n\n developed by minizymint \uDBC0\uDC7F'
    }).then(res.send(data))
  } catch (error) {
      res.send(error)
  }
})

app.listen(port, async() => {
  console.log('Example app listening on port 3000!')
})
