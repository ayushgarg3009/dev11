const resumes = require('./model');
createResume = (req,res) => {
    // const body = req.body;

    // const resume = new resume(body)
    try {
        if(req.body){
            const data = new resumes(res.body);
            res.status(200).json({message: "success", data: data})  
        }
        else{
            res.status(400).json({
                message:"failed",
            
            })
        }

    } 
    catch (error){
        console.log(error);
    }

    
}

module.exports.createResume = createResume










// resume.save()
    //     .then(()=>{
    //         return res.status(201).json({
    //             success: true,
    //             id: resume_id,
    //             message: 'resume created!',
    //         })
    //     })
    //     .catch(err=>{
    //         return res.status(400).json({
    //             error,
    //             message: 'resume not created'
    //         })
    //     })














// app.get("/user/:uid", (req, res) => {
//     // req paramatere -> user id
//     let cUid = req.params.uid;
//     let userArr = userDB.filter((user) => {
//         return user.uid == cUid;
//     });
//     console.log(req.params);
//     res.status(201).json({
//         status: "success",
//         user: userArr.length == 0 ? "no user" : userArr[0]
//     })
//     // next()
// })

// if(!remume){
//     return res.status(400).json({success: false, error: err})  
// }


// https://mongoosejs.com/docs/models.html
// https://medium.com/tkssharma/node-js-with-mongoose-odm-9697c09665df
