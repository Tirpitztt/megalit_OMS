module.exports = (sequelize,DataTypes)=>{
    const Complect = sequelize.define('complects',{
        orderId:{type:DataTypes.INTEGER},
        type:{type:DataTypes.STRING}
    },{timestamps:false});

    Complect.associate = Model => {
        Complect.belongsTo(Model.orders);
        Complect.hasMany(Model.complect_items,{
            foreignKey:'complectId'
        });
    }
    return Complect;
}