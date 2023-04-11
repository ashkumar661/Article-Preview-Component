const shareOptions = document.querySelector('.share-options');

document.querySelector('.share-button').addEventListener('click',()=>{
    if(shareOptions.style.visibility!="visible") {
        shareOptions.style.visibility="visible";
    }
    else{
        shareOptions.style.visibility="hidden";
    }
})