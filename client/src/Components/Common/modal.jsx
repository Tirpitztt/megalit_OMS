import c from './modal.module.css'

const Modal = (props)=>{

    let isActive = props.modal.active;
    let payments = props.payment.map((pay,i)=>{
        return <tr key={i}><td>{pay.pay_date}</td><td>{pay.summaBlr}</td>
            <td>{pay.employerName}</td><td>{pay.cash?'нал':'безнал'}</td></tr>
    })
    const closeModal = ()=>{
        props.active(false);
    }
    return(
        <div className={isActive?c.active:c.modalwr}>
            <div className={c.content}>
                <div className={c.close} onClick={closeModal}>X</div>
                <div><p>Платежи</p></div>
                <table>
                    <thead>
                    <tr><th>дата</th><th>сумма</th><th>сотрудник</th><th>нал</th></tr>
                    </thead>
                    <tbody>
                    {payments}
                    </tbody>
                </table>

            </div>

        </div>
    )
}

export default Modal;