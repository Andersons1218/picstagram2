const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = mongoose.Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    likes: {
      type: [],
      require: true,
    },
    caption: {
      type: String,
      required: true,
    },
    image: String,
    updatedAt: {
      type: Date,
      default: new Date(),
    },
    comments: [
      {
        comment: {
          type: String,
        },
        user: { type: String },
      },
    ],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Post", postSchema);
