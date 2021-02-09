import React, { useEffect, useState } from "react";
import axios from "axios";
import { connect } from "react-redux";
import CircularProgress from "@material-ui/core/CircularProgress";

import Product from "./product";
import Error from "./error";

import setList from "../store/actions/setList";
import clearList from "../store/actions/clearList";
import setError from "../store/actions/setError";

const List = (props) => {
    useEffect(() => {
        
        axios("/db.json").then(({ data }) => {
            props.setList(data);
        }).catch(()=>{
            props.setError({text:"Some trouble with server", type: "error"})
        });

        return ()=>{
            props.clearList();
        }
    }, []);

    return (
        <section className="list">
            {
                props.errors.length ? <div className="errors">{props.errors.map((error,index)=><Error key={index} {...error} />)}</div> :(
                    props.list.length ? props.list.map(product => <Product key={product.id} {...product} />) : <CircularProgress color="secondary"/>
                )
            }
        </section>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        setList: (data) => dispatch(setList(data)),
        setError: (error)=>dispatch(setError(error)),
        clearList: ()=>dispatch(clearList())
    }
}
const mapStateToProps = (state) => {
    return {
        list: state.list.list,
        errors: state.errors.errors
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List);