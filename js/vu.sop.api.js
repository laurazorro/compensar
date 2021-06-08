/*

Descripcion: Esta libreria se de las llamadas al api de onboarding

 */

if (typeof vu == "undefined") { vu = function() {} }

if (typeof vu.sop == "undefined") { vu.sop = function() {} }

if (typeof vu.sop.api == "undefined") { vu.sop.api = function() {} }

vu.sop.api.host = 'https://host:port/vu-onboarding-rest'
vu.sop.api.headers = undefined;

vu.sop.api.imgData2b64 = function(img){
    return img.split(",")[1]
}

//------------------------------------------------------------------------------

vu.sop.api.newOperation = function(userName){
    url = vu.sop.api.host + '/onboarding/newOperation'
    body = {
        "userName": userName,
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.addFront = function(userName, operationId, operationGuid, image) {
    url = vu.sop.api.host + '/onboarding/addFront'
    body = {
        "operationId": operationId,
        "userName": userName,
        "analyzeOcr": "true",
        "analyzeAnomalies": "true",
        "file": vu.sop.api.imgData2b64(image)
    }
    if(operationGuid != undefined && operationGuid != null) {
        body.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.addBack = function(userName, operationId, operationGuid, image) {
    url = vu.sop.api.host + '/onboarding/addBack'
    body = {
        "operationId": operationId,
        "userName": userName,
        "analyzeOcr": "true",
        "analyzeAnomalies": "true",
        "file": vu.sop.api.imgData2b64(image)
    }
    if(operationGuid != null) {
        body.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.addDocumentImage = function(userName, operationId, operationGuid, image) {
    url = vu.sop.api.host + '/onboarding/addDocumentImage'
    body = {
        "operationId": operationId,
        "userName": userName,
        "file": vu.sop.api.imgData2b64(image)
    }
    if(operationGuid != null) {
        body.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------


// REquiere API PRIVADA
vu.sop.api.getDocumentInformation = function(userName, operationId, operationGuid) {
    url = vu.sop.api.host + '/onboarding/getDocumentInformation'
    body = {
        "operationId": operationId,
        "userName": userName,
    }
    if(operationGuid != null) {
        body.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}


//------------------------------------------------------------------------------

vu.sop.api.addBarcode = function(userName, operationId, operationGuid, barcodeData) {
    url = vu.sop.api.host + '/onboarding/addBarcode'
    payload ={
        "operationId": userName,
        "userName": operationId,
        "document": barcodeData,
        "data": {
            "code": 0,
            "message": "Barcode",
            "document": barcodeData
        }
    }
    if(operationGuid != null) {
        payload.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.register = function(userName, operationId, operationGuid, image) {
    url = vu.sop.api.host + '/onboarding/register'
    body = {
        "operationId": operationId,
        "userName": userName,
        "selfieList": [{"file": vu.sop.api.imgData2b64(image), "imageType": "SN"}]
    }
    if(operationGuid != null) {
        body.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.endOperation = function(userName, operationId, operationGuid) {
    url = vu.sop.api.host + '/onboarding/endOperation'
    body = {
        "operationId": operationId,
        "userName": userName
    }
    if(operationGuid != null) {
        body.operationGuid = operationGuid;
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.faceLogin = function(userName, image) {
    url = vu.sop.api.host + '/face/login'
    body = {
        "userName": userName,
        "selfieList": [{"file": vu.sop.api.imgData2b64(image), "imageType": "SN"}]
    }
    return vu.sop.api.doAjaxRequest(url, JSON.stringify(body), "application/json")
}

//------------------------------------------------------------------------------

vu.sop.api.addVideo = function(userName, operationId, operationGuid, businessId, video) {
    url = vu.sop.api.host + '/onboarding/addVideos'
    var formData = new FormData();
    formData.append("operationId", operationId);
    formData.append("userName", userName);
    formData.append("businessId", businessId);
    formData.append("VCS", video);
    if(operationGuid != null) {
        formData.append("operationGuid",  operationGuid);
    }
    return vu.sop.api.doAjaxRequest(url, formData, "")
}
//------------------------------------------------------------------------------

vu.sop.api.doAjaxRequest = function(url, body, contentType) {
    let promise = new Promise(function (resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    const resp = xhr.responseText;
                    try {
                        const respJson = JSON.parse(resp);
                        resolve(respJson);
                    } catch (e) {
                        reject(resp);
                    }
                } else {
                    const resp = xhr.responseText;
                    try {
                        const respJson = JSON.parse(resp);
                        reject(respJson);
                    } catch (e) {
                        reject(resp);
                    }
                }
            } else {
                //console.log("xhr processing going on");
            }
        };
        xhr.open("POST", url, true);

        Object.entries(vu.sop.api.headers).forEach(([key, value]) => {
            xhr.setRequestHeader(key, value);
        });        
        if(contentType != null && contentType != "" ) {
            xhr.setRequestHeader("Content-type", contentType);
        }
        xhr.send(body);
    })
    return promise;
};