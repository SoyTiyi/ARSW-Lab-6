const app = (() => {

    var listBluePrints = []

    var mockdata = apimock.getMockData();

    mockdata.map(author => {
        author.map( book => {
            const object = {};
            object.name = book.name;
            objecto.numPoints = book.points.length;
            listBluePrints.push(object);
        })
    })
    
    var authorName = () => {
        $('#input').val();
    }

    return {
        setAuthorName: name => {
            $('#input').val(name);
        },
        setListBluePrintsByAuthor: authorName => {
            $('#table tbody').empty();
            $('#authorPoints').text("");
            apimock.getBlueprintsByAuthor(authorName, (error, resp) => {
                if (error != null){
                    alert("Verificar datos");
                    return;	
                }
                const newResult = [];
                resp.map(book => {
                    const object = {};
                    object.name = book.name;
                    object.numPoints = book.points.length;
                    newResult.push(object);
                })

                newResult.map(obj => {
                    $('#table > tbody:last')
                        .append($(`<tr><td>${obj.name}</td><td>${obj.numPoints}</td><td>Button Brooo</td></tr>`))
                })

                const totalPoints = Object.values(newResult).reduce((point, {numPoints}) => point + numPoints, 0)

                $('#authorPoints').text(totalPoints);
            })
        }
    };
})();