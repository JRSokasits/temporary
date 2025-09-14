const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new Schema( {
    username: {
        type: String,
        require: true,
    }
    password: {
        type: String,
        require: true,
    }
    responses: {
        type: String,
        require: false,
    }
});

const user = mongoose.model('User', userSchema);
module.exports = User;