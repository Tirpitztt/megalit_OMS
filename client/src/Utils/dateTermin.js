import {format} from "date-fns";

export const setDateTermin = ()=>{
    let date = new Date();
    date.setDate(date.getDate()+90);
    let terminDate = format(date,'yyyy-MM-dd');
    //let terminDate = format(date,'dd-MM-yyyy');
    return terminDate;
}

export const setToday = ()=>{
    return format(new Date(),'yyyy-MM-dd');
}