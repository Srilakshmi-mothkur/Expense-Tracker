import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { InnerLayout } from '../../styles/Layouts';
import { useGlobalContext } from '../../context/globalContext';
import Form from '../Form/Form';
import IncomeItem from '../incomeitem/Incomeitem';
import { rupee } from '../../utils/icons';

function Income(){
    const {addIncome, incomes, getIncomes, deleteIncome, totalIncome} = useGlobalContext()

    useEffect(() => {
        getIncomes()
    },[incomes])

    return(
        <IncomeStyled>
            <InnerLayout>
                <h1>Incomes</h1>
                <h2 className='total-income'>Total Income : <span> {rupee} {totalIncome()} </span> </h2>
                <div className='income-content'>
                    <div className='form-container'>
                        <Form />
                    </div>
                    <div className='incomes'>
                        {incomes.map((income) => {
                            const{_id, title, amount, date, category, description} = income;
                            return <IncomeItem
                                key={_id}
                                id={_id}
                                title={title}
                                description={description}
                                amount={amount} date={date}
                                category={category}
                                indicatorColor="var(--color-green)"
                                deleteItem={deleteIncome}
                            />
                        })}
                        
                    </div>
                </div>
            </InnerLayout>
        </IncomeStyled>
    )
}

const IncomeStyled = styled.div`
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

export default Income