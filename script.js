function toggleMode(){
  const html = document.documentElement
  html.classList.toggle('light')

  const img = document.querySelector("#profile-image")
  if(html.classList.contains('light')){
    img.setAttribute("src", "assets/avatar.png")
  }else{
    img.setAttribute("src", "assets/avatar.png")
  }

  //if(html.classList.contains('light')){
  //  html.classList.remove('light')
  //}else{
  //  html.classList.add('light')
  //}
  
}