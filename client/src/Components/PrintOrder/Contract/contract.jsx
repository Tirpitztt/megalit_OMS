import React from 'react';
import c from './contract.module.css';
import Requisites from "./requisites";


const Contract = (props) => {
    let maker = 'Индивидуальный Предриниматель Тихонович И.В., далее именуемый "Подрядчик",' +
        'действующий на основании свидетельства №791076359 от 1.08.2017г';
    if(props.order.maker==='megalit'){
        maker = 'Унитарное Частное Торгово-производственное предприятие "Мегалит Гран",' +
            'в лице директора Тихонович С.В. действующего на основании устава, далее ' +
            'именуемый "Подрядчик"'
    }
    return (
        <div>
            <div className={c.wrapper}>
                <p className={c.title}>ДОГОВОР № {props.order.number}/22 от {props.order.termin.date_start}</p>
                <p>{maker} с одной стороны и Гражданин(ка): <b>{props.customer.last_name}
                    {props.customer.name} {props.customer.father_name}</b> проживающий по адресу:
                    {props.customer.address} телефон {props.customer.phone} именуемый в дальнейшем "Заказчик"
                    заключили настоящий договор о нижеследующем:
                </p>
                <ol>
                    <li>ПРЕДМЕТ ДОГОВОРА <ol>
                        <li>Предметом настоящего договора является изготовление Подрядчиком по заданию Заказчика
                            памятника и выполнение иных видов работ согласно прилагаемых к настоящему договору Спецификации
                            и Смете, являющихся его неотъемлемыми частями (далее - Работа).</li>
                        <li>Срок изготовления ориентировочно: <b>{props.order.termin.date_finish}</b></li>
                        <li>Срок изготовления согласно правил бытового обслуживания населения:100 кал. дней</li>
                    </ol></li>
                    <li>ОБЯЗАННОСТИ СТОРОН <ol>
                        <li>Подрядчик обязан: <ol>
                            <li>своевременно предоставить Заказчику необходимую и достоверную информацию о предлагаемых
                            работах и услугах.</li>
                            <li>выполнить работу предусмотренную п.п.1.1 настоящего договора качественно и своевременно</li>
                        </ol></li>
                        <li>Заказчик обязан: <ol>
                            <li>при подписании настоящего договора предоставить полную и достоверную информацию,
                            необходимую Подрядчику для точного выполнения работ.</li>
                            <li>по первому требованию Подрядчика предоставлять недостающую информацию, предусмотренную
                            в п.п.2.2.1. настоящего договора.</li>
                            <li>в течении пяти календарных дней, после уведомления Подрядчиком, принять и оплатить выполненные
                            этапы работ по настоящему договору.</li>
                        </ol></li>
                    </ol></li>
                    <li>СТОИМОСТЬ РАБОТ И ПОРЯДОК РАСЧЕТОВ <ol>
                        <li>Стоимость заказа устанавливается согласно прилагаемой к настоящему договору смете,
                        являющейся неотъемлемой его частью, и составляет <b>{(props.order.calculation.total_cost*props.rate).toFixed(2)}</b> бел.руб.</li>
                        <li>Работа оплачивается Заказчиком в беларуских рублях в следующем порядке: <ol>
                            <li>путем внесения аванса в размере:<b>{(props.order.calculation.payments[0].summaBlr).toFixed(2)}</b> бел.руб.</li>
                            <li>окончательный расчет производится перед подписанием сторонами Акта приема-передачи
                            выполненных работ.</li>
                        </ol></li>
                        <li>Оплата производится Заказчиком на основании счета Подрядчика путем внесения денежных средств
                        на расчетный счет Подрядчика, либо путем внесения денежных средств в кассу Подрядчика.</li>
                        <li>Подрядчик приступает к выполнению работ по договору после получения на свой счет аванса в
                        соответствии с п.3.2. настоящего договора.</li>
                        <li>В случае изменения, на день окончательного расчета и подписания сторонами Акта приема-передачи
                        выпоненых работ, курса беларуского рубля по отношению к доллару США, установленного национальным банком РБ,
                        по сравнению с соответсвующим курсом, установленным на день заключения настоящего договора, стоимость
                        работ Подрядчик имеет право изменить пропорционально изменению курса.</li>
                        <li>Право собственности на использованные материалы и результаты работ по договору переходит к заказчику
                        после 100% оплаты и подписания Акта приема-передачи выполненных работ.</li>
                        <li>В случае выполнения Подрядчиком монтажных работ, расчет за фактически готовые изделия производится
                        до начала монтажа. Расчет за монтажные работы производится согласно п.3.2.2.</li>
                    </ol></li>
                    <li>ОСОБЫЕ УСЛОВИЯ <ol>
                        <li>Подрядчик пересматривает сроки выполнения работ в одностороннем порядке до 60 календарных дней
                            в соответствии с рабочими графиками (поставок, установок и т.д.) по пунктам 1.2.- 1.5.(сроки исполнения)
                            настоящего договора, в следующих случаях:<ol>
                            <li>если предоставленный Подрядчиком материал, не отвечает требованиям Заказчика.</li>
                            <li>невыполнение Заказчиком требований п.2.1.1, 2.2.2.,3.2 настоящего договора.</li>
                            <li>внесение дополнений и изменений в спецификацию.</li>
                            <li>в случае неблагоприятных погодных условий, препятствующих выполнению работ:дождь,снег,температура воздуха
                            выше 30 градусов по цельсию или среднесуточная температура воздуха в течении пяти дней подряд ниже 7 градусов
                            по цельсию.</li>
                        </ol></li>
                        <li>Качество выполняемой по настоящему договору работы должно соответствовать СТБ 363-2007 "Элементы надгробий.
                            Общие технические условия"</li>
                        <li>Подрядчик приступает к выполнению работ по установке элементов надгробий(памятников), оград и других ТМЦ
                        после оплаты 100% их стоимости.</li>
                        <li>Работы по установке памятника и благоустройству мест захоронения производятся по внутреннему
                        графику Подрядчика, по согласованию с Заказчиком. В случае неблагоприятных погодных условий, график
                        смещается пропорционально дням неблагоприятным для выполнения работ. С графиком выполнения работ,
                        а так же с его изменениями Заказчик может ознакомиться в офисе Подрядчика.</li>
                        <li>В случае заказа памятника с портретом, выполняемым путем гравирования на натуральном камне,
                        Заказчик предоставляет Подрядчику оригинальный фотоснимок соответствующего качества на бумажном носителе.
                        Технология нанесения портрета на поверхность камня предусматривает предварительную обработку (ретушь)
                        предоставленого фотоснимка. Заказчик имеет право самостоятельно произвести ретушь фотоизображения в
                        профессиональных фотостудиях по своему выбору за собственные средства, после чего предоставить Подрядчику
                        исправленные изображения. При предоставлении Заказчиком фотоснимков низкого качества (нечеткие, нерезкие,
                        излишне темные или светлые, выполненные на тисненной бумаге) Подрядчик не несет ответственность за
                        низкое качество нанесенного на камень изображения и претензии не принимает. Оценка качества фотографии
                        производится мастером Подрядчика в сроки действия договора.</li>
                        <li>При самовывозе готовых изделий погрузочно-разгрузочные работы производятся Заказчиком самостоятельно.
                        Отгрузка готовых изделий производится по адресу: г.Бобруйск,ул.Парковая,57/3, с вт-сб с 9-00 до 16-30.</li>
                        <li>Допускается незначительное повреждение лакокрасочного покрытия оград возникших при транспортировке и
                        погрузо-разгрузочных работ не более 10% площади.</li>
                        <li>Заказчик обязан оплатить полный объем израсходованных материалов (плитка, бордюр и т.п.) в случае
                        подрезки и отделения части материала.</li>
                        <li>В случае если выполнение работ предусмотренных договором требует выполнения иных работ не заявленных
                        Заказчиком, то в этом случае Заказчик обязан оплатить Подрядчику выполненные работы по прейскуранту цен
                        Подрядчика действующему на момент выполнения работ.</li>
                        <li>При выполнении Подрядчиком работ по благоустройству мест захоронения, в том числе укладке тротуарной
                        плитки Заказчик оплачивает Подрядчику полную стоимость привозных материалов, а так же стоимость работ по
                        их транспортировке, переноске. Стоимость этих работ согласуется с Заказчиком дополнительно.</li>
                        <li>Устанавливается следующие гарантийные сроки: на натуральный камень - 10 лет, на лакокрасочные покрытия
                        (ограды)  - гарантия не распространяется, на монтажные работы и работы по благоустройству -    лет.</li>
                        <li>Гарантийные обязательства выполняются Подрядчиком на основании представления Заказчиком настоящего
                        договора, а так же Акта приема-передачи выполненных работ.</li>
                    </ol></li>
                    <li className={c.sideB}>ДОСРОЧНОЕ РАСТОРЖЕНИЕ ДОГОВОРА <ol>
                        <li>Договор может быть расторгнут по инициативе Заказчика с возмещением Подрядчику понесенных им убытков.</li>
                        <li>Договор может быть расторгнут по инициативе Подрядчика в случае,если Заказчик один раз и более нарушил
                        условия настоящего договора с возмещением Подрядчику понесенных им убытков.</li>
                        <li>Договор может быть расторгнут согласно п.3 сметы к договору.</li>
                        <li>Договор может быть расторгнут в одностороннем порядке по инициативе Подрядчика в случае, если
                        работы по договору либо этапы работ произведенные Подрядчиком не отвечают требованиям Заказчика.</li>
                    </ol></li>
                    <li>ОТВЕТСТВЕННОСТЬ СТОРОН <ol>
                        <li>В случае нарушения сроков оплаты, предусмотренных настоящим договором, Заказчик уплачивает
                            подрядчику неустойку в размере 1% от несвоевременно оплаченной (не оплаченной) суммы за каждый
                            день просрочки.
                        </li>
                        <li>За нарушение сроков выполнения работ Подрядчик уплачивает Заказчику неустойку в размере предусмотренном
                        законом РБ "О защите прав потребителей". Сроком выполнения работ считаются сроки предусмотренные правилами
                            бытового обслуживания населения, а так же с учетом п.4.1. настоящего договора.</li>
                        <li>В случае, если Заказчик уклоняется от подписания Акта приема-передачи выполненных работ или этапов по
                        настоящему договору, уплачивает Подрядчику неустойку в размере 1% от стоимости договора за каждый день.</li>
                        <li>Подрядчик не несет ответственность за отличие деталей из природного камня от предоставленных Заказчику
                        образцов по структуре и оттенку.</li>
                    </ol></li>
                    <li>ФОРС-МАЖОР <ol>
                        <li>Ни одна сторона не будет нести ответственность за полное или частичное неисполнение
                            обязательств по настоящему договору в случае наступления в течении срока договора форс-мажорных обстоятельств:
                            наводнение, пожар, землетрясение, другие стихийные бедствия. Война или военные действия, решения органов
                            власти, управления, контроля повлекших приостановку работ. Срок исполнения обязательств по настоящему
                            договору соразмерно сдвигается на время действия обстоятельств непреодолимой силы.
                        </li>
                        <li>Любые изменения в законодательстве принятые правительством РБ либо местными исполнительными комитетами,
                        либо другими органами власти во время исполнения настоящего договора, и напрямую влияющие на частичную
                        либо полную невозможность надлежащего исполнения настоящего договора, признаются форс-мажорными обстоятельствами.
                        В этом случае стороны освобождаются от ответственности за полное либо частичное неисполнение обязательств по
                        настоящему договору. Спорные вопросы возникшие в случае обстоятельств описанных в данном пункте решаются
                        путем заключения дополнительных соглашений либо в судебном порядке согласно законодательству РБ.</li>
                    </ol></li>
                    <li>СРОКИ ДЕЙСТВИЯ ДОГОВОРА <ol>
                        <li>Действие договора начинается с момента его подписания и внесения аванса в размере не менее 50% от стоимости
                        договора. Данный договор составлен в двух экземплярах, один из которых передается Подрядчику, второй Заказчику.</li>
                        <li>В случае если срок исполнения работ установленный в п.1.2, 1.4. превышает срок, установленный правилами
                        бытового обслуживания населения, то в этом случае сроком исполнения работ считается срок установленный в
                        п.1.2., 1.4. настоящего договора.</li>
                    </ol></li>
                </ol>
                <Requisites maker={props.order.maker} customer={props.customer} />
                <div className={c.sign_box}>
                    <div className={c.sign}><p>Подрядчик</p></div>
                    <div className={c.sign}><p>Заказчик</p></div>
                </div>
                <div className={c.custom_info}><p>Информация по заказу получена в полном объеме,
                с эскизом и размерами ознакомлен и согласен. <span>_________________</span></p></div>
                <div className={c.custom_info}><p>Данной подписью удостоверяю тот факт, что полную информацию
                по природному камню, его отличиям, недостаткам, преимуществам, по
                сравнению с камнями других месторождений, получил.
                С габаритными размерами ограды, используемым материалом при
                изготовлении, условиями покраски и эксплуатации ознакомлен и согласен.
                С нормативной документацией необходимой для выполнения работ предусмотренных
                настоящим договором ознакомлен.
                С прейскурантом цен ознакомлен. <span>________________</span></p></div>
            </div>

        </div>

    );
};

export default Contract;