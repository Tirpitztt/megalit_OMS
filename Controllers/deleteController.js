const Model = require('../models')

class DeleteController {
    async deleteOrder(req,res){
        try{
            await Model.orders.destroy({
                where:{
                    number:req.params['num']
                },
                include:[
                    {model:Model.termins},
                    {
                        model:Model.complects,
                        include:Model.complect_items
                    },{
                        model:Model.handlings,
                        include:Model.handling_items
                    },{
                        model:Model.montaz,
                        include:Model.montaz_items
                    },{
                        model:Model.calculations,
                        include:Model.payments
                    }
                ]
            })
            return res.json({status:200});
        }catch (e) {
            return res.status(500).json({message:'delete order error'+ e.message});
        }
    }
    async deleteComplect(req,res){
        try{
            const complect = await Model.complects.delete({
                orderId:req.body.orderId,
                type:req.body.typeComplect
            })
            return res.json({complect})
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async deleteHandlings(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async deleteMontaz(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async deleteComplItem(req,res){
        try{
            await Model.complect_items.delete({
                where:{
                    id:req.body.id
                }
            })
            return res.json({status:200});
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async deleteHandlItem(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async deleteMontazItem(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async deleteTermins(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }



}

module.exports = new DeleteController()