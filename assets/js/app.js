
import { GetService } from "./get.js";
import { PostService } from "./post.js";
import { DeleteService } from "./delete.js";
import { PutService } from "./put.js";

const get = new GetService();
const post = new PostService();
const remove = new DeleteService();
const put = new PutService();


$(() => {

    $('#containerParams').on("click", ".link-params", (e) => {
        const attrID = $(e.target).attr("id");
        $('.section-params').find(".section-article").removeClass("show");
        $('#containerParams').find(".link-params").removeClass("active");
        $(`#box${attrID}`).addClass("show");
        $(`#${attrID}`).addClass("active");
    });

    $('#containerResponse').on("click", ".link-params", (e) => {
        const attrID = $(e.target).attr("id");
        $('.section-response').find(".section-article").removeClass("show");
        $('#containerResponse').find(".link-params").removeClass("active");
        $(`#box${attrID}`).addClass("show");
        $(`#${attrID}`).addClass("active");
    });

    $('#btnSend').on('click', (e) => {
        e.preventDefault();
        const httpMethod = $('#httpList').val();
        const urlBase = $('#urlBase').val();
        const bdjson = $('#bdjson').val();      
        const header = createHeaders();
        const params = createParams();
        var urlValida = /^(ftp|http|https):\/\/[^ "]+$/.test(urlBase);
        if (urlValida) {
            sendData(httpMethod, urlBase, params, header, bdjson);
        } else {
            alert('Ingrese una url valida');
        }
    })

});

function setList(list, element){
    $(element).children().each(function() {
        let key = $(this).val();
        if(key){
            list.push(key);
        }
    }); 
}

function setJson(listKey, listValue, json){
    for (let i = 0; i < listKey.length; i++) {
        json[listKey[i]] = listValue[i];
    }
}

function createHeaders(){
    const listKey = [];
    const listValue = [];
    const header = {};
    setList(listKey, '#listKey');
    setList(listValue, '#listValue');
    setJson(listKey, listValue, header);
    return header;
}

function createParams(){
    const listKey = [];
    const listValue = [];
    let params = '';
    setList(listKey, '#keys');
    setList(listValue, '#values')
    if(listKey){
        for (let i = 0; i < listKey.length; i++) {
            params += listKey[i] + '=' + listValue[i];
        }
    }
    return params;
}

function sendData(httpMethod, urlBase, params, header, bdjson){
    if(httpMethod == 'GET'){
        const response = get.GetMethod(urlBase, header);
    }else if(httpMethod == 'POST'){
        const body = JSON.parse(`${bdjson}`);
        const response = post.PostMethod(urlBase, body, header);
    }else if(httpMethod == 'DELETE'){
        const response = remove.DeleteMethod(urlBase, params, bdjson, header);
    }else if(httpMethod == 'PUT'){
        const response = put.PutMethod(urlBase, params, bdjson, header);
    }else{

    }
}
