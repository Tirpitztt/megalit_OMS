export const buildFloat = (num)=>{
    num = num.toString();
    if(num===''){
        return 0;
    }
    return parseFloat(num.replace(/,/,'.'));
}