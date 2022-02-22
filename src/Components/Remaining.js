import { useContext } from "react";
import { ExpenseContext } from "./Context/AppContext";

const Remaining = () => {
    const { budget, expenses } = useContext(ExpenseContext)

    const totalExpenses = expenses.reduce((total, item) => {
		return (total += item.cost);
	}, 0);
    
    const alertType = totalExpenses > budget ? 'alert-denger' : 'alert-success'

	return (
		<div className={`alert ${alertType}`} >
			<span>Remaining: ${budget - totalExpenses}</span>
		</div>
	);
};

export default Remaining;