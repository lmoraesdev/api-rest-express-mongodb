import express from "express";
import LivroController from "../controllers/livrosController.js";

const router = express.Router();

router
	.get("/livros", LivroController.listarLivros)
	.post("/livros", LivroController.cadastrarLivros)
	.put("/livros/:id", LivroController.atualizarLivros);

export default router;
