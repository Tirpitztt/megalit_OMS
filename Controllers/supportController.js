const Model = require('../models')

class SupportController {
    async getMaterial(req,res){
        try{
            const materials = await Model.materials_price.findAll();
            return res.json(materials);
        }catch (e) {
            return res.status(500).json({message:'something problem...'+ e.message});
        }
    }
    async getMaterials(req,res){
        let data = {
                mats: [],
                mat: []
            };

        try{
            const material = await Model.materials_price.findAll();
            if(material){
                data.mat = material;
            }
            const mater = await Model.materials.findAll();
            if(mater){
                data.mats = mater;
            }

            return res.json(data);
        }catch (e) {
            return res.status(500).json({message:'materials get error '+ e.message});
        }
    }
    async addMaterials(req,res){
        try{
            await Model.materials.create({
               name:req.body.name,
               USD:req.body.USD,
               EUR:req.body.EUR,
               RUR:req.body.RUR,
               BLR:req.body.BLR
            })
            return res.status(200).json({message:'good job'});
        }catch (e) {
            return res.status(500).json({message:'materials add error '+ e.message});
        }
    }
    async updateMaterials(req,res){
        try{
            await Model.materials.update({
                [req.body.field]:req.body.value
            },{
                where:{
                    id:req.body.id,
                }
            })
            return res.status(200).json({message:'good job'});
        }catch (e) {
            return res.status(500).json({message:'materials add error '+ e.message});
        }
    }
}

module.exports = new SupportController();