import * as axios from 'axios'


const instance = axios.create({

})

export const ordersAPI = {
    getOnlyCustomers(){
        return instance.get('/customer/getOnlyCustomers').then(
            response=>{
                return response.data
            }
        )
    },
    getCustomerById(id){
        return instance.get('/customer/getCustomerById/'+id).then(
            response=>{
                return response.data
            }
        )
    },
    getOrders(){
        return instance.get('/customer/getAll').then(
            response=>{
                return response.data
            }
        )
    },
    getOrder(number){
      return instance.get('/order/get_order/'+number).then(
          response=>{
              return response.data
          }
      )
    },
    changeOrder(body){
        return instance.post('/order/editOrder',body).then(
            response=>{
                return response.data
            }
        )
    },
    orderCreate(body){
        return instance.post('/order/newOrder',body).then(
            response=>{
                return response
            }
        ).catch(err=>{
            if(err.response){
                return {status:'NOK'}
            }
            return err;
        })
    },
    deleteOrder(num){
        return instance.get('/order/delOrder/'+num).then(
            response=>{
                return response.data
            }
        )
    }
}
export const createOrderAPI={
    createComplect(body){
        return instance.post('/order/create_complect',body).then(
            response=>{
                return response.data
            }
        )
    }
}
export const calculationAPI={
    priceCreate(detail){
        return instance.post('/calc/price_create',detail).then(
            response=>{
                return response.data
            }
        )
    },
    createCalculation(orderId){
        return instance.get('/calc/createCalc/'+orderId).then(
            response=>{
                return response.data
            }
        )
    },
    createTotalCost(body){
        return instance.post('/calc/create_cost',body).then(
            response=>{
                return response.data
            }
        )
    },
    setPayment(body){
        return instance.post('/calc/set-payment',body).then(
            response=>{
                return response.data
            }
        )
    }
}
export const supportAPI={
    getMaterial(){
        return instance.get('/support/getMaterial').then(
            response=>{
                return response.data
            }
        )
    },
    getMaterials(){
        return instance.get('/support/getMaterials').then(
            response=>{
                return response.data
            }
        )
    },
    addMaterial(body){
        return instance.post('/support/addMaterials',body).then(
            response=>{
                return response.data
            }
        )
    },
    updateMaterial(body){
        return instance.post('/support/updateMaterials',body).then(
            response=>{
                return response.data
            }
        )
    },
    getContures(){
        return instance.get('/support/contures').then(
                response=>{
                    return response.data
                })
    },
    getConturesEntry(body){
        return instance.post('/support/contures',body).then(
            response=>{
                return response.data
            })
    }


}
export const usersAPI = {
    registrationUser(body){
        return instance.post('/auth/registration',body).then(
            response=>{
                return response.data
            }
        )
    },
    getAllUsers(){
        return instance.get('/auth/allUsers').then(
            response=>{
                return response.data
            }
        )
    }
}