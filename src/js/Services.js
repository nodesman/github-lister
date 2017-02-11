
export default {
    onBeforeRequest(callback) {
        $(document).ajaxStart(callback);
    },
    onAfterRequest(callback) {
        $(document).ajaxStop(callback);
    },
    getRepositories(username, callback) {
        $.ajax({
            url: `http://api.github.com/users/${username}/repos?type=all&sort=updated`,
            method: 'GET',
            type:'jsonp',
            success: function (data, status, xhr) {
                callback(null, data);
            },
            error: function (xhr, status, error) {
                callback({
                    status,
                    error
                }, null);
            }
        })
    }
};