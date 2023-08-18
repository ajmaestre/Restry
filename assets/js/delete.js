
export class DeleteService {

    DeleteMethod(url, params, bdjson, headersList) {
        if(Object.keys(headersList).length && bdjson){
            const body = JSON.parse(`${bdjson}`);
            this.DeleteWhitBodyHeader(url, body, headersList);
        }else if(Object.keys(headersList).length && params){
            this.DeleteMethodWhitIdHeader(url, params, headersList);
        }else if(bdjson){
            const body = JSON.parse(`${bdjson}`);
            this.DeleteMethodWhitBody(url, body);
        }else if(params){
            this.DeleteMethodWhitId(url, params);
        }else if(Object.keys(headersList).length){
            this.DeleteMethodWhitUrlHeader(url, headersList);
        }else{
            this.DeleteMethodWhitUrl(url);
        }
    }

    DeleteWhitBodyHeader(url, body, headersList) {
        $.ajax({
            type: "Delete",
            url: url,
            contentType: "application/json",
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

    DeleteMethodWhitIdHeader(url, params, headersList) {
        $.ajax({
            type: "Delete",
            url: url + '?' + params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: headersList,
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

    DeleteMethodWhitBody(url, body) {
        $.ajax({
            type: "Delete",
            url: url,
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

    DeleteMethodWhitId(url, params) {
        $.ajax({
            type: "Delete",
            url: url + '?' + params,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
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

    DeleteMethodWhitUrlHeader(url, headersList) {
        $.ajax({
            type: "Delete",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            headers: headersList,
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

    DeleteMethodWhitUrl(url) {
        $.ajax({
            type: "Delete",
            url: url,
            contentType: "application/json; charset=utf-8",
            dataType: "json",
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