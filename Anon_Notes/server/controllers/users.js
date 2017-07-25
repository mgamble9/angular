// temp ARRAY for creating dummy data
// const NOTES = [
//   {name: "blah blah blah", _id: 1, createdAt: new Date(), updatedAt: new Date()},
//   {name: "skeet skeet skeet", _id: 2, createdAt: new Date(), updatedAt: new Date()},
//   {name: "huzzah", _id: 3, createdAt: new Date(), updatedAt: new Date()},
// ]

const mongoose = require("mongoose")
const NOTES = mongoose.model("Note")

module.exports = {
  add_note: (req, res) => {
    NOTES.findOne({note: req.body.note})
        .then(data => {
          if(data){
            // save to session
            // req.session.user_id = data._id
            // don't need to save to session here though
            console.log("note already exists")
            res.json(true)
          } else {
            let new_note = new NOTES({note: req.body.note})
            console.log(req.body)
            new_note.save()
              .then(data => {
                //save into session
                // req.session.user_id = new_user._id
                console.log("new note savedin db")
                res.json(true)
              })
              .catch(err => res.status(500).json(err))
          }
        })
    // test using dummy data
    // USERS.push({name: req.body.name, _id: USERS[USERS.length-1]._id + 1,
    //   createdAt: new Date(), updatedAt: new Date()});
    // res.json(USERS)
  },




    // test using dummy data
    //     NOTES.push({name: req.body.name, _id: NOTES[NOTES.length-1]._id + 1,
    //       createdAt: new Date(), updatedAt: new Date()});
    //     res.json(NOTES)
    //   },

  all_notes: (req,res) => {
    // console.log(req.session)
    NOTES.find()
      .then(data => res.json(data))
      .catch(err => res.status(500).json(err))
  },

}
