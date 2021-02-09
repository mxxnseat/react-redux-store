import React from "react";
import Alert from "@material-ui/lab/Alert";

export default ({text, type})=>{
    return (<div className="error">
        {
            type==="error" ? 
                <Alert severity="error">{text}</Alert> :
                <Alert severity="info">{text}</Alert>
        }
    </div>)
}