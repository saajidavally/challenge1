const mongoose = require("mongoose");
const counterSchema = new mongoose.Schema({
    id:{type: String},
    seq:{type: Number}
})
const counter = mongoose.model("counter",counterSchema);
module.exports = counter 