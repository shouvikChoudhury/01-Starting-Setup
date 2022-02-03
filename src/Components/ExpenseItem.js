import React from 'react'
import ExpenseDate from './ExpenseDate';
import './ExpenseItem.css';
import Card from './Card';

export default function ExpenseItem(props) {
    return (
        <Card className="expense-item">
            <ExpenseDate date={props.expdate} />

            <div className="expense-item__description">
                <h2>{props.exptitle}</h2>
                <div className="expense-item__price">${props.expamount}</div>
            </div>
        </Card>
    )
}
