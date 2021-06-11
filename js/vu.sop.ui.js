if (typeof vu == "undefined") { vu = function() {} }

if (typeof vu.sop == "undefined") { vu.sop = function() {} }

if (typeof vu.sop.ui == "undefined") { vu.sop.ui = function() {} }

//---------------------------------------------------
// Generic
//---------------------------------------------------

vu.sop.ui.alertDraw = function(msg, closeMethod) {
    let divContainer = document.createElement("div");
    divContainer.className = "vu.sop.ui.innerVerticalAlign";

    let divAlertText = document.createElement("div");
    divAlertText.innerHTML = msg;

    let buttonClose = document.createElement("button");
    buttonClose.className = "vu.sop.btn vu.sop.btn-outline-secondary";
    buttonClose.id = "vu.sop.ui.alertButton";
    buttonClose.innerHTML = "Cerrar";
    buttonClose.onclick = closeMethod;
    
    divContainer.appendChild(divAlertText);
    divContainer.appendChild(buttonClose);
    return divContainer;
}

vu.sop.ui.documentFileUploadFrontDraw = function() {
    let divContainer = document.createElement("div");
    divContainer.className = "vu.sop.ui.innerVerticalAlign";
    divContainer.style = "margin-top: -2em;";

    let label = document.createElement("label");
    label.htmlFor = "documentFileUploadFrontInput";
    label.style = "display: inline-block; padding: 6px 12px; cursor: pointer;";

    let imgUpload = document.createElement("img");
    imgUpload.style = "width: 100%";
    imgUpload.src = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJhcnJvdy1jaXJjbGUtdXAiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1jaXJjbGUtdXAgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik04IDI1NkM4IDExOSAxMTkgOCAyNTYgOHMyNDggMTExIDI0OCAyNDgtMTExIDI0OC0yNDggMjQ4UzggMzkzIDggMjU2em0xNDMuNiAyOC45bDcyLjQtNzUuNVYzOTJjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMTZjMTMuMyAwIDI0LTEwLjcgMjQtMjRWMjA5LjRsNzIuNCA3NS41YzkuMyA5LjcgMjQuOCA5LjkgMzQuMy40bDEwLjktMTFjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlMMjczIDEwNy43Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwxMDYuMyAyNDAuNGMtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlsMTAuOSAxMWM5LjYgOS41IDI1LjEgOS4zIDM0LjQtLjR6Ij48L3BhdGg+PC9zdmc+";

    label.appendChild(imgUpload);

    let inputFile = document.createElement("input");
    inputFile.id = "documentFileUploadFrontInput";
    inputFile.type ="file";
    inputFile.style="display: none;";
    inputFile.onchange = function() {vu.sop.steps.uploadFrontDocumentPictureResolve(this.files)};
    divContainer.appendChild(label);
    divContainer.appendChild(inputFile);

    return divContainer;
}

vu.sop.ui.documentFileUploadBackDraw = function() {
    let divContainer = document.createElement("div");
    divContainer.className = "vu.sop.ui.innerVerticalAlign";
    divContainer.style = "margin-top: -2em;";

    let label = document.createElement("label");
    label.htmlFor = "documentFileUploadBackInput";
    label.style = "display: inline-block; padding: 6px 12px; cursor: pointer;";

    let imgUpload = document.createElement("img");
    imgUpload.style = "width: 100%";
    imgUpload.src = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJhcnJvdy1jaXJjbGUtdXAiIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1hcnJvdy1jaXJjbGUtdXAgZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik04IDI1NkM4IDExOSAxMTkgOCAyNTYgOHMyNDggMTExIDI0OCAyNDgtMTExIDI0OC0yNDggMjQ4UzggMzkzIDggMjU2em0xNDMuNiAyOC45bDcyLjQtNzUuNVYzOTJjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMTZjMTMuMyAwIDI0LTEwLjcgMjQtMjRWMjA5LjRsNzIuNCA3NS41YzkuMyA5LjcgMjQuOCA5LjkgMzQuMy40bDEwLjktMTFjOS40LTkuNCA5LjQtMjQuNiAwLTMzLjlMMjczIDEwNy43Yy05LjQtOS40LTI0LjYtOS40LTMzLjkgMEwxMDYuMyAyNDAuNGMtOS40IDkuNC05LjQgMjQuNiAwIDMzLjlsMTAuOSAxMWM5LjYgOS41IDI1LjEgOS4zIDM0LjQtLjR6Ij48L3BhdGg+PC9zdmc+";

    label.appendChild(imgUpload);

    let inputFile = document.createElement("input");
    inputFile.id = "documentFileUploadBackInput";
    inputFile.type ="file";
    inputFile.style="display: none;";
    inputFile.onchange = function() {vu.sop.steps.uploadBackDocumentPictureResolve(this.files)};
    divContainer.appendChild(label);
    divContainer.appendChild(inputFile);

    return divContainer;
}
vu.sop.ui.documentSelectUploadMethodDraw = function(takePictureMethod, uploadFileMethod) {
    let divContainer = document.createElement("div");
    divContainer.className = "vu.sop.ui.innerVerticalAlign";
    divContainer.style = "margin-top: -2em;";
    
    let divTakePicture = document.createElement("div");
    divTakePicture.style = "width: 50%; float: left;";

    let linkTakePicture = document.createElement("A");
    linkTakePicture.href = "javascript:"+ takePictureMethod;
    linkTakePicture.className = "vu.sop.ui.aPlainLink";

    let imgTakePicture = document.createElement("img");
    imgTakePicture.style = "width: 30%";
    imgTakePicture.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgoJPGc+CgkJPHBhdGggZD0iTTQwMiwxNjZjLTUuNTIsMC0xMCw0LjQ4LTEwLDEwczQuNDgsMTAsMTAsMTBjNS41MiwwLDEwLTQuNDgsMTAtMTBTNDA3LjUyLDE2Niw0MDIsMTY2eiIgZmlsbD0iI2ZmNjYwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQk8cGF0aCBkPSJNNDgyLDEyNkgzNzIuMThsLTMxLjcwNi02My40MTNDMzM1LjM1Nyw1Mi4zNTYsMzI1LjA3NSw0NiwzMTMuNjQsNDZIMTk4LjM2Yy0xMS40MzcsMC0yMS43MTksNi4zNTYtMjYuODM0LDE2LjU4OCAgICBMMTM5LjgyLDEyNkgxMjB2LTEwYzAtMTYuNTQyLTEzLjQ1OC0zMC0zMC0zMEg3MGMtMTYuNTQyLDAtMzAsMTMuNDU4LTMwLDMwdjEwSDMwYy0xNi41NDIsMC0zMCwxMy40NTgtMzAsMzAgICAgYzAsMjcuMTc1LDAsMjY5LjQyOSwwLDI4MGMwLDE2LjU0MiwxMy40NTgsMzAsMzAsMzBoNDUyYzE2LjU0MiwwLDMwLTEzLjQ1OCwzMC0zMGMwLTI3LjE3NSwwLTI2OS40MjksMC0yODAgICAgQzUxMiwxMzkuNDU4LDQ5OC41NDIsMTI2LDQ4MiwxMjZ6IE0xODkuNDE1LDcxLjUzMkMxOTEuMTIxLDY4LjEyLDE5NC41NDgsNjYsMTk4LjM2LDY2aDExNS4yOGMzLjgxMiwwLDcuMjQsMi4xMiw4Ljk0Niw1LjUzMiAgICBMMzQ5LjgyLDEyNkgxNjIuMThMMTg5LjQxNSw3MS41MzJ6IE02MCwxMTZjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGgyMGM1LjUxNCwwLDEwLDQuNDg2LDEwLDEwdjEwSDYwVjExNnogTTIwLDIyNS45aDEyNi40NTEgICAgQzEzMy4xNjEsMjQ2LjY2MSwxMjYsMjcwLjk5MiwxMjYsMjk2YzAsMjUuMDEsNy4xNjIsNDkuMjQzLDIwLjQ1LDcwSDIwVjIyNS45eiBNMjU2LDE4NmM2MC4xMzMsMCwxMTAsNDguNzE5LDExMCwxMTAgICAgYzAsNjEuMjEyLTQ5Ljc5NywxMTAtMTEwLDExMGMtNjAuMjU3LDAtMTEwLTQ4Ljg0Mi0xMTAtMTEwQzE0NiwyMzQuNzk1LDE5NS43OSwxODYsMjU2LDE4NnogTTQ5Miw0MzZjMCw1LjUxNC00LjQ4NiwxMC0xMCwxMEgzMCAgICBjLTUuNTE0LDAtMTAtNC40ODYtMTAtMTB2LTUwaDE0Mi4yMjZjMjQuNDM1LDI1LjQ3Miw1OC4zNDksNDAsOTMuNzc0LDQwYzM1LjQzMSwwLDY5LjM0OC0xNC41MzIsOTMuNzc1LTQwSDQ5MlY0MzZ6IE00OTIsMzY2ICAgIEgzNjUuNTQ5QzM3OC44MzksMzQ1LjIzOSwzODYsMzIxLjAwOSwzODYsMjk2YzAtMjUuMDA5LTcuMTYxLTQ5LjIzOS0yMC40NTEtNzBINDkyVjM2NnogTTQ5MiwyMDZIMzQ5Ljc3NCAgICBjLTI0LjQzNC0yNS40NzItNTguMzQ4LTQwLTkzLjc3NC00MGMtMzUuNDMsMC02OS4zNDcsMTQuNTMyLTkzLjc3NSw0MEgyMHYtNTBjMC01LjUxNCw0LjQ4Ni0xMCwxMC0xMGM5LjA4MSwwLDQzNy45NDIsMCw0NTIsMCAgICBjNS41MTQsMCwxMCw0LjQ4NiwxMCwxMFYyMDZ6IiBmaWxsPSIjZmY2NjAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yODYsODZoLTYwYy01LjUyMywwLTEwLDQuNDc3LTEwLDEwczQuNDc3LDEwLDEwLDEwaDYwYzUuNTIyLDAsMTAtNC40NzcsMTAtMTBTMjkxLjUyMiw4NiwyODYsODZ6IiBmaWxsPSIjZmY2NjAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMjA2Yy00OS42MjYsMC05MCw0MC4zNzQtOTAsOTBjMCw0OS42MjYsNDAuMzc0LDkwLDkwLDkwYzQ5LjYyNiwwLDkwLTQwLjM3NCw5MC05MEMzNDYsMjQ2LjM3NCwzMDUuNjI2LDIwNiwyNTYsMjA2eiAgICAgTTI1NiwzNjZjLTM4LjU5OCwwLTcwLTMxLjQwMi03MC03MGMwLTM4LjU5OCwzMS40MDItNzAsNzAtNzBzNzAsMzEuNDAyLDcwLDcwQzMyNiwzMzQuNTk4LDI5NC41OTgsMzY2LDI1NiwzNjZ6IiBmaWxsPSIjZmY2NjAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik0yNTYsMjQ2Yy0yNy41NywwLTUwLDIyLjQzLTUwLDUwYzAsNS41MjMsNC40NzcsMTAsMTAsMTBzMTAtNC40NzcsMTAtMTBjMC0xNi41NDIsMTMuNDU4LTMwLDMwLTMwICAgIGM1LjUyMiwwLDEwLTQuNDc3LDEwLTEwUzI2MS41MjIsMjQ2LDI1NiwyNDZ6IiBmaWxsPSIjZmY2NjAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCTxwYXRoIGQ9Ik00NjIsMTY2aC0yMGMtNS41MjIsMC0xMCw0LjQ3Ny0xMCwxMHM0LjQ3OCwxMCwxMCwxMGgyMGM1LjUyMiwwLDEwLTQuNDc3LDEwLTEwUzQ2Ny41MjIsMTY2LDQ2MiwxNjZ6IiBmaWxsPSIjZmY2NjAwIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+Cgk8L2c+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPC9nPjwvc3ZnPg=="
    //imgTakePicture.src = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJjYW1lcmEtcmV0cm8iIGNsYXNzPSJzdmctaW5saW5lLS1mYSBmYS1jYW1lcmEtcmV0cm8gZmEtdy0xNiIgcm9sZT0iaW1nIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1MTIgNTEyIj48cGF0aCBmaWxsPSJjdXJyZW50Q29sb3IiIGQ9Ik00OCAzMkMyMS41IDMyIDAgNTMuNSAwIDgwdjM1MmMwIDI2LjUgMjEuNSA0OCA0OCA0OGg0MTZjMjYuNSAwIDQ4LTIxLjUgNDgtNDhWODBjMC0yNi41LTIxLjUtNDgtNDgtNDhINDh6bTAgMzJoMTA2YzMuMyAwIDYgMi43IDYgNnYyMGMwIDMuMy0yLjcgNi02IDZIMzhjLTMuMyAwLTYtMi43LTYtNlY4MGMwLTguOCA3LjItMTYgMTYtMTZ6bTQyNiA5NkgzOGMtMy4zIDAtNi0yLjctNi02di0zNmMwLTMuMyAyLjctNiA2LTZoMTM4bDMwLjItNDUuM2MxLjEtMS43IDMtMi43IDUtMi43SDQ2NGM4LjggMCAxNiA3LjIgMTYgMTZ2NzRjMCAzLjMtMi43IDYtNiA2ek0yNTYgNDI0Yy02Ni4yIDAtMTIwLTUzLjgtMTIwLTEyMHM1My44LTEyMCAxMjAtMTIwIDEyMCA1My44IDEyMCAxMjAtNTMuOCAxMjAtMTIwIDEyMHptMC0yMDhjLTQ4LjUgMC04OCAzOS41LTg4IDg4czM5LjUgODggODggODggODgtMzkuNSA4OC04OC0zOS41LTg4LTg4LTg4em0tNDggMTA0Yy04LjggMC0xNi03LjItMTYtMTYgMC0zNS4zIDI4LjctNjQgNjQtNjQgOC44IDAgMTYgNy4yIDE2IDE2cy03LjIgMTYtMTYgMTZjLTE3LjYgMC0zMiAxNC40LTMyIDMyIDAgOC44LTcuMiAxNi0xNiAxNnoiPjwvcGF0aD48L3N2Zz4=";
    
    let pTakePicture = document.createElement("p");
    pTakePicture.innerHTML = vu.sop.msg.addDocumentCameraIconMsg;

    linkTakePicture.appendChild(imgTakePicture);
    linkTakePicture.appendChild(pTakePicture);

    let divUploadFile = document.createElement("div");
    divUploadFile.style = "width: 49%; float: left; height: 33%";

    let linkUploadFile = document.createElement("A");
    linkUploadFile.href = "javascript:"+ uploadFileMethod;
    linkUploadFile.className = "vu.sop.ui.aPlainLink";

    let imgUploadFile = document.createElement("img");
    imgUploadFile.style = "width: 28.5%; margin-bottom: 5px;";
    imgUploadFile.src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIuMDAwNzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIGlkPSJzdXJmYWNlMSI+CjxwYXRoIGQ9Ik0gMzQ4Ljk0NTMxMiAyMjEuNjQwNjI1IEwgMzQ4Ljk0NTMxMiAxMjQuNzQ2MDk0IEMgMzQ4Ljk0NTMxMiAxMjEuOTcyNjU2IDM0Ny42NjQwNjIgMTE5LjQxMDE1NiAzNDUuODUxNTYyIDExNy4zODI4MTIgTCAyMzcuMjE4NzUgMy4zMDg1OTQgQyAyMzUuMTkxNDA2IDEuMTc1NzgxIDIzMi4zMDg1OTQgMCAyMjkuNDI5Njg4IDAgTCA1Ny4xOTUzMTIgMCBDIDI1LjM5ODQzOCAwIDAgMjUuOTI5Njg4IDAgNTcuNzMwNDY5IEwgMCAzODMuNDE0MDYyIEMgMCA0MTUuMjE0ODQ0IDI1LjM5ODQzOCA0NDAuNzE4NzUgNTcuMTk1MzEyIDQ0MC43MTg3NSBMIDE5My4xNDg0MzggNDQwLjcxODc1IEMgMjE4Ljg2MzI4MSA0ODMuNDAyMzQ0IDI2NS42MDU0NjkgNTEyIDMxOC44NTE1NjIgNTEyIEMgMzk5LjczODI4MSA1MTIgNDY1Ljc5Mjk2OSA0NDYuMjY1NjI1IDQ2NS43OTI5NjkgMzY1LjI3MzQzOCBDIDQ2NS45MDIzNDQgMjk0LjUyMzQzOCA0MTUuMTA1NDY5IDIzNS40MDYyNSAzNDguOTQ1MzEyIDIyMS42NDA2MjUgWiBNIDI0MC4xMDE1NjIgMzcuNDU3MDMxIEwgMzEyLjk4NDM3NSAxMTQuMTc5Njg4IEwgMjY1LjcxMDkzOCAxMTQuMTc5Njg4IEMgMjUxLjYyNSAxMTQuMTc5Njg4IDI0MC4xMDE1NjIgMTAyLjU1MDc4MSAyNDAuMTAxNTYyIDg4LjQ2NDg0NCBaIE0gNTcuMTk1MzEyIDQxOS4zNzUgQyAzNy4yNDIxODggNDE5LjM3NSAyMS4zNDM3NSA0MDMuMzY3MTg4IDIxLjM0Mzc1IDM4My40MTQwNjIgTCAyMS4zNDM3NSA1Ny43MzA0NjkgQyAyMS4zNDM3NSAzNy42Njc5NjkgMzcuMjQyMTg4IDIxLjM0Mzc1IDU3LjE5NTMxMiAyMS4zNDM3NSBMIDIxOC43NTc4MTIgMjEuMzQzNzUgTCAyMTguNzU3ODEyIDg4LjQ2NDg0NCBDIDIxOC43NTc4MTIgMTE0LjM5NDUzMSAyMzkuNzgxMjUgMTM1LjUyMzQzOCAyNjUuNzEwOTM4IDEzNS41MjM0MzggTCAzMjcuNjAxNTYyIDEzNS41MjM0MzggTCAzMjcuNjAxNTYyIDIxOC44NjMyODEgQyAzMjQuNDAyMzQ0IDIxOC43NTc4MTIgMzIxLjgzOTg0NCAyMTguNDM3NSAzMTkuMDY2NDA2IDIxOC40Mzc1IEMgMjgxLjgyNDIxOSAyMTguNDM3NSAyNDcuNTcwMzEyIDIzMi43MzgyODEgMjIxLjc0NjA5NCAyNTUuMTQ4NDM4IEwgODYuMjIyNjU2IDI1NS4xNDg0MzggQyA4MC4zNTE1NjIgMjU1LjE0ODQzOCA3NS41NTA3ODEgMjU5Ljk0OTIxOSA3NS41NTA3ODEgMjY1LjgxNjQwNiBDIDc1LjU1MDc4MSAyNzEuNjg3NSA4MC4zNTE1NjIgMjc2LjQ4ODI4MSA4Ni4yMjI2NTYgMjc2LjQ4ODI4MSBMIDIwMS44OTg0MzggMjc2LjQ4ODI4MSBDIDE5NC4zMjAzMTIgMjg3LjE2MDE1NiAxODguMDIzNDM4IDI5Ny44MzIwMzEgMTgzLjExNzE4OCAzMDkuNTcwMzEyIEwgODYuMjIyNjU2IDMwOS41NzAzMTIgQyA4MC4zNTE1NjIgMzA5LjU3MDMxMiA3NS41NTA3ODEgMzE0LjM3MTA5NCA3NS41NTA3ODEgMzIwLjI0MjE4OCBDIDc1LjU1MDc4MSAzMjYuMTA5Mzc1IDgwLjM1MTU2MiAzMzAuOTE0MDYyIDg2LjIyMjY1NiAzMzAuOTE0MDYyIEwgMTc2LjE3OTY4OCAzMzAuOTE0MDYyIEMgMTczLjUxMTcxOSAzNDEuNTg1OTM4IDE3Mi4xMjUgMzUzLjQyOTY4OCAxNzIuMTI1IDM2NS4yNzM0MzggQyAxNzIuMTI1IDM4NC40ODA0NjkgMTc1Ljg1OTM3NSA0MDMuNDc2NTYyIDE4Mi41ODIwMzEgNDE5LjQ4NDM3NSBMIDU3LjE5NTMxMiA0MTkuNDg0Mzc1IFogTSAzMTguOTYwOTM4IDQ5MC43NjU2MjUgQyAyNDkuODEyNSA0OTAuNzY1NjI1IDE5My41NzQyMTkgNDM0LjUyNzM0NCAxOTMuNTc0MjE5IDM2NS4zNzg5MDYgQyAxOTMuNTc0MjE5IDI5Ni4yMzA0NjkgMjQ5LjcwMzEyNSAyMzkuOTkyMTg4IDMxOC45NjA5MzggMjM5Ljk5MjE4OCBDIDM4OC4yMTQ4NDQgMjM5Ljk5MjE4OCA0NDQuMzQzNzUgMjk2LjIzMDQ2OSA0NDQuMzQzNzUgMzY1LjM3ODkwNiBDIDQ0NC4zNDM3NSA0MzQuNTI3MzQ0IDM4OC4xMDkzNzUgNDkwLjc2NTYyNSAzMTguOTYwOTM4IDQ5MC43NjU2MjUgWiBNIDMxOC45NjA5MzggNDkwLjc2NTYyNSAiIHN0eWxlPSIiIGZpbGw9IiNmZjY2MDAiIGRhdGEtb3JpZ2luYWw9IiMwMDAwMDAiPjwvcGF0aD4KPHBhdGggZD0iTSA4Ni4yMjI2NTYgMjIzLjAyNzM0NCBMIDE5NC4zMjAzMTIgMjIzLjAyNzM0NCBDIDIwMC4xOTE0MDYgMjIzLjAyNzM0NCAyMDQuOTkyMTg4IDIxOC4yMjI2NTYgMjA0Ljk5MjE4OCAyMTIuMzU1NDY5IEMgMjA0Ljk5MjE4OCAyMDYuNDg0Mzc1IDIwMC4xOTE0MDYgMjAxLjY4MzU5NCAxOTQuMzIwMzEyIDIwMS42ODM1OTQgTCA4Ni4yMjI2NTYgMjAxLjY4MzU5NCBDIDgwLjM1MTU2MiAyMDEuNjgzNTk0IDc1LjU1MDc4MSAyMDYuNDg0Mzc1IDc1LjU1MDc4MSAyMTIuMzU1NDY5IEMgNzUuNTUwNzgxIDIxOC4yMjI2NTYgODAuMzUxNTYyIDIyMy4wMjczNDQgODYuMjIyNjU2IDIyMy4wMjczNDQgWiBNIDg2LjIyMjY1NiAyMjMuMDI3MzQ0ICIgc3R5bGU9IiIgZmlsbD0iI2ZmNjYwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPgo8cGF0aCBkPSJNIDMyNi41MzUxNTYgMjg2LjYyNSBDIDMyNC41MDc4MTIgMjg0LjQ5MjE4OCAzMjEuNzM0Mzc1IDI4My4yMTA5MzggMzE4Ljc0NjA5NCAyODMuMjEwOTM4IEMgMzE1Ljc1NzgxMiAyODMuMjEwOTM4IDMxMi45ODQzNzUgMjg0LjQ5MjE4OCAzMTAuOTU3MDMxIDI4Ni42MjUgTCAyNDguNDIxODc1IDM1My43NDYwOTQgQyAyNDQuMzY3MTg4IDM1OC4wMTU2MjUgMjQ0LjY4NzUgMzY0Ljg0Mzc1IDI0OC45NTcwMzEgMzY4Ljc5Mjk2OSBDIDI1My4yMjY1NjIgMzcyLjg0NzY1NiAyNjAuMTYwMTU2IDM3Mi41MjczNDQgMjY0LjIxNDg0NCAzNjguMjYxNzE5IEwgMzA4LjM5NDUzMSAzMjAuOTg4MjgxIEwgMzA4LjM5NDUzMSA0MzcuNTE1NjI1IEMgMzA4LjM5NDUzMSA0NDMuMzg2NzE5IDMxMy4xOTUzMTIgNDQ4LjE4NzUgMzE5LjA2NjQwNiA0NDguMTg3NSBDIDMyNC45MzM1OTQgNDQ4LjE4NzUgMzI5LjczODI4MSA0NDMuMzg2NzE5IDMyOS43MzgyODEgNDM3LjUxNTYyNSBMIDMyOS43MzgyODEgMzIwLjk4ODI4MSBMIDM3My41OTM3NSAzNjguMjYxNzE5IEMgMzc1LjczMDQ2OSAzNzAuNSAzNzguNTAzOTA2IDM3MS42NzU3ODEgMzgxLjM4NjcxOSAzNzEuNjc1NzgxIEMgMzgzLjk0NTMxMiAzNzEuNjc1NzgxIDM4Ni41MDc4MTIgMzcwLjcxNDg0NCAzODguNjQwNjI1IDM2OC43OTI5NjkgQyAzOTIuOTEwMTU2IDM2NC43MzgyODEgMzkzLjIzMDQ2OSAzNTguMDE1NjI1IDM4OS4xNzU3ODEgMzUzLjc0NjA5NCBaIE0gMzI2LjUzNTE1NiAyODYuNjI1ICIgc3R5bGU9IiIgZmlsbD0iI2ZmNjYwMCIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCI+PC9wYXRoPgo8L2c+CjwvZz48L3N2Zz4=";
//imgUploadFile.src = "data:image/svg+xml;base64,PHN2ZyBhcmlhLWhpZGRlbj0idHJ1ZSIgZm9jdXNhYmxlPSJmYWxzZSIgZGF0YS1wcmVmaXg9ImZhcyIgZGF0YS1pY29uPSJmaWxlLXVwbG9hZCIgY2xhc3M9InN2Zy1pbmxpbmUtLWZhIGZhLWZpbGUtdXBsb2FkIGZhLXctMTIiIHJvbGU9ImltZyIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB2aWV3Qm94PSIwIDAgMzg0IDUxMiI+PHBhdGggZmlsbD0iY3VycmVudENvbG9yIiBkPSJNMjI0IDEzNlYwSDI0QzEwLjcgMCAwIDEwLjcgMCAyNHY0NjRjMCAxMy4zIDEwLjcgMjQgMjQgMjRoMzM2YzEzLjMgMCAyNC0xMC43IDI0LTI0VjE2MEgyNDhjLTEzLjIgMC0yNC0xMC44LTI0LTI0em02NS4xOCAyMTYuMDFIMjI0djgwYzAgOC44NC03LjE2IDE2LTE2IDE2aC0zMmMtOC44NCAwLTE2LTcuMTYtMTYtMTZ2LTgwSDk0LjgyYy0xNC4yOCAwLTIxLjQxLTE3LjI5LTExLjI3LTI3LjM2bDk2LjQyLTk1LjdjNi42NS02LjYxIDE3LjM5LTYuNjEgMjQuMDQgMGw5Ni40MiA5NS43YzEwLjE1IDEwLjA3IDMuMDMgMjcuMzYtMTEuMjUgMjcuMzZ6TTM3NyAxMDVMMjc5LjEgN2MtNC41LTQuNS0xMC42LTctMTctN0gyNTZ2MTI4aDEyOHYtNi4xYzAtNi4zLTIuNS0xMi40LTctMTYuOXoiPjwvcGF0aD48L3N2Zz4=";
           
    let pUploadFile = document.createElement("p");
    pUploadFile.innerHTML = vu.sop.msg.addDocumentFileIconMsg;

    linkUploadFile.appendChild(imgUploadFile);
    linkUploadFile.appendChild(pUploadFile);

    divTakePicture.appendChild(linkTakePicture);
    divUploadFile.appendChild(linkUploadFile);
    divContainer.appendChild(divTakePicture);
    divContainer.appendChild(divUploadFile);
    return divContainer;
}

vu.sop.ui.alertResolve = null
vu.sop.ui.alert = async function(msg) {
    let promise = new Promise(function(resolve, reject) {
        vu.sop.ui.show('vu.sop.ui.alert')
        vu.sop.ui.alertResolve = resolve
        let divContainer = vu.sop.ui.alertDraw(msg, vu.sop.ui.alertClose);
        document.getElementById("vu.sop.ui.alert").appendChild(divContainer);
    });
    return promise
};

vu.sop.ui.alertClose = function() {
    vu.sop.ui.hide('vu.sop.ui.alert')
    document.getElementById("vu.sop.ui.alert").innerHTML = "";
    vu.sop.ui.alertResolve(true)
}

vu.sop.ui.disabled =  async function(id){
    return document.getElementById(id).disabled  = true;
};

vu.sop.ui.enable =  async function(id){
    return document.getElementById(id).disabled  = false;
};

vu.sop.ui.hide =  async function(id){
    return document.getElementById(id).style.display = "none";
};

vu.sop.ui.show =  async function(id){
    return document.getElementById(id).style.display = "block";
};

vu.sop.ui.showWhiteLoading = async function() {
    return await vu.sop.ui.show('vu.sop.ui.whiteLoading');
};

vu.sop.ui.hideWhiteLoading = async function() {
    return await vu.sop.ui.hide('vu.sop.ui.whiteLoading');
};

vu.sop.ui.showLoading = async function() {
    return await vu.sop.ui.show("vu.sop.ui.loading");
};

vu.sop.ui.hideLoading = async function() {
    return await vu.sop.ui.hide("vu.sop.ui.loading");
};

vu.sop.ui.showVideo = async function() {
    return await vu.sop.ui.show("vu.sop.ui.videoContainer");
};

vu.sop.ui.showBottomText = async function(text) {
    document.getElementById("vu.sop.ui.bottomText").innerHTML = text;
    await vu.sop.ui.show("vu.sop.ui.bottomText");
};

vu.sop.ui.hideBottomText = async function() {
    return await vu.sop.ui.hide("vu.sop.ui.bottomText");
};

vu.sop.ui.bottomTextBackGroundColor = function(color) {
    document.getElementById("vu.sop.ui.bottomText").style.backgroundColor = color;
};

vu.sop.ui.bottomTextFontFamily = function(fontFamily) {
    document.getElementById("vu.sop.ui.bottomText").style.fontFamily = fontFamily;
};

vu.sop.ui.bottomTextFontSize = function(fontSize) {
    document.getElementById("vu.sop.ui.bottomText").style.fontSize = fontSize;
};

vu.sop.ui.bottomTextFontWeight = function(fontWeight) {
    document.getElementById("vu.sop.ui.bottomText").style.fontWeight = fontWeight;
};

vu.sop.ui.bottomTextFontStyle = function(fontStyle) {
    document.getElementById("vu.sop.ui.bottomText").style.fontStyle = fontStyle;
};

vu.sop.ui.bottomTextColor = function(color) {
    document.getElementById("vu.sop.ui.bottomText").style.color = color;
};

vu.sop.ui.flash = async function() {
    document.getElementById('vu.sop.ui.flash').style.display = "block";
    await vu.sop.ui.sleep(100)
    document.getElementById('vu.sop.ui.flash').style.display = "none";
    return true;
};

vu.sop.ui.sleep = function(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
};

vu.sop.ui.flipVideoHorizontal = function(videoElement) {
    videoElement.style.WebkitTransform = "translate(-50%, -50%) rotateY(180deg)";
    videoElement.style.msTransform = "translate(-50%, -50%) rotateY(180deg)";
    videoElement.style.transform = "translate(-50%, -50%) rotateY(180deg) ";
};

vu.sop.ui.keepVideoHorizontal = function(videoElement) {
    videoElement.style.WebkitTransform = "translate(-50%, -50%) rotateY(0deg)";
    videoElement.style.msTransform = "translate(-50%, -50%) rotateY(0deg)";
    videoElement.style.transform = "translate(-50%, -50%) rotateY(0deg)";
};

vu.sop.ui.isMobile = function() {
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        // true for mobile device
        return true
    } else {
        // false for not mobile device
        return false
    }
}


vu.sop.ui.isDeviceCompatible = function() {
    const gl2 = document.createElement('canvas').getContext('webgl2');
    if (gl2) {
        console.log('webgl2 works!');
        return true
    }
    const gl1 = document.createElement('canvas').getContext('webgl');
    if (gl1) {
        floatExt = gl1.getExtension("OES_TEXTURE_FLOAT");
        if (floatExt) {
            console.log('webgl1 and support OES_TEXTURE_FLOAT!');
            return true
        }
        halfFloatExt = gl1.getExtension("OES_TEXTURE_HALF_FLOAT");
        if (halfFloatExt) {
            console.log('webgl1 and support OES_TEXTURE_HALF_FLOAT!');
            return true
        }
    }
    return false
}

vu.sop.ui.isBrowserCompatible = function() {
    const { userAgent } = navigator
    if(userAgent.includes('Chrome/')) {
        var raw = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
        chromeVersion =  raw ? parseInt(raw[2], 10) : false;
        console.log('Browser is Chrome', chromeVersion)
        if (chromeVersion < 87) {
            throw new Error('browserOldVersion')
        }
    } else if(userAgent.includes('AppleWebKit/')) {
        appleWebKitVersion = parseInt(userAgent.split('AppleWebKit/')[1])
        console.log('Browser is Safari', appleWebKitVersion)
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            iosVersion = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            console.log('SO Version', iosVersion)
            if (iosVersion[0] > 14) {
                throw new Error('osOldVersion')
            }
            if (iosVersion[0] === 14) {
                if (iosVersion[1] > 3) {
                    throw new Error('osOldVersion')
                }
            }
        }
        if (appleWebKitVersion > 604) {
            throw new Error('browserOldVersion')
        }
    } else if(userAgent.includes('Safari/')) {
        safariVersion = parseInt(userAgent.split('Safari/')[1])
        console.log('Browser is Safari', safariVersion)
        if (/iP(hone|od|ad)/.test(navigator.platform)) {
            var v = (navigator.appVersion).match(/OS (\d+)_(\d+)_?(\d+)?/);
            iosVersion = [parseInt(v[1], 10), parseInt(v[2], 10), parseInt(v[3] || 0, 10)];
            console.log('SO Version', iosVersion)
            if (iosVersion[0] > 14) {
                throw new Error('osOldVersion')
            }
            if (iosVersion[0] === 14) {
                if (iosVersion[1] > 3) {
                    throw new Error('osOldVersion')
                }
            }
        }
        if (safariVersion > 604) {
            throw new Error('browserOldVersion')
        }
    } else if(userAgent.includes('Firefox/')){
        firefoxVersion = parseInt(userAgent.split('Firefox/')[1])
        console.log('Browser is Firefox', firefoxVersion)
        if (firefoxVersion < 84) {
            throw new Error('browserOldVersion')
        }
    } else if (userAgent.includes('Edg/')) {
        edgeVersion = parseInt(userAgent.split('Edg/')[1])
        console.log('Browser is Microsoft Edge', edgeVersion)
        if (edgeVersion < 87) {
            throw new Error('browserOldVersion')
        }
    } else {
        throw new Error('browserUnsupported')
    }
}


//---------------------------------------------------
// Username
//---------------------------------------------------

if (typeof vu.sop.ui.user == "undefined") { vu.sop.ui.user = function() {} }

vu.sop.ui.user.start = async function() {
    await vu.sop.ui.show("vu.sop.ui.userContainer");
    let promise = new Promise(function(resolve, reject) {
        vu.sop.ui.user.start.resolve = resolve
        vu.sop.ui.user.start.reject = reject
    });
    return promise;
};

vu.sop.ui.user.start.resolve = null;
vu.sop.ui.user.start.reject = null;

vu.sop.ui.user.hide = async function() {
    return await vu.sop.ui.hide("vu.sop.ui.userContainer");
};

vu.sop.ui.user.do  = async function() {
    await vu.sop.ui.disabled('vu.sop.ui.userNameSendBtn');
    await vu.sop.ui.showWhiteLoading();
    let userName = document.getElementById("vu.sop.ui.userName").value;
    vu.sop.userNameValue = userName;
    try {
        response = await vu.sop.api.newOperation(userName);
    } catch (error) {
        response = {code: 0, message: vu.sop.msg.userComunicationError}
        //throw new Error(error)
    }
    await vu.sop.ui.hideWhiteLoading();
    if (response.code === 901) {
        await vu.sop.ui.enable('vu.sop.ui.userNameSendBtn')
        vu.sop.operationIdValue = response.operationId;
        vu.sop.operationGuidValue = response.operationGuid;
        await vu.sop.ui.user.hide();
        await vu.sop.ui.showVideo();
        vu.sop.ui.user.start.resolve(true)
        //return true
    } else {
        console.log('newOperation', 'error', response);
        //await vu.sop.ui.enable('vu.sop.ui.userNameSendBtn')
        //await vu.sop.ui.alert(response.message);
        vu.sop.ui.user.start.reject('error')
        //throw new Error('error')
    }
};


