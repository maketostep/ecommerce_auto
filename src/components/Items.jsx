import React, {Component} from 'react'
import Item from './Item'

export function Items(props) {
    return (
        <main>
            {props.items.map((el) => (
                <Item key={el.id} item={el}/>
            ))}
        </main>
    )
}


