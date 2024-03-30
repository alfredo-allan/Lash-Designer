const express = require("express");
const app = express();
const port = 3000;

// Configurando o servidor para servir arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/Home.html");
});
console.log()
app.listen(port, "192.168.10.20", () => {
  console.log(`Servidor rodando em http://192.168.10.20:${port}`);
});