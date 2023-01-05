import React, { Children } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { Provider } from 'react'
const initialState = {
    transactions:[
        {id:1,text:'Salary',amount:20000},
        {id:2,text:'Books',amount:-2000},
        {id:3,text:'Fees',amount:-34000},
        {id:4,text:'Business',amount:50000}
    ]
}
const reducer =(state,action)=>{

    switch(action.type){
        case 'DELETE_TRANSACTION':
            return { ...state , transactions: state.transactions.filter((transaction)=>{
                return transaction.id !== action.payload
            })
            }
            case 'ADD_TRANSACTION':
            return {...state,
            transactions:[action.payload ,...state.transactions]}

        default:
            return state
    }



}
//Creating and exporting the Context
export const GlobalContext = createContext(initialState)

function GlobalProvider({children}) {
const [state,dispatch] = useReducer(reducer,initialState)
//Passing props down using context api
    const deleteTransaction = (id)=>{
        dispatch({type:'DELETE_TRANSACTION',payload:id})
    }

    const addTransaction = (transaction)=>{
        dispatch({type:'ADD_TRANSACTION', payload:transaction})
    }
  return (

    <GlobalContext.Provider value={{
        transactions:state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContext.Provider>
    
  )
}

export default GlobalProvider