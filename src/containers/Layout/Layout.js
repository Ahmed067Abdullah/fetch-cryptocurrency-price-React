import React, {Component} from 'react';

import Input from '../../components/Input/Input';
import Button from '../../components/Button/Button';
import Spinner from '../../components/Spinner/Spinner';
import {getPrice} from '../../config/helper';
import './Layout.css';

class Layout extends Component{
    state = {
        input : '',
        prices : {
            pkr : '',
            usd : ''
        },
        loading : false,
        error : ''
    }

    inputChangedHandler = (event) =>{
        this.setState({input : event.target.value})
    }

    searchHandler = () => {
        this.setState({loading : true , error : ''})
        if(this.state.input.trim() !== ''){
            getPrice(this.state.input.toUpperCase())
                .then(res =>{
                    this.input = this.state.input
                    this.setState({prices : res, loading : false, input : '', error : ''})
                })
                .catch(err => {
                    this.setState({loading : false, prices : {PKR : '', USD : ''}, error : err})
                })
        }
    }

    render(){
        let prices = null;
        if(this.state.prices.PKR && !this.state.loading){
            prices = (
                <div className = "output">
                    <p>Currency: <strong>{this.input.toUpperCase()}</strong> </p>
                    <p>PKR: <strong>{this.state.prices.PKR}</strong></p>
                    <p>USD: <strong>{this.state.prices.USD}</strong></p>
                </div>
            )
        }

        const spinner = this.state.loading ? <Spinner /> : null
        const error = this.state.error ? <p className = "error">{this.state.error}</p> : null
        return(
           <div>
                <h1 className="display-5 heading">CryptoRate</h1>
                <Input 
                    className="form-control input-field"
                    onChange = {(event) => this.inputChangedHandler(event)} 
                    value = {this.state.input}
                    placeholder = "Cryptocurrency code"/>  
                <Button 
                    className = 'btn btn-primary button' 
                    clicked = {this.searchHandler}>Search</Button>
                <small className="text-muted suggestions">Example: BTC, ETH, XRP, XLM</small>  
                <a href = "https://bitinfocharts.com/top-cryptocurrency-list.html" target = "_blank">Currencies List</a>
                {spinner}
                {prices}
                {error}
            </div> 
        )
    }
}

export default Layout;
