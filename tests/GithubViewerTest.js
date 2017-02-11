import {TestUtils} from "react-dom"; //I like using the Test Utils, but you can just use the DOM API instead.
import expect from "expect";
import {shallow} from "enzyme";
import React from "react";
import GithubViewer from "./../src/js/GithubViewer";

describe('<GithubViewer />', function () {
    it('initializes correctly', function () {
        let instance = shallow(<GithubViewer/>);
        let state = instance.state();
        expect(state).toEqual({
            loading: false,
            haveData: false,
            notFound: false,
            notFoundUser: null,
            data: null
        });
    });

    it("sets loading screen visibility to true when requestStarting() is called", function () {
        let instance = shallow(<GithubViewer/>);
        instance.instance().requestStarting();
        expect(instance.state().loading).toBe(true);
    });

    it("sets the loading screen visibility to false when requestEnding() is called", function () {
        let instance = shallow(<GithubViewer/>);
        instance.instance().requestEnding();
        expect(instance.state().loading).toBe(false);
    });

    it("updates repositories list when setRepositoriesList() is called", function () {
        let instance = shallow(<GithubViewer/>)
        let list = [{name: "test"}, {name: "nodesman"}];
        let username = "nodesman";
        instance.instance().setRepositoriesList(username, list)
        let state = instance.state();
        expect(state.haveData).toBe(true);
        expect(state.data).toEqual(list);
        expect(state.current_user).toEqual(username);
    });
});