const functions = require('firebase-functions');
const admin = require("firebase-admin")
const nodemailer = require('nodemailer');
admin.initializeApp()


var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: "mitra.community.info@gmail.com",
    pass: "mitra2020!"
  },
});

exports.sendEmail = functions
    .firestore
    .document('users/{userId}')
    .onCreate((snap, context) => {
        const mailOptions = {
            from: `***********`,
            to: snap.data().mail,
            subject: 'Mitra bet info',
            html: `
              <h1>Bet Confirmation</h1>
              <p>
                  <img src="${snap.data().downloadURL}" alt="Contract image">
              </p>
            `
        };
        transporter.sendMail(mailOptions, (error, data) => {
            if (error) {
                console.log(error)
                return
            }
            console.log("Sent!")
        });
        return null;
    });