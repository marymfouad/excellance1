function myFunction(text) {
    var dots,moreText,btnText;
   if(text=='p1')
   {
    dots=document.getElementById('dots');
    moreText=document.getElementById('more');
    btnText=document.getElementById('see-more');

   }
   else
   {
    dots=document.getElementById('dots2');
    moreText=document.getElementById('more2');
    btnText=document.getElementById('see-more2');

   }
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } 
    else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }

  }