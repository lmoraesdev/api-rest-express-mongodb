import express from "express";
import db from "./config/dbConnect.js";
import livros from "./models/Livro.js";
import routes from "./routes/index.js"

db.on("error", console.log.bind(console, "Erro de conexão"));
db.once("open", () => {
	console.log("Conexão com o Banco Feita com Sucesso");
});

const app = express();

app.use(express.json());

routes(app)

// /* Creating a constant variable called livros and assigning it an array of
/* Creating a constant variable called livros and assigning it an array of objects. */
// objects. */
// const livros = [
// /* Creating a constant variable called livros and assigning it an array of objects. */
// 	{ id: 1, titulo: "Senhor dos Aneis" },
// 	{ id: 2, titulo: "O Hobbit" },
// ];


app.get("/livros", (req, res) => {
	livros.find((err, livros) => {
		res.status(200).json(livros);
	});
});

app.get("/livros/:id", (req, res) => {
	let index = buscaLivro(req.params.id);
	res.json(livros[index]);
});

app.put("/livros/:id", (req, res) => {
	let index = buscaLivro(req.params.id);
	livros[index].titulo = req.body.titulo;
	res.json(livros);
});

app.delete("/livros/:id", (req, res) => {
	let { id } = req.params;
	let index = buscaLivro(id);
	livros.splice(index, 1);
	res.json(`Livro ${id} removido com Sucesso`);
});

function buscaLivro(id) {
	return livros.findIndex((livro) => livro.id == id);
}

export default app;
