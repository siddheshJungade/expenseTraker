import { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { ExpenseContext } from '../Context/AppContext';

const ExpenseItem = (props) => {
    const { deleteTransaction } = useContext(ExpenseContext)

    const onDelete = () => {
        deleteTransaction(props.id)
    }

    return (
        <li className="list-group-item d-flex justify-content-between align-items-start">
            <div className="ms-2 me-auto">
                <div className="fw-bold">{props.name}</div>
            </div>
            <span className="badge bg-primary rounded-pill">${props.cost}</span>
            <TiDelete size='1.5em' className='mx-3' onClick={onDelete}></TiDelete>
        </li>
    )
}

export default ExpenseItem;