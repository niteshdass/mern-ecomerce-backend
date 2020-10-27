const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32,
            unique: true
        },
        role:{
            type:Number,
            default:0
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Category", categorySchema);