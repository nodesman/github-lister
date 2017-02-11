import React from "react";

export default class Loading extends React.Component {


    render() {
        return (<div className="loading">
            <div className="backdrop"></div>
            <div className="loading-container">
                <img src="images/loading.gif"/>
            </div>
        </div>)
    }

}