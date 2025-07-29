//your JS code here. If required.
let images=document.querySelectorAll(".card-img-top");

let carousel=document.querySelector(".carousel.slide")

let cardImages=document.querySelector(".card-group,.row");

let carouselItem=document.querySelectorAll(".carousel-item");



images.forEach(img=>{
  img.addEventListener("click",()=>{
    let id=parseInt(img.id);
    // console.log(id)
    carousel.classList.remove("d-none")
    cardImages.classList.add("d-none");

    carouselItem.forEach(item=>item.classList.remove("active"))

    if(carouselItem[id]){
      carouselItem[id].classList.add("active")
    }
    

    
  })
})

document.addEventListener("click", function (event) {
  if (!carousel.contains(event.target) &&!event.target.classList.contains("card-img-top")) {
    carousel.classList.add("d-none");
    cardImages.classList.remove("d-none");
  }
});
