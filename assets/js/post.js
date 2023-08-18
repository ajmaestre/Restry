
export class PostService {

    PostMethod(url, body, headersList) {
        if(Object.keys(headersList).length){
            this.PostMethodWhitHeader(url, body, headersList);
        }else{
            this.PostMethodWhitoutHeader(url, body);
        }
    }

    PostMethodWhitHeader(url, body, headersList){
        $.ajax({
            url: url,
            type: "Post",
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

    PostMethodWhitoutHeader(url, body) {
        $.ajax({
            url: url,
            type: "Post",
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