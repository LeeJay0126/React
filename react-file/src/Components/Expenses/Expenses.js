import ExpenseItem from './ExpenseItem';
import ExpensesFilter from '../ExpenseFilter/ExpenseFilter';
import './Expenses.css';
import Card from './../UI/Card';
import { useState } from 'react';

const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2020');

    const filterHandler = filterYear => {
        setFilteredYear(filterYear);
        for(let i = 0; i < props.data.length; i++){
            if(!(props.data[i].date.getFullYear() === filteredYear)){
                props.data.splice(i,1);
                i -= 1;
            }
        }
    }

    return (
        <div>
            <Card className='expenses'>
                <ExpensesFilter selected={filteredYear}
                    onfilterHandler={filterHandler}
                />
                {props.data.map((expense) => (
                    <ExpenseItem
                        key = {expense.id}
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))};
            </Card>
        </div>
    );

}

export default Expenses;