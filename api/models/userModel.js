const db = require("../utils/database")

module.exports = class User{
    constructor(username, password){
        this.username = username,
        this.password = password
    }

    static findByUsername(username){
        return db.execute('SELECT * FROM users WHERE username = ?', [username])
    }

    static findByEmail(email){
        return db.execute('SELECT * FROM users WHERE email = ?', [email])
    }

    static createUser(username, password){
        return db.execute ('INSERT INTO users (username, password) VALUES (?,?)', [username, password])
    }

    static allUsers(){
        return db.execute('SELECT * FROM users')
    }
}