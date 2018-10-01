import axios from 'axios';

export const getPrice = (currency) => {
    return new Promise((resolve, reject) => {
        axios.get(`https://min-api.cryptocompare.com/data/price?fsym=${currency}&tsyms=USD,PKR`)
            .then(res => {
                console.log(res)
                if(res.data.Response)
                    reject('*Invalid Currency Code')
                else    
                    resolve(res.data)
            })
            .catch(err => reject ('Network Error'))
    })
}