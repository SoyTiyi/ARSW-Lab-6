const apiclient = (() => {

    return{
        getBlueprintsByAuthor: (author, callback) => {
            const promise = $.get({
                url: `/blueprints/${author}`,
                contentType: "application/json",
            });
            promise.then( data => {
                callback(null, JSON.parse(data));
            }).catch(error => {
                callback(error, null);
            });
        },
        getBlueprintsByNameAndAuthor: (name, author, callback) => {
            const promise = $.get({
                url: `/blueprints/${author}/${name}`,
                contentType: "application/json",
            });
            promise.then(data => {
                callback(null,data);
            }).catch(error => {
                callback(error,null);
            })
        }
    }
})();