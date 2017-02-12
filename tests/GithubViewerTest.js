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

    it("handleRepositoriesResponse() sets the state for username not found correctly", function () {

        let sGithubViewer = shallow(<GithubViewer />);
        let instance = sGithubViewer.instance();

        let username = "nodesman";
        instance.handleRepositoriesResponse(username, {
            status: 'error',
            error: 'Not Found'
        }, null)


        let state = sGithubViewer.state();
        expect(state.notFound).toBe(true);
        expect(state.notFoundUser).toBe(username);
    });

    it("handleRepositoriesResponse() sets state for username and data when username is found", function () {

        let sGithubViewer = shallow(<GithubViewer />);
        let instance = sGithubViewer.instance();

        let username = "nodesman";
        let data = [{
            url: "http://github.com/nodesman/wp-autoresponder",
        }];

        instance.handleRepositoriesResponse(username, null, data);

        let state = sGithubViewer.state();
        expect(state.notFound).toBe(false);
        expect(state.haveData).toBe(true);
        expect(state.data).toBe(data);
        expect(state.current_user).toBe(username);
    })
});