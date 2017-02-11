import React from "react";

export default class UsernameForm extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            username: ''
        };
    }

    showButonClicked() {
        this.sendValue()
    }

    keyUp(event) {

        if (event.keyCode === 13) {
            this.sendValue();
        } else {
            this.setState({
                username: event.target.value
            })
        }
    }

    sendValue() {
        this.props.onUpdate(this.state.username);
    }

    render() {
        return (
            <div className="github-field">
                <span className="form-inline">
                    <div className="form-group">
                        <div className="input-group">
                            <div className="input-group-addon">github.com/</div>
                            <input type="text" onKeyUp={this.keyUp.bind(this)} className="form-control"
                                   placeholder="facebook"/>
                        </div>
                    </div>
                    <button className="btn btn-primary" onClick={this.showButonClicked.bind(this)}>Show
                    </button>
                </span>
            </div>)
    }

}
