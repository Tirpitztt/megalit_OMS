export const nameSort = (array,substr, field)=>{
    let result = [];
    array.forEach(item=>{
        if(item[field].toLowerCase().includes(substr.toLowerCase())){
            result.push(item);
        }
    })
    return result;
}