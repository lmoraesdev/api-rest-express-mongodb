import mongoose from "mongoose";

mongoose.connect(
	"mongodb+srv://lmoraes:123@api.sxv2aeo.mongodb.net/api-node"
);

let db = mongoose.connection;

export default db;
