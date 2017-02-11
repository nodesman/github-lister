import {TestUtils} from 'react-dom'; //I like using the Test Utils, but you can just use the DOM API instead.
import expect from "expect";
import GithubViewer from "./../src/js/GithubViewer";

describe('root', function () {
    it('renders without problems', function () {
        expect(GithubViewer).toExist();
    });
});