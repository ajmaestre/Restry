
export class PutService {

    PutMethod(url, params, bdjson, headersList) {
        console.log(bdjson);
        const body = JSON.parse(`${bdjson}`);
        if(Object.keys(headersList).length && params){
            this.PutMethodWhitIdHeader(url, params, body, headersList);
        }else if(params){
            this.PutMethodWhitId(url, params, body);
        }else if(Object.keys(headersList).length){
            this.PutMethodWhitHeader(url, body, headersList);
        }else if(bdjson){
            this.PostMethodWhitoutHeader(url, body);
        }
    }

    PutMethodWhitHeader(url, body, headersList){
        $.ajax({
            url: url,
            type: "Put",
            headers: headersList,
            data: JSON.stringify(body),
            success: function (data) {
                const response = JSON.stringify(data);
                $('#bodyRes').val(response);
            },
            failure: function (data) {
                $('#bodyRes').val(data.responseText);
            },
            error: function (data) {
                $('#bodyRes').val(data.responseText);
            }
        });
    }

    PutMethodWhitoutHeader(url, body) {
        $.ajax({
            url: url,
            type: "Put",
            data: JSON.stringify(body),
            success: function (data) {
                const response = JSON.stringify(data);
                $('#bodyRes').val(response);
            },
            failure: function (data) {
                $('#bodyRes').val(data.responseText);
            },
            error: function (data) {
                $('#bodyRes').val(data.responseText);
            }
        });
    }

    PutMethodWhitIdHeader(url, params, body, headersList) {
        $.ajax({
            type: "Put",
            url: url + '?' + params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: headersList,
            data: JSON.stringify(body),
            success: function (data) {
                const response = JSON.stringify(data);
                $('#bodyRes').val(response);
            },
            failure: function (data) {
                $('#bodyRes').val(data.responseText);
            },
            error: function (data) {
                $('#bodyRes').val(data.responseText);
            }
        });
    }

    PutMethodWhitId(url, params, body) {
        $.ajax({
            type: "Put",
            url: url + '?' + params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(body),
            success: function (data) {
                const response = JSON.stringify(data);
                $('#bodyRes').val(response);
            },
            failure: function (data) {
                $('#bodyRes').val(data.responseText);
            },
            error: function (data) {
                $('#bodyRes').val(data.responseText);
            }
        });
    }

}