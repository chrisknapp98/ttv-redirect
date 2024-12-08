const currentUrl = window.location.href
const params = currentUrl.split("#")
const redirectUrl = "minttv://authresponse"
if (params != undefined && params != null && params.length > 1) {
  window.location.replace(redirectUrl + "#" + params[1]) 
}
