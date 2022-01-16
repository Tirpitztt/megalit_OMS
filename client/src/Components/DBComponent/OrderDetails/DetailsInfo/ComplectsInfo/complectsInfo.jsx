import c from './complectsInfo.module.css'

const ComplectsInfo = (props)=>{
    let complects = props.props;

    let table = complects.map((item,i)=>{
        let details = item.complect_items.map((detal,j)=>{
            return <tr key={j}>
                <td>{detal.name}</td>
                <td>{detal.articul}</td>
                <td>{detal.material}</td>
                <td>{detal.height}x{detal.width}x{detal.weight}</td>
                <td>{detal.amount}</td>
                <td>{detal.price}</td>
                <td>{detal.status}</td>
                <td>{detal.sort}</td>
                <td>{detal.local}</td>
                <td>{detal.type}</td>
            </tr>
        })
        return <table key={i} className={c.table_st}>
            <caption>{item.type}</caption>
            <thead>
            <tr>
                <th>наименование</th>
                <th>артикул</th>
                <th>материал</th>
                <th>размер</th>
                <th>кол-во</th>
                <th>цена</th>
                <th>статус</th>
                <th>сорт</th>
                <th>место</th>
                <th>тип</th>
            </tr>
            </thead>
            <tbody>
            {details}
            </tbody>
            </table>
    })

    return(
        <div>
            <p className={c.title}>Комплектация</p>
            {table}
        </div>
    )
}

export default ComplectsInfo;