import React, { useState } from "react";
import {connect} from "react-redux";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/TextField";

import {sortByPrice, sortByPriceUp} from "../store/actions/sort";
import search from "../store/actions/search.js";
import axios from "axios";
import setError from "../store/actions/setError";
import clearErrors from "../store/actions/clearErrors";

const Sorting = ({sortBy, sortByPrice, sortByPriceUp, sortBySearch, setError, clearErrors}) => {
    const [inputValue, inputHandler] = useState('');

    const inputOnChange = (e)=>{
        const value = e.target.value.toLowerCase();
        inputHandler(value);
        clearErrors();
        axios("/db.json").then(({data})=>{
            const res = data.filter(product=>{
                return product.name.toLowerCase().includes(value)
            });
            console.log(res);
            if(res.length){
                sortBySearch(res);
            }else{
                setError({text:"Nothing found:(", type:"warning"})
            }
        });
        
    }

    return (
        <section className="sorting">
            <Button variant={sortBy==="by_price" ? "contained" : "outlined"} onClick={()=>sortByPrice()} color="secondary">by Price ASC</Button>
            <Button variant={sortBy==="by_price_up" ? "contained" : "outlined"} onClick={()=>sortByPriceUp()} color="secondary">by Price DESC</Button>
            <div className="search">
                <Input placeholder="search" onChange={(e)=>inputOnChange(e)} value={inputValue} color="secondary" />
            </div>
        </section>
    )
}

const mapStateToProps = (state)=>{

    return{
        sortBy: state.list.sortBy
    }
}
const mapDispatchToProps = (dispatch)=>{
    return {
        sortByPrice: ()=>dispatch(sortByPrice()),
        sortByPriceUp: ()=>dispatch(sortByPriceUp()),
        sortBySearch: (queryResult)=>dispatch(search(queryResult)),
        setError:(error)=>dispatch(setError(error)),
        clearErrors: ()=>dispatch(clearErrors())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sorting);