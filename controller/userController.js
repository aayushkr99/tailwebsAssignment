const User = require("../model/User");


exports.createUser = async function (req, res){
    try{

        const userData = {
            USERNAME: req.body.USERNAME,
            CONTACT_NUMBER : req.body.CONTACT_NUMBER,
            PASSWORD : req.body.PASSWORD,
            CREATE_DATE_TIME : req.body.CREATE_DATE_TIME
        }
        let saveUser = await User.create(userData);
        res.status(201).send({status : true, message : "data Inserted Successfully", data : saveUser})

    }catch(err){
        console.log(err)
        return res.status(500).send({status : false, err : err.message})
    }
}

exports.findUser = async function(req, res){
    try{
        // let getUser = await User.findAll({
        //     attributes: ['USER_ID', 'USERNAME']
        //   })
          let getUser = await User.findAll();
        // console.log(getUser.every(getUser => getUser instanceof getUser)); // true
        console.log("All users:", JSON.stringify(getUser, null, 2));
        res.status(200).send({status : true, data : getUser})
    }catch(err){
        console.log(err)
        return res.status(500).send({status : false, err : err.message})
    }
}
// userPassword.findAll({
//     include:[{model:db.user, required: true, where:{ ...add here username... }}],
//     order: 'id desc'
//  })