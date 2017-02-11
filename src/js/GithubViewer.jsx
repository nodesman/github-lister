import React from 'react';
import ReactDOM from "react-dom";
import UsernameForm from "./UsernameForm";
import Service from "./Services";
import Loading from "./Loading";
import RepoList from "./RepoList";

//this component serves to orchestrate the entire application.
class GithubViewer extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            haveData: false,
            notFound: false,
            notFoundUser: null,
            data: null
        };

        Service.onBeforeRequest(this.requestStarting.bind(this));
        Service.onAfterRequest(this.requestEnding.bind(this));
    }

    lookUpUser(username) {
        if (username.length === 0 || username.replace(/^\s+/, '').replace(/\s+$/, '').length === 0) {
            alert("Please enter a valid username.");
            return;
        }
        this.setState({
            notFound: false
        });
        Service.getRepositories(username, this.handleRepositoriesResponse.bind(this, username));
    }

    handleRepositoriesResponse(username, error, data) {

        if (!!error) {
            if (error.status === 'error' && error.error === 'Not Found') {
                this.setState({
                    notFound: true,
                    notFoundUser: username
                });
            } else {
                alert("Failed to fetch the repositories of the user due to a network failure.");
            }
            return;
        }

        this.setRepositoriesList(username, data)
    }

    setRepositoriesList(username, data) {
        this.setState({
            haveData: true,
            data: data,
            current_user: username
        })
    }

    requestStarting() {
        this.setState({
            loading: true,
        });
    }

    requestEnding() {
        this.setState({
            loading: false
        });
    }

    render() {
        return (<div>
            <UsernameForm onUpdate={this.lookUpUser.bind(this)}/>
            {(this.state.notFound ) ? <div className="not-found alert alert-danger">User {this.state.notFoundUser} does not exist.</div> : null}
            {(this.state.haveData) ? <RepoList username={this.state.current_user} data={this.state.data} />:null}
            {(this.state.loading) ? <Loading /> : null}
        </div>)
    }
}

window.addEventListener("load", function () {
    ReactDOM.render(<GithubViewer />, document.querySelector(".wrapper"));
});
