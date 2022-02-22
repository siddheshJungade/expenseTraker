
import { useContext } from 'react';
import { ExpenseContext } from '../Context/AppContext';
import ExpenseItem from './ExpenseItem'


const ExpenseList = () => {
    const{ expenses } = useContext(ExpenseContext);
    return (
        <ul className="list-group">
            {expenses.map(expense => {
                return <ExpenseItem key={expense.id} id={expense.id} name={expense.name} cost={expense.cost}/>
            })}
        </ul>

    );
} 

export default ExpenseList;