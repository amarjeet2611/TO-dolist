

function ajaxRequest(method, url, data, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url, true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          callback(null, xhr.responseText);
        } else {
          callback(new Error("AJAX request failed"));
        }
      }
    };
    xhr.send(data);
  }
  
  function ajaxPost(url, data, callback) {
    ajaxRequest("POST", url, data, callback);
  }
  
  function ajaxGet(url, callback) {
    ajaxRequest("GET", url, null, callback);
  }
  