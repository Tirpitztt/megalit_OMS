import c from "../ComplectsInfo/complectsInfo.module.css";


const MontazInfo = (props)=>{

    let montaz = props.props;
    let table = <div>no table</div>;
    if(montaz!==null){
        let items = montaz.montaz_items.map((item,j)=>{
            return <tr key={j}>
                <td>{item.category}</td>
                <td>{item.name}</td>
                <td>{item.type}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
            </tr>
        })
        table = <table className={c.table_st}>
            <thead>
            <tr><td>Доставка: {montaz.delivery+'км'}</td></tr>
            <tr><td>Размер участка: {montaz.width+'x'+montaz.height+'x'+montaz.weight}</td></tr>
            <tr>
                <th>категория</th>
                <th>наименование</th>
                <th>тип</th>
                <th>кол-во</th>
                <th>цена</th>
            </tr>
            </thead>
            <tbody>
            {items}
            </tbody>
        </table>;
    }



    return(
        <div>
            <p className={c.title}>Монтажные работы</p>
            {table}
        </div>
    )
}

export default MontazInfo;