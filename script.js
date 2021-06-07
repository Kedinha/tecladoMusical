const keys = document.querySelectorAll(".keyboard > div")

function markout(key) {
  key.classList.remove("selected")
  // console.log("markout");
}

keys.forEach(function (key) {
  key.onmousedown = function () {
    // console.log("mark");
    key.classList.add("selected")
  }

  key.onmouseup = () => markout(key)
  key.onmouseleave = () => markout(key)
})