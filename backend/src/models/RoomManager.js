const AbstractManager = require("./AbstractManager");

class RoomManager extends AbstractManager {
  constructor() {
    super({ table: "room" });
  }

  insert(room) {
    return this.database.query(
      `insert into ${this.table} (name, lastname, email, password,role) values (?,?,?,?,?)`,
      [room.id]
    );
  }

  update(room) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [room.name, room.id]
    );
  }
}

module.exports = RoomManager;
