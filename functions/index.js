const functions = require('firebase-functions');
const admin = require('firebase-admin');
admin.initializeApp();

exports.logIP = functions.https.onRequest((req, res) => {
  const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress; // Get the visitor's IP

  // Log IP and timestamp to Firestore
  admin.firestore().collection('ipLogs').add({
    ip: ip,
    timestamp: admin.firestore.FieldValue.serverTimestamp() // Use Firestore's server-side timestamp
  })
  .then(() => {
    console.log('IP logged successfully:', ip); // Log the IP to Firebase function logs
    res.status(200).send('IP logged successfully.');
  })
  .catch((error) => {
    console.error('Error logging IP:', error); // Log error in Firebase function logs
    res.status(500).send('Error logging IP: ' + error);
  });
});
