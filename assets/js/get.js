
export class GetService{

    GetMethod(url, headersList) {
        if(Object.keys(headersList).length){
            this.GetMethodWhitHeader(url, headersList);
        }else{
            this.GetMethodWhitoutHeader(url);
        }
    }

    GetMethodWhitHeader(url, headersList) {
        $.ajax({
            type: "GET",
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

    GetMethodWhitoutHeader(url){
        $.ajax({
            type: "GET",
            url: url,
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
