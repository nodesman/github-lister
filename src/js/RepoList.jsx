import React from "react";

//this component serves to orchestrate the entire application.
export default class RepoList extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            list: props.data,
            username: props.username,
        }
    }
    componentWillReceiveProps(newProps) {
        this.setState({
            list: newProps.data,
            username: newProps.username
        })
    }

    repoItem(item, index) {
        return (<div className="repo" key={index}>
            <h3 className="text-center"><a target="_blank" href={item.html_url}>{item.name}</a></h3>
            <span className="line-item">
                <i className="glyphicon glyphicon-random"></i> {item.forks_count}
            </span>
            <span className="line-item">
                <i className="glyphicon glyphicon-star" aria-hidden="true"></i> {item.stargazers_count}
            </span>
        </div>) ;
    }
    render() {
        return (<div className="text-center">
            <h2 className="text-center">{this.state.username}'s repositories</h2>
            {this.getRepoList()}
        </div>)
    }

    getRepoList() {

        if (this.state.list.length > 0) {
            return this.state.list.map(this.repoItem);
        } else {
            return <div className="alert alert-info">This user has no repositories</div>
        }

    }

}
