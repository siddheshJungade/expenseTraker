import { useContext, useState } from "react";
import { ExpenseContext } from "./Context/AppContext";
import { v4 as uuidv4 } from 'uuid';



const AddExpensesForm = () => {
    const [name, setName] = useState('');
    const [cost, setCost] = useState(0);
    const { addExpenses } = useContext(ExpenseContext)
    const onSubmit = (e) => {
        e.preventDefault()
        addExpenses({id: uuidv4() ,name,cost:parseInt(cost)})
    }


    return (
        <form onSubmit={onSubmit}>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Name</label>
                <input type="text" className="form-control" id="exampleInputPassword1" onChange={e => setName(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">Cost</label>
                <input type="number" className="form-control" id="exampleInputPassword1" onChange={e => setCost(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary">Add</button>
        </form>
    )
}

export default AddExpensesForm;