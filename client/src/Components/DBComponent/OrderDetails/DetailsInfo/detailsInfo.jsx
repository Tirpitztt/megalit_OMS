import c from './detailsInfo.module.css'
import ComplectsInfo from './ComplectsInfo/complectsInfo'
import HandlingsInfo from "./HandlingsInfo/handlingsInfo"
import MontazInfo from "./MontazInfo/montazInfo"


const DetailsInfo = (props)=>{

    return(<div className={c.details_section}>
        <ComplectsInfo props={props.props.complects}/>
        <HandlingsInfo props={props.props.handling}/>
        <MontazInfo props={props.props.montaz}/>
    </div>)
}

export default DetailsInfo;