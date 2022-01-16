const Model = require('../models')

class EditController {
    async editOrder(req,res){
        try{
            switch (req.body.type){
                case 'customer':{
                    await Model.customers.update({
                        last_name:req.body.customer.last_name,
                        name:req.body.customer.name,
                        father_name: req.body.customer.father_name,
                        address: req.body.customer.address,
                        phone:req.body.customer.phone,
                        rank:req.body.customer.rank
                    },{
                        where:{
                            id:req.body.customer.id
                        }
                    })
                    break;
                }
                case 'termin':{
                    await Model.termins.update({
                        date_finish: req.body.termin.date_finish
                    },{
                        where:{
                            id:req.body.termin.id
                        }
                    })
                    break;
                }
                case 'detail':{
                    let weight = req.body.weight.slice(2);
                    await Model.complect_items.create({
                        complectId:req.body.compl,
                        name:req.body.name,
                        articul:req.body.article,
                        type:req.body.type,
                        sort:req.body.sort,
                        material:req.body.material,
                        status:req.body.status,
                        local:req.body.local,
                        height:req.body.height,
                        width:req.body.width,
                        weight:weight,
                        price:req.body.price,
                        amount:req.body.amount
                    })

                    break;
                }
                case 'handling':{}
                case 'montaz':{}
            }


            return res.status(201).json({message:'updateOK'});
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editComplect(req,res){
        try{
            const complect = await Model.complects.update({

            })
            return res.json({complect})
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editHandlings(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editMontaz(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editComplItem(req,res){
        try{
            await Model.complect_items.update({
                where:{
                    id:req.body.id
                }
            })
            return res.json({status:200});
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editHandlItem(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editMontazItem(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async editTermins(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }



}

module.exports = new EditController()