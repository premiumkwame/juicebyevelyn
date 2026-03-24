// show after 3 seconds
setTimeout(function(){
    document.getElementById("promo").style.display = "flex";
}, 3000);

// close function
function closePromo() {
    document.getElementById("promo").style.display = "none";
}

// show popup after 8 seconds
setTimeout(function(){
    document.getElementById("mc_embed_shell").style.display ="flex"
},8000);

// close popup when X is clicked
document.querySelector(".close-btn").addEventListener("click",function(){
    document.getElementById("mc_embed_shell").style.display ="none";
})

// close popup when clicking outside content
document.getElementById("mc_embed_shell").addEventListener("click", function(e){
    if(e.target=== this){ 
        this.style.display ="none";     
    }
}); 