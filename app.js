var firebase=require('firebase');

firebase.initializeApp({
    serviceAccount: "testing-eb3a3f6683ae.json",
    databaseURL: "https://testing-200101.firebaseio.com/"

});

var ref=firebase.database().ref('node-client');
var messagesRef=ref.child('messages');

var messageRef=messagesRef.push();
var messageKey=messageRef.key;
var payload={};
var message={
    text: 'hey guys,'
};
payload['userMessages/'+messageKey]=message;
payload['logs/'+messageKey]=message;

console.log(messageRef.key);

ref.update(payload);


var logs;
ref.child('logs').orderByKey().limitToLast(1).on('child_added',function (snap) {
    logs=snap.val();
    console.log(logs);

});
//
// ref.root.once('value')
//     .then(function (snap) {
//        console.log(snap.key,"\n\n");
//        console.log(snap.ref.toString(),"\n\n");
//        console.log(snap.val(),"\n\n");
//
//
//
//     });
