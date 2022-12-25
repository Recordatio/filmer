import React, { useState, useRef } from 'react';
import Film from './Film';

export default function FilmList() {
    const [films, setFilms] = useState([{
        id: 1,
        title: "First Item"
    }]);

    const inputRef = useRef();

    const [editFilm, setEditFilm] = useState({
        id: null,
        title: ''
    });

    function addItem(event) {
        if (event.keyCode === 13) {
            const newId = films.length > 0 ? films[films.length -1].id + 1 : 1;

            setFilms([...films, {
                id: newId,
                title: inputRef.current.value
            }]);

            inputRef.current.value = "";
        }

    }

    function deleteItem(id) {
        setFilms(films.filter((item) => item.id !== id));
    }

    function editItem(id) {
        setFilms(films.filter((item) => item.id !== id));
        const selectedItem = films.find(item => item.id === id);
        //console.log(selectedItem);
        //console.log(selectedItem.title)
        inputRef.current.value = selectedItem.title;
    }

    return (
        <div style={{cursor:'pointer'}}>
            <input className="form-control" placeholder="Add new movie here..." ref={inputRef} onKeyUp={addItem}/>
            <ul className='list-group'>
                { films.map(film => <Film key={film.id} item={film} deleteItem={deleteItem} editItem={editItem}/>) }
            </ul>
        </div>

    )
}
