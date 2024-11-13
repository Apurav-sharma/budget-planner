import React from "react";

function Remain({cost}) {
    return (
        <div className="alert alert-success">
            <span>Remaining: ${cost}</span>
        </div>
    )
}

export default Remain;