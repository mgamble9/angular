const path = require("path")
const users = require("./../controllers/users.js")
module.exports = (app) => {

  app.post("/add_note", users.add_note)

  app.get("/all_notes", users.all_notes)

  // app.get("/logout", users.logout)
  // app.get("/get_logged_in_user", users.get_logged_in_user)

// this must be your last route
  app.get("*", (req,res) => {
    res.sendFile(path.resolve("./client/dist/index.html"))
  })
}
