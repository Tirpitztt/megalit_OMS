import c from "../ComplectsInfo/complectsInfo.module.css";


const HandlingsInfo = (props)=>{

    let handling = props.props;

    let table = <div>no table</div>
    if(handling!==null){
        let items = handling.handling_items.map((item,j)=>{
            return <tr key={j}>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>{item.size}</td>
                <td>{item.amount}</td>
                <td>{item.price}</td>
            </tr>
        })
        table = <table className={c.table_st}>
            <thead>
            <tr>
                <th>наименование</th>
                <th>категория</th>
                <th>размер</th>
                <th>кол-во</th>
                <th>цена</th>
            </tr>
            </thead>
            <tbody>
            {items}
            <tr><td>Гидрофоб: {handling.hydrophob?'есть':'нет'}</td></tr>
            </tbody>
        </table>;
    }

    return(
        <div>
            <p className={c.title}>Обработка</p>
            {table}
        </div>
    )
}

export default HandlingsInfo;