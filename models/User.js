

// 1. IMPORTACIONES
const mongoose = require("mongoose")


// 2. SCHEMA
const userSchema = mongoose.Schema({

	username: {
		type: String,
		trim: true, // No puedes guardar en base de datos si mandas un dato con espacios en blanco
		required: true,
		unique:true
        
	},
	email: {
		type: String,
		required: true,
		lowercase: true,
		trim: true,
		match:[/^\S+@\S+\.\S+$/, "Please use a valid email address."],
        unique: true
	},
	password: {
		type: String,
		required: true
	},
	date: {
		type: Date,
		required: true,
		default: Date.now
	},
}, 	{
		timestamps: true // Guardar la fecha y hora en la cual se creó un documento
	}
)

// 3. MODEL
const User = mongoose.model("User", userSchema)

// 4. EXPORTACIÓN
module.exports = User