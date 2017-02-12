import {TestUtils} from "react-dom";
import expect from "expect";
import {shallow} from "enzyme";
import React from "react";
import RepoList from "./../src/js/RepoList";

describe('<RepoList />', function () {

    it("initializes correctly", function () {

        let data = [{
            url: "http://github.com/nodesman/wp-autoresponder",
        }];

        let username = "facebook";

        let sRepoList = shallow(<RepoList username={username} data={data}/>);
        let state = sRepoList.state();

        expect(state.list).toEqual(data);
        expect(state.username).toEqual(username);
    });

    it("updates correctly", function () {

        let data = [{
            url: "http://github.com/nodesman/wp-autoresponder",
        }];

        let username = "facebook";

        let sRepoList = shallow(<RepoList username={username} data={data}/>);
        let state = sRepoList.state();

        expect(state.list).toEqual(data);
        expect(state.username).toEqual(username);

        let instance = sRepoList.instance();
        let newData = [{
            url: "http://github.com/nodesman/android-application",
        }];
        let newUsername = "nodesman";
        instance.componentWillReceiveProps({
            username: newUsername,
            data: newData
        });

        state = sRepoList.state();
        expect(state.list).toEqual(newData);
        expect(state.username).toEqual(newUsername);
    })

});