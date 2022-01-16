export const monumentRow = (complect,count,rate)=>{
    let cost = 0;
    complect.complect_items.forEach((item)=>{
        cost += (item.price*item.amount)*rate;
    })
    let row = <tr><td>{count}</td><td>Изготовление деталей памятника</td>
         <td>компл</td><td>B</td><td>{cost.toFixed(2)}</td><td>1</td><td>{cost.toFixed(2)}</td></tr>;
    return row;
}
export const ogradaRow = (complect,count,rate)=>{
    let cost = 0;
    complect.complect_items.forEach((item)=>{
        cost += (item.price*item.amount)*rate;
    })
    let row = <tr><td>{count}</td><td>Изготовление деталей ограждения</td>
        <td>компл</td><td>B</td><td>{cost.toFixed(2)}</td><td>1</td><td>{cost.toFixed(2)}</td></tr>;
    return row;
}