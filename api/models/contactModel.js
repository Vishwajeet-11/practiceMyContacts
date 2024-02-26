const db = require("../utils/database");

module.exports = class Contact {
    constructor(name, email, phone) {
        this.name = name;
        this.email = email;
        this.phone = phone;
    }

    save() {
        return db.execute('INSERT INTO contacts (name, email, phone) VALUES (?, ?, ?)', [this.name, this.email, this.phone]);
    }

    static findById(id) {
        return db.execute('SELECT * FROM contacts WHERE id = ?', [id]);
    }

    static findAll() {
        return db.execute('SELECT * FROM contacts');
    }

    static deleteById(id) {
        return db.execute('DELETE FROM contacts WHERE id = ?', [id]);
    }

    
    static updateById(id, updatedContact) {
        return db.execute('UPDATE contacts SET name = ?, email = ?, phone = ? WHERE id = ?', [updatedContact.name, updatedContact.email, updatedContact.phone, id]);
    }
};
