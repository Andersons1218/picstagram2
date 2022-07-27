const mongoose = require("mongoose")
const Schema = mongoose.Schema

const postSchema = mongoose.Schema(
	{
		user: { 
			type: Schema.Types.ObjectId, 
			ref: 'User',
			required: true,
		},
		likes: {
			type: [],
			require: true,
		},
		description: {
			type: String,
			required: true,
		},
		image: String,
		updatedAt: {
			type: Date,
			default: new Date(),
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model("Post", postSchema)