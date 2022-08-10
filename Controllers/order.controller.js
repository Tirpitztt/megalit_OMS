const Model = require('../models')


class OrderController {

    async createNewOrder(req,res){
        try{
            //console.log('req:',req.body);
            let candidate;
            try{
                let [candi,created] = await Model.customers.findOrCreate({
                    where:{
                        last_name:req.body.customer.findingCustomer.last_name,
                        name:req.body.customer.findingCustomer.name
                    },
                    defaults:{
                        last_name:req.body.customer.findingCustomer.last_name,
                        name:req.body.customer.findingCustomer.name,
                        father_name:req.body.customer.findingCustomer.father_name,
                        address:req.body.customer.findingCustomer.address,
                        phone:req.body.customer.findingCustomer.phone,
                        rank:req.body.customer.findingCustomer.rank
                    }
                })
                candidate = candi;
            }catch (e) {
                return res.status(501).json({message:'error create customer',error:e.message})
            }

            let montazSize = [0,0,0];
            const orders = await Model.orders.findAll();
            const lastOrder = orders.slice(-1)[0]||0;
            const order = await Model.orders.create({
                customerId:candidate.id,
                employerId:req.body.orderOption.employer.id,
                employerName:req.body.orderOption.employer.name,
                number:lastOrder.number+1,
                maker:req.body.orderOption.maker,
                status:req.body.orderOption.status
            })
            await Model.termins.create({
                orderId:order.id,
                date_start:req.body.orderOption.today,
                date_finish:req.body.orderOption.termin
            })
            for(const item of req.body.newOrder.complects){
                let complect = await Model.complects.create({
                    orderId:order.id,
                    summComplect:item.summCompl,
                    type:item.type
                });
                for(const detal of item.details){
                    await Model.complect_items.create({
                        complectId:complect.id,
                        name:detal.name,
                        articul:detal.articul,
                        type:detal.type,
                        sort:detal.sort,
                        material:detal.material,
                        status:detal.status,
                        local:detal.local,
                        height:detal.height,
                        width:detal.width,
                        weight:detal.weight.slice(2),
                        price:detal.price,
                        amount:detal.amount
                    });
                }
            }
            let handlings = await Model.handlings.create({
                orderId:order.id,
                hydrophob:req.body.newOrder.handlings.hydrophob,
                sketch_path:req.body.newOrder.handlings.sketchPath,
                text_grav:req.body.newOrder.handlings.text_gravi
            })
            if(req.body.newOrder.handlings.details.length){
                for(const detal of req.body.newOrder.handlings.details){
                    await Model.handling_items.create({
                        handlingId:handlings.id,
                        name:detal.name,
                        category:detal.category,
                        size:detal.size,
                        price:detal.price,
                        amount:detal.amount
                    })
                }
            }
            if(req.body.newOrder.montaz.size){
                montazSize = req.body.newOrder.montaz.size.split('x');
            }
            let montaz = await Model.montaz.create({
                orderId:order.id,
                height:Number(montazSize[2]),
                width:Number(montazSize[0]),
                weight:Number(montazSize[1]),
                delivery:req.body.newOrder.montaz.delivery,
                delivery_point:req.body.newOrder.montaz.deliveryPoint
            })
            if(req.body.newOrder.montaz.details.length){
                for(const detal of req.body.newOrder.montaz.details){
                    await Model.montaz_items.create({
                        montazId:montaz.id,
                        name:detal.name,
                        category:detal.category,
                        type:detal.type,
                        price:detal.price,
                        amount:detal.amount
                    })
                }
            }
            let calculation = await Model.calculations.create({
                orderId:order.id,
                total_cost:req.body.newOrder.calculation.new_total_cost,
                balance:req.body.newOrder.calculation.new_total_cost,
                discount:req.body.newOrder.calculation.discount,
                rate:req.body.materials.mats[0].USD
            })
            if(req.body.newOrder.calculation.payments.length){
                let payment = 0;
                for(const pay of req.body.newOrder.calculation.payments){
                    await Model.payments.create({
                        calculationId:calculation.id,
                        summa:pay.payment,
                        summaBlr:pay.paymentBlr,
                        pay_date:pay.pay_date,
                        employerId:pay.employer.id,
                        employerName:pay.employer.name,
                        cash:pay.cash
                    })
                    payment += Number(pay.payment);
                }
                if(payment){
                    await Model.calculations.update({
                        balance:calculation.total_cost-payment
                    },{
                        where:{
                            id:calculation.id
                        }
                    })
                }
            }
            // console.log(candidate,created);
            return res.status(201).json(order);
        }catch (e) {
            return res.status(500).json({message:'new order not build...'+ e.message});
        }
    }


    async createHandlings(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async createMontaz(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }


    async createHandleItem(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async createMontazItem(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }
    async createTermins(req,res){
        try{

        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }

    async getOrderOfNum(req,res){
        try{
            const order = await Model.orders.findOne({
                where:{
                    number:req.params['number']
                },include:[{
                    model:Model.termins
                },{
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
                }]
            })
            if (!order){
                return res.json({message:'not found order'});
            }
            const customer = await Model.customers.findOne({
                where:{
                    id:order.customerId
                }
            })
            const material = await Model.materials_price.findAll();
            let resultObj = {
                customer:customer,
                order:order,
                material:material
            }
            return res.json(resultObj)
        }catch (e) {
            return res.status(500).json({message:'something huinia...'+ e.message});
        }
    }


}

module.exports = new OrderController()