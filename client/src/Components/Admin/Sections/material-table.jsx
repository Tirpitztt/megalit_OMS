import React from 'react';
import c from './../admin.module.css';

const MaterialTable = ({row}) => {

    let rowTable = 'nodata';

    return (
        <table className={c.table}>
            <thead>
            <tr><th>id</th><th>name</th><th>USD</th>
                <th>EUR</th><th>RUR</th><th>BLR</th></tr>
            </thead>
            <tbody>
            {row}
            </tbody>
        </table>
    );
};

export default MaterialTable;