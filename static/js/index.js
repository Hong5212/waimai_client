//rem适配
(function (width) {
  var size = document.documentElement.clientWidth / (width / 100);
  document.documentElement.style.fontSize = size + "px";
  document.body.style.fontSize = "14px";
})(375);
