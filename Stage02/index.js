checkImage();

function checkImage() {
  var imgList = document.getElementsByTagName("img");
  for (var i = 0; i < imgList.length; i++) {
    imgList[i].onclick = function () {
      window.open(
        this.src,
        "My Image",
        "resizable=yes,scrollbars=yes, width=1024, height=768"
      );
      console.log("image clicked");
    };
  }
}
