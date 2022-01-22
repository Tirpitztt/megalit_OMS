

export const setPrice = (data,material,func)=>{
    if(data!==undefined&&data.length){
        let height = data[1].height||0;
        let width = data[2].width||0;
        let weight = data[3].weight;
        let mat = data[0].material;
        let price2m = 0;
        material.map((item)=>{
            if(item.name==mat){
                for(let field in item){
                    if(field==weight){
                        price2m=item[field];
                    }
                }
            }

        })

        if(height==undefined){
            height=0;
        }else if(width==undefined){
            width=0;
        }
        let result = ((height*width)*price2m)/10000;
        func(result);
    }

}
export const setNameDetailList = (type,func)=>{
    let nameList;
    switch (type){
        case 'памятник':{
            nameList = [
                <option selected>выбери название</option>,
                <option value='стела'>стела</option>,
                <option value='подставка'>подставка</option>,
                <option value='цветник'>цветник</option>,
                <option value='капля'>капля</option>,
                <option value='площадка'>площадка</option>,
                <option value='доп деталь'>доп деталь</option>]
            break;
        }
        case 'ограда':{
            nameList = [
                <option selected>выбери название</option>,
                <option value='перемычка'>перемычка</option>,
                <option value='столбик'>столбик</option>,
                <option value='доп деталь'>доп деталь</option>]
            break;
        }
        case 'магазин':{
            nameList = [
                <option selected>выбери название</option>,
                <option value='ваза'>ваза</option>,
                <option value='щебень'>щебень</option>,
                <option value='лампада'>лампада</option>,
                <option value='крестик'>крестик</option>,
                <option value='трава'>трава</option>,
                <option value='лавка'>лавка</option>,
                <option value='стол'>стол</option>]
            break;
        }
        default:{
            nameList = [<option>non variable</option>]
        }
    }
    func(nameList);
}
export const exchangeBlr = (blr,currency)=>{
    if(currency===0){
        throw new Error('error: currency = 0');
        return 1;
    }
    return (blr/currency).toFixed(2);
}