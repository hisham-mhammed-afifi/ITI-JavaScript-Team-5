const oReq = new XMLHttpRequest();

class XHRequest {
  get(url, callback) {
    oReq.open("GET", url);
    oReq.send();
    oReq.onload = callback;
  }
}

const xhr = new XHRequest();
