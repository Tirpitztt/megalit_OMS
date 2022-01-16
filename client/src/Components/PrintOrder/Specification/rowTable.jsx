import React from 'react';

const RowTable = (props) => {
    return (
        <tr>
            <td>{props.state.name}</td>
            <td>{props.state.material}</td>
            <td>{props.state.height}x{props.state.width}x{props.state.weight}</td>
            <td>{props.state.amount}</td>
            <td>{props.state.sort}</td>
        </tr>
    );
};

export default RowTable;