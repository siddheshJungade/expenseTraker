import { useContext, useState } from "react";
import { ExpenseContext } from "./Context/AppContext";
import EditBudget from "./EditBudget";
import ViewBudget from "./ViewBudget";


const Budget = () => {
    const { budget } = useContext(ExpenseContext)
    const [isEditing,setIsEditing] = useState(false)
    const {updateBudget} = useContext(ExpenseContext)
	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
        setIsEditing(false);
        updateBudget(value);
	};

	return (
		<div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<EditBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				// For part 1 render component inline rather than create a seperate one
				<ViewBudget handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budget;