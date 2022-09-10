const express = require('express')
// require module path để trích xuất đường dẫn
const path = require('path')

const app = express()
const port = 3030

// cấu hình static files
app.use(express.static(__dirname + '/public'))

app.use(express.static(__dirname + '/controllers'))

app.get('/*',(req, res) => {
    res.sendFile(path.resolve('views/home.html'))
})

app.listen(port, () => console.log(
    `Express started on http://localhost:${port}; ` +
    `press Ctrl-C to terminate. `))