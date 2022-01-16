module.exports = (sequelize,DataTypes)=>{
    const User = sequelize.define('users',{
        name:{
            type:DataTypes.STRING,
            validate:{
                notEmpty:true
            }
        },
        email:{
            type:DataTypes.STRING
        },
        role:{
            type:DataTypes.STRING
        },
        password:{
            type:DataTypes.STRING,

        }
    },{timestamps:false});

    return User;
}