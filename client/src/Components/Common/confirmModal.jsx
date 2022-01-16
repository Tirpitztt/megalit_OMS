import c from './modal.module.css'

const ConfirmModal = (props)=>{
    let isActive = props.active;
    const sendOK = ()=>{
        props.conf(true);
    }
    const close = ()=>{
        props.conf(false);
    }
    return (
        <div className={isActive?c.active:c.modalwr}>
            <div className={c.content+' '+c.confirm}>
                <p>Вы точно хотите изменить данные заказчика?</p>
                <div className={c.button_box}>
                    <div className={c.button} onClick={close}><p>Нет, не сейчас</p></div>
                    <div className={c.button} onClick={sendOK}><p>Хочу</p></div>
                </div>
            </div>

        </div>
    )
}

export default ConfirmModal;