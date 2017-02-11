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
            <h3 className="text-center"><a href={item.html_url}>{item.name}</a></h3>
        </div>) ;
    }
    render() {
        return (<div className="text-center">
            <h2 className="text-center">{this.props.username}'s repositories</h2>
            {this.state.list.map(this.repoItem)}
        </div>)
    }

}
