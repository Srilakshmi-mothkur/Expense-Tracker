import React from 'react'
import styled from 'styled-components'
import { dateFormat } from '../../utils/dateformat';
import { trash, comment, calender, rupee, money, stocks, freelance, card, piggy, book, food, medical, tv, clothing, circle} from '../../utils/icons';
import Button from '../Button/Button';

function IncomeItem({
    id,
    title,
    amount,
    date,
    category,
    description,
    deleteItem,
    indicatorColor,
    type
}){
    const categoryIcon = () =>{
        switch(category){
            case 'salary':
                return money;
            case 'investments':
                return stocks;
            case 'freelancing':
                return freelance;
            case 'bank':
                return card;
            case 'other':
                return piggy;
            default:
                return '';            
        }
    }

    const expenseCatIcon = () =>{
        switch(category){
            case 'education':
                return book;
            case 'groceries':
                return food;
            case 'health':
                return medical;
            case 'subscriptions':
                return tv;
            case 'clothing':
                return clothing;
            case 'travelling':
                return freelance;
            case 'other':
                return circle;
            default:
                return '';            
        }
    }



    return(
        <IncomeItemStyled indicator = {indicatorColor}>
            <div className='icon'>
                {type === 'expense' ? expenseCatIcon() : categoryIcon()}

            </div>
            <div className='content'>
                <h5>{title}</h5>
                <div className='inner-content'>
                    <div className='text'>
                        <p>{rupee} {amount}</p>
                        <p>{calender} {dateFormat(date)}</p>
                        <p>
                            {comment}
                            {description}
                            <div className='btn-con'>
                                <Button
                                icon={trash}
                                bPad={'1rem'}
                                bRad={'50%'}
                                bg={'var(--primary-color)'}
                                color={'rgba(34, 34, 96, 1)'}
                                iColor={'rgba(34, 34, 96, 1)'}
                                hColor={'var(--color-green)'}
                                onClick={() => deleteItem(id)}
                                />
                            </div>


                        </p>

                    </div>
                </div>
            </div>
        </IncomeItemStyled>
    )
}

const IncomeItemStyled = styled.div`
    background: #FCF6F9;
    border: 2px solid #FFFFFF;
    box-shadow: 0px 1px 15px rgba(0, 0, 0, 0.06);
    border-radius: 20px;
    padding: .1rem;
    margin-bottom: 1rem;
    display:flex;
    align-items: center;
    gap: .5rem;
    width: 675px;
    color: #222260;
    
    .icon{
        width: 50px;
        height: 50px;
        border-radius: 20px;
        background: #F5F5F5;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 2px solid #FFFFFF;

        i{
            font-size: 1rem;
        }
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: .2rem;

        h5{
            font-size: 1rem;
            padding-left: 2rem;
            position: relative;

            &::before{
                content: '';
                position: absolute;
                left: 0;
                top: 50%;
                transform: translateY(-50%);
                width: .8rem;
                height: .8rem;
                border-radius: 50%;
                background: ${props => props.indicator};
            }
        }

        .inner-content{
            display flex;
            justify-content: space-between;
            align-items: center;

            .text{
                display: flex;
                align-items: center;
                gap: 1.5rem;
                flex: 1;
                
                p{
                    display: flex;
                    align-items: center;
                    gap: 0.5rem;
                    color: var(--primary-color);
                    opacity: 0.8;

                }
            }
        }


    }

`;

export default IncomeItem