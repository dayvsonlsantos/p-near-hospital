const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const DataSchema = new mongoose.Schema({
    userFullName: { type: String, default: "" },
    userEmail: { type: String, default: "" },
    userPassword: { type: String, default: "" },
}, {
    timestamps: true
});

//Criação e criptografia de senha

DataSchema.pre('save', function (next) {
    if (!this.isModified("userPassword")) {
        return next();
    }

    this.userPassword = bcrypt.hashSync(this.userPassword, 10);
    next();

});

//Atualização e criptografia de senha

DataSchema.pre('findAndUpdate', async function (next) {
    var password = this.getUpdate().userPassword + '';
    if (password.length < 55) {
        this.getUpdate().userPassword = await bcrypt.hashSync(password, 10);
    }
    next();
});

//Atualização e criptografia de senha

DataSchema.pre('findOneAndUpdate', async function (next) {
    var password = this.getUpdate().userPassword + '';
    if (password.length < 55) {
        this.getUpdate().userPassword = await bcrypt.hashSync(password, 10);
    }
    next();
});

const users = mongoose.model('User', DataSchema);
module.exports = users;
