export const depositMoney = (account)=> {
    return (dispatch)=> {
        dispatch({
            type: 'deposit',
            payload: amount
        })
    }
 
}


export const withdrawtMoney = (account)=> {
        return (dispatch)=> {
            dispatch({
                type: 'withdraw',
                payload: amount
            })
        }
    
}