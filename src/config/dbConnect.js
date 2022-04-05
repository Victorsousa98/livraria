import mongoose from "mongoose";

mongoose.connect(
    "mongodb+srv://Victorsousa98:password@cluster0.0unpx.mongodb.net/victorsousa"
);

let db = mongoose.connection;//criamos uma variável que recebe a conexão com o banco de dados

export default db;
