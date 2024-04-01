function toggleMode() {
  const html = document.documentElement
  //
  //if (html.classList.contains("light")) {
  //html.classList.remove("light")
  //}// else {
  //html.classList.add("light")
  //}
  html.classList.toggle("light")

  const img = document.querySelector("#profile img")

  if (html.classList.contains("light")) {
    img.setAttribute("src", "../assets/assets/Avatar-light.png")
    img.setAttribute("alt", maikbrito)
  } else {
    img.setAttribute("src", "./assets/assets/Avatar1.png")
    img.setAttribute("alt", bgalvao)
  }
}
