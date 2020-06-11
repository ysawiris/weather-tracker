const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    zipcode: {type: String, required: true },
    createdAt: { type: Date },
    updatedAt: { type: Date },
    title: { type: String, required: true },
    temp: { type: String }
});

PostSchema.pre("save", function(next) {
    // SET createdAt AND updatedAt
    const now = new Date();
    this.updatedAt = now;

    if (!this.createdAt) {
        this.createdAt = now;
    }

    next();
});

module.exports = mongoose.model("Post", PostSchema);