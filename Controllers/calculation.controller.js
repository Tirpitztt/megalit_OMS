const Model = require('../models')

class CalculationController {
    async setCalculation(req,res){
        try{
            const order = await Model.orders.findOne({
                where:{
                    id:req.params.orderId
                },
                include:[
                    {
                        model:Model.complects,
                        include:Model.complect_items
                    },
                    {
                        model:Model.handlings,
                        include:Model.handling_items
                    },
                    {
                        model:Model.montaz,
                        include:Model.montaz_items
                    }
                ]
            })
            if(!order){
                return res.json({message:'order not found'})
            }
            let totalCost = 0;
            let pay = 0;
            const complects = order.complects;
            const handlings = order.handlings;
            const montaz = order.montazs;
            const sumTotal = (array)=>{
                array.complect_items.forEach(item=>{
                    totalCost+=item.price*item.amount;
                })
            }
            function arrLength(array){
                if(array!=undefined&&array.length){
                    for(let i=0;i<array.length;i++){
                        sumTotal(array[i]);
                    }
                }
            }
            arrLength(complects);
            if(handlings!=undefined&&handlings.length){

                for(let i =0;i<handlings.length;i++){
                    if(handlings[i].hydrophob){
                        totalCost+=30;
                    }
                    for(let j = 0;j<handlings[i].handling_items.length;j++){
                        totalCost += handlings[i].handling_items[j].price *
                            handlings[i].handling_items[j].amount;
                    }
                }
            }
            if(montaz!=undefined && montaz.length ){

                for(let i =0;i<montaz.length;i++){
                    if(montaz[i].delivery>0){
                        totalCost+=montaz[i].delivery * 1.5;
                    }
                    for(let j = 0;j<montaz[i].montaz_items.length;j++){
                        totalCost += montaz[i].montaz_items[j].price *
                            montaz[i].montaz_items[j].amount;
                    }
                }
            }
            let [calculate,created] = await Model.calculations.findOrCreate({
                where:{
                 orderId:order.id
                 },defaults:{
                 orderId:order.id,
                 total_cost:totalCost}
                 })

            if(!created){
                const payments = await Model.payments.findAll({
                    where:{
                        calculationId:calculate.id
                    }
                });
                if(payments){

                    for(let i =0;i<payments.length;i++) {
                        pay += payments[i].summa;
                    }
                }
                await Model.calculations.update({
                    total_cost:totalCost,
                    balance:totalCost-pay
                },{
                    where:{
                        orderId:order.id
                    }
                })
            }

            return res.json({order})
        }catch (e) {

        }
    }
    async setPayment(req,res){
        try{
            let order = await Model.orders.findOne({
                where:{
                    number:req.body.number
                }
            })
            if(order){
                let calc = await Model.calculations.findOne({
                    where:{
                        orderId:order.id
                    }
                })
                if(calc){
                    let pay = await Model.payments.create({
                        calculationId:calc.id,
                        summa:req.body.summa,
                        summaBlr:req.body.summaBlr,
                        pay_date:req.body.date,
                        employerId:req.body.employer,
                        employerName:req.body.employerName,
                        cash:req.body.cash
                    })
                    if(pay){
                        let payments = await Model.payments.findAll({
                            where:{
                                calculationId:calc.id
                            }
                        })
                        if(payments){
                            let avans = 0;
                            payments.forEach((item)=>{
                                avans += item.summa;
                            })
                            let balance = calc.total_cost-avans;
                            let upd =  await Model.calculations.update({
                                balance:balance
                            },{
                                where:{
                                    id:calc.id
                                }
                            })
                            if(upd){
                                return res.status(200).json({message:' add payment ok'})
                            }
                        }
                    }
                }
            }
            return res.status(501).json({message:'order not found'})

        }catch (e) {
            return res.status(500).json({message:'add payment error '+ e.message});
        }
    }
    async priceCreate(req,res){
        try{
            let material = await Model.materials_price.findOne({
                where:{
                    name:req.body.material
                }
            })
            let price = 0;
            if(material){
                price = ((req.body.height*req.body.width)/10000)*material[req.body.weight];
            }
            return res.status(201).json({price})
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async createTotalCost(req,res){
        try{
            let totalCost = 0;
            req.body.complects.forEach((complect)=>{
                complect.details.forEach((item)=>{
                    totalCost += (item.price*item.amount);
                })
            })
            if(req.body.handlings.hydrophob){
                totalCost += 20;
            }
            req.body.handlings.details.forEach((detail)=>{
                totalCost += (detail.price*detail.amount);
            })
            if(req.body.montaz.delivery){
                totalCost += (req.body.montaz.delivery*1.2);
            }
            req.body.montaz.details.forEach((detail)=>{
                totalCost += (detail.price*detail.amount);
            })
            if(req.body.calculation.discount){
                totalCost += req.body.calculation.discount;
            }
            return res.json({totalCost});
        }catch (e) {
            return res.status(500).json({message:'something wrong...'+ e.message});
        }
    }
}

module.exports = new CalculationController()