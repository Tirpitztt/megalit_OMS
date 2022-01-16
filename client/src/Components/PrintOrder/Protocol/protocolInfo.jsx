import React from 'react';

const ProtocolInfo = () => {
    return (
        <div>
           <ol>
               <li>Стоимость заказа может измениться, исходя из фактического объема работ
               и расхода материала, указанных в пунктах настоящего протокола.</li>
               <li>Стоимость установки и фундамента указана при условии подъезда к захоронению в
               пределах 10 метров, свыше 10 метров поднос оплачивается отдельно (1м - 1руб)</li>
               <li>Стоимость в протоколе согласования является ориентировочной и может быть
               изменена Подрядчиком в одностороннем порядке, в случае несогласия с изменением стоимости
               Заказчик в праве отказаться от продолжения исполнения договора. В этом случае
               договор считается расторгнутым и Заказчику возвращается внесенный аванс за вычетом
               реально выполненного объема работ.</li>
               <li>В стоимость работ по благоустройству мест захоронения не включена стоимость
               привозных материалов(песка и т.п.)</li>
               <li>Протокол составлен в двух экземплярах и является неотъемлемой частью договора.</li>
           </ol>
           <p><b>*Категория В</b>(изготавливается поточным, серийным методом) по действующему
           прейскуранту Подрядчика</p>
           <p><b>Категория А</b> - VIP (изготавливается с точной калибровкой по индивидуальному
               производственному процессу) по действующему прейскуранту +30%</p>
        </div>
    );
};

export default ProtocolInfo;