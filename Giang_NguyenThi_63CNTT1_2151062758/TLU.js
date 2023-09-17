var index=1;
changeImage=function(){
    var imgs = ['web1.jpg','web2.jpg','web3.jpg','web4.jpg'];
    document.getElementById('img').src= imgs[index];
    index++;
    if(index==4){
        index=0;
    }
}
setInterval(changeImage,2000);
