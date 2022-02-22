export default  (state,action) => {
    switch(action.type){
        case 'ADD_TRANSACTION':
                return {
                    ...state,
                    expenses: [...state.expenses,action.payLoad],
                }
        case 'DELETE_TRANSATION':
                return {
                    ...state,
                    expenses: state.expenses.filter(item => item.id !== action.payLoad)
                }
        case 'SET_BUDGET': 
                return {
                    ...state, 
                    budget: action.payLoad 
                }
        default : 
            return state;
    }

}