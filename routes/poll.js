// const express = require('express');
// const router = express.Router();
// const Pusher = require('pusher');
// const Vote = require('../models/Vote');

// //Initialise pusher object for voting
// var pusher = new Pusher({
//   appId: '506160',
//   key: 'a36a12270741efa5f9fb',
//   secret: '921a93c4ec1748d09042',
//   cluster: 'eu',
//   encrypted: true
// });

// //In polls route file - '/' means '/poll'
// router.get('/', (req, res) => { 
//   //Take vote model and find which gives us a promise
//   //promise called votes will return success true and array votes inside of votes
//   Vote.find().then(votes => res.json({success: true, 
//     votes: votes}));
// });  

// //Post to '/poll'
// router.post('/', (req, res) => {
//   //create variable called to new vote, set it as a new object. 
//   const newVote = {
//     //sets answer to answer uses chooses when clicking the radio button before submitting their vote
//     answer: req.body.answer,
//     //one point represents one vote
//     points: 1
//   }
//   //save vote to database which gives a promise back
//   //inside promise it gives us the vote added to the database
//   new Vote(newVote).save().then(vote => {
//     //Pusher will trigger an event we sucsribe to on the front end and gets the points and answer
//     pusher.trigger('vote-poll', 'answer-vote', {
//       points: parseInt(vote.points),
//       answer: vote.answer
//   });
//     //return thank you for voting message
//   return res.json({success: true, message: 'Thanks for voting'});
//   });

  
// });





// module.exports = router;