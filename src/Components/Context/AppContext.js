
import React, { useReducer } from "react";
import AppReducer from './AppReducer';

const initialState = {
    budget: 2000,
    expenses: [
    ]
}

export const ExpenseContext = React.createContext();


const AppContext = (props) => {
    const [state, dispatch] = useReducer(AppReducer, initialState)
    const deleteTransaction = (id) => {
        dispatch({
            type: 'DELETE_TRANSATION',
            payLoad: id
        })
    }

    const addExpenses = (transation) => {
        dispatch({
            payLoad: transation,
            type: 'ADD_TRANSACTION'
        })
    }

    const updateBudget = (value) => {
        dispatch({
			type: 'SET_BUDGET',
			payLoad: value,
		});
    }
    return (
        <ExpenseContext.Provider value={{ ...state, addExpenses, deleteTransaction ,updateBudget}}>
            {props.children}
        </ExpenseContext.Provider>
    )
}


export default AppContext;


