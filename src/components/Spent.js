import React from "react";

function Spent({cost}) {
    return (
        <div className="alert alert-light">
            <span className="ml-3">Spent so far: ${cost}</span>
        </div>
    )
}

export default Spent;