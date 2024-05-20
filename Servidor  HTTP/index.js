const http = require('http')

const server = http.createServer((req, res) => {
    console.log(req.url)

    switch (req.url) {
        case '/aluno':
            alunoRoute(req, res)
            break;
        default:
            res.writeHead(404, { 'Content-Type': "text/json" })
            res.write(JSON.stringify({ msg: "Path não encontrado" }))
            res.end()
    }
})

server.listen(8080, () => {
    console.log('Servidor pronto na porta 8080!')
})

function alunoRoute(req, res) {
    switch (req.method){
        case 'GET':
            res.writeHead(200, { 'Content-Type': "text/json" })
            res.write(JSON.stringify({ alunos: ["Gustavo", "João"]  }))
            res.end()
            break;
        case 'POST':
            res.writeHead(200, { 'Content-Type': "text/json" })
            res.write(JSON.stringify({ msg: "Aluno criado" }))
            res.end()
            break
        default:
            res.writeHead(400, { 'Content-Type': "text/json" })
            res.write(JSON.stringify({ msg: "Operação não suportada!" }))
            res.end()
            break
    }
}