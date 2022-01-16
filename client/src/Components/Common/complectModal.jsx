import c from './modal.module.css'
import {useForm} from "react-hook-form";

const ComplectModal =(props)=>{
    let isActive = props.active;
    const {
        register,
        handleSubmit,
        formState:{errors},
        watch,
        reset
    } = useForm();

    const closeModal=()=>{
        reset();
        props.setActive(false);
    }
    const onSubmit=(body)=>{
        body.orderId = props.orderId;
        props.createComplect(body);
        props.getState(props.number);
        closeModal();
    }
    return(
        <div className={isActive?c.active:c.modalwr}>
            <div className={c.content}>
                <div className={c.close} onClick={closeModal}>X</div>
                <p>Создать комплект</p>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className={c.select_block}>
                        <label></label>
                        <select {...register('typeComplect')}>
                            <option value="monument" selected>Памятник</option>
                            <option value="ograda">Ограда</option>
                            <option value="maf">Бетонные изд</option>
                            <option value="shop">Магазин</option>
                        </select>
                    </div>
                    <input type="submit"/>
                </form>
            </div>
        </div>
    )
}

export default ComplectModal;