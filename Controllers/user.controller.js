const Model = require('../models')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const {validationResult} = require('express-validator')
const config = require('config')
const secret = config.get('secret')

const jwtAccessToken = (id,role)=>{
    const payload = {id,role}
    return jwt.sign(payload,secret,{expiresIn:'10h'})
}

class UserController {
    async registration(req,res){
        try{
            const errors = validationResult(req);
            if(!errors.isEmpty()){
                return res.status(400).json({message:'error validation',errors})
            }
            const candidate = await Model.users.findOne({
                where:{
                    name:req.body.name
                }
            })
           // console.log(candidate);
            if(candidate==null){
                const hashPass = bcrypt.hashSync(req.body.password,5);
                const result = await Model.users.create({
                    name:req.body.name,
                    email:req.body.mail,
                    role:req.body.role,
                    password:hashPass
                })
              return  res.status(201).json({message:'router say: create good'});
            }else{
              return  res.status(400).json({message:'router say: user used'});
            }


        }catch (e) {
           return res.status(500).json({message:'samething huinia...'+ e.message});
        }
    }
    async login(req,res){
        try{
            const {name,role,password} = req.body;
            const user = await Model.users.findOne({
                where:{
                    name:req.body.name
                }
            })
            if(!user){
                return res.status(400).json({message:'router say: user not found'});
            }else{
                //console.log('find user:',user)
                const validPass = bcrypt.compareSync(password,user.password);
                if(!validPass){
                    return res.status(400).json({message:'router say: password not valid'});
                }
                const token = jwtAccessToken(user.id,user.role);
                return res.status(201).json({token,userId:user.id,userRole:user.role,userName:user.name});
            }
        }catch (e) {
            return res.status(500).json({mess:e.message});
        }
    }
    async getUsers(req,res){
        let result = [];
        try{
            const users = await Model.users.findAll();
            if(users){
                for(let it of users){
                    let user = {
                        id:it.id,
                        name:it.name
                    }
                    result.push(user);
                }

               return res.status(201).json(result);
            }else{
               return res.status(500).json({message:'samething huinia...'});
            }
        }catch (e) {
           return res.status(500).json({message:'router say: '+ e.message});
        }
    }

}

module.exports = new UserController()