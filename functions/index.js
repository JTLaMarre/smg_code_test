const functions = require('firebase-functions');
const cors = require('cors')({origin: true});

// // Create and Deploy Your First Cloud Functions
// https://firebase.google.com/docs/functions/write-firebase-functions
//
exports.onFileChange = functions.storage.object().onFinalize(e => {
console.log(e)
return
})

exports.fileUpload = functions.https.onRequest((req,res)=>{
    cors(req,res, ()=>{

        res.send(200).json({
            message:"it worked!"
        })
})
})