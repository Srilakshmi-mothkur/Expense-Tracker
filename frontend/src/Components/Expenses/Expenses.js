import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import ExpenseForm from './ExpenseForm';
import IncomeItem from '../incomeitem/Incomeitem';
import { rupee } from '../../utils/icons';

function Expenses(){
    const {addExpense, expenses, getExpense, deleteExpense, totalExpenses} = useGlobalContext()

    useEffect(() => {
        getExpense()
    },[])

    return(
        <ExpenseStyled>
            <InnerLayout>
                <h1>Expenses</h1>
                <h2 className='total-income'>Total Expense : <span> {rupee} {totalExpenses()} </span> </h2>
                <div className='income-content'>
                    <div className='form-container'>
                        <ExpenseForm />
                    </div>
                    <div className='incomes'>
                        {expenses.map((income) => {
                            const{_id, title, amount, date, category, description, type} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount} 
                                date={date}
                                type={type}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteExpense}
                            />
                        })}
                        
                    </div>
                </div>
            </InnerLayout>
        </ExpenseStyled>
    )
}

const ExpenseStyled = styled.div`
    display: flex;
    height: 750px;
    overflow-y: scroll;

    .total-income{
        display: flex;
        justify-content: center;
        align-items: center;
        background: #FCF6F9;
        border: 2px solid #FFFFFF;
        box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
        border-radius: 20px;
        padding: .5rem;
        margin: 1rem 0;
        font-size: 1.5 rem;
        gap: .5rem;
        span{
            font-size: 1.7rem;
            font-weight: 800;
            color: var(--color-green);
        }

    }
    .income-content{
        display: flex;
        gap: 1rem; 
        .incomes{
            flex: 1;
        }
    }

`;

export default Expenses