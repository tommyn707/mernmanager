const mongoose  = require("mongoose");
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        require:(true, "True"),
        minlength:(3, "False")
    },

    price: {
        type: Number,
        require:(true, "True"),
        minlength:(3, "False")
    },
    description: {
        type: String,
        require:(true, "True"),
        minlength:(3, "False")
    }
}, { timestamps: true});
module.exports.Product = mongoose.model('Product', ProductSchema);