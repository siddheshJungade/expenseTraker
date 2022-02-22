
import Budget from "./Components/Budget";
import Remaining from "./Components/Remaining";
import ExpenseTotal from "./Components/ExpenseTotal";
import ExpenseList from "./Components/ExpencseComponent/ExpenseList";
import AddExpensesForm from "./Components/AddExpensesForm";
import AppContext from "./Components/Context/AppContext";

function App() {
  return(
      <AppContext>
        <div className="container text-center mt-3">
        <button type="button" className="btn btn-link">Login | Sign-up</button>
        </div>
        <div className='container my-5'>
          <h1 className='mt-3'>My Budget Planner</h1>
          <div className='row mt-3'>
            <div className='col-sm'>
              <Budget />
            </div>
            <div className='col-sm'>
              <Remaining />
            </div>
            <div className='col-sm'>
              <ExpenseTotal />
            </div>
          </div>
          <div className='row mt-3'>
            <div className="col-sm">
              <ExpenseList />
            </div>
          </div>
          <h3 className='mt-3'>Add Expense</h3>
          <div className='row mt-3'>
            <div className='col-sm'>
              <AddExpensesForm />
            </div>
          </div>
        </div>
      </AppContext>
  );
}

export default App;
