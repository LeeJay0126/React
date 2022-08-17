import ExpenseItem from './ExpenseItem';

function Expenses(props) {

    return (
        <div>
            <ExpenseItem title={props.data.title} amount={props.data.amount} date={props.data.date} ></ExpenseItem>
        </div>
    );

}

export default Expenses;