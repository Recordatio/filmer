import React from 'react';

export default function FilmList(props) {

    return (
        <li className="list-group-item">
            { props.item.id + ". " }
            { props.item.title }

            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.deleteItem(props.item.id)} }>X</button>
            <button className="btn btn-sm btn-danger float-end" onClick={() => {props.editItem(props.item.id)} }>edit</button>
        </li>
    )
}
