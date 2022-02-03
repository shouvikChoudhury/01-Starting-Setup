import React from 'react'
import ExpenseItem from "./ExpenseItem";
import './Expenses.css'
import Card from './Card';

export default function Expenses(props) {

    return (
        <Card className='expenses'>
            <ExpenseItem
                expdate={props.items[0].date}
                exptitle={props.items[0].title}
                expamount={props.items[0].amount} />
            <ExpenseItem
                expdate={props.items[1].date}
                exptitle={props.items[1].title}
                expamount={props.items[1].amount} />
            <ExpenseItem
                expdate={props.items[2].date}
                exptitle={props.items[2].title}
                expamount={props.items[2].amount} />
        </Card>
    )
}
