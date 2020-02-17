window.onload = function () {
    
    let screen = document.getElementById("screen");
    let ul = screen.children[0];
    let ol = screen.children[1];
    let div = screen.children[2];
    let imgWidth = screen.offsetWidth;

    let tempLi = ul.children[0].cloneNode(true);
    ul.appendChild(tempLi);
    for(let i = 0; i < ul.children.length - 1; i++) {
        let newOlLi = document.createElement("li");
        newOlLi.innerHTML = i + 1;
        ol.appendChild(newOlLi);
    }
    let olLiArr = ol.children;
    olLiArr[0].className = "current";
    let len = olLiArr.length;
    for(let i = 0; i < len; i++) {
        olLiArr[i].index = i;
        olLiArr[i].onmouseover = function (ev) {
            for(let j = 0; j < len; j++) {
                olLiArr[j].className = "";
            }
            this.className = "current";
            flag = square = this.index;
            animate(ul, -this.index * imgWidth);
        }
    }
    let flag = 0;
    let square = 0;
    let timer = setInterval(autoPlay, 5000);
    screen.onmouseover = function () {
        clearInterval(timer);
        div.style.display = "block";
    }
    screen.onmouseout = function () {
        timer = setInterval(autoPlay, 5000);
        div.style.display = "none";
    }
    let divArr = div.children;
    divArr[0].onclick = function () {
        flag--;
        if(flag < 0) {
            ul.style.left = -(ul.children.length-1) * imgWidth + "px";
           flag = 4;
        }
        animate(ul, -flag * imgWidth);
        square--;
        if(square < 0) {
            square = 4;
        }
        for(var k = 0; k < len; k++) {
            olLiArr[k].className = "";
        }
        olLiArr[square].className = "current";
    }
    divArr[1].onclick = autoPlay;
    function autoPlay() {
        flag++;
        if(flag > ul.children.length - 1) {
            ul.style.left = 0;
            flag = 1;
        }
        animate(ul, -flag * imgWidth);
        square++;
        if(square > 2) {
            square = 0;
        }
        for( k = 0; k < len; k++) {
            olLiArr[k].className = "";
        }
        olLiArr[square].className = "current";
    }
    function animate(ele,target){
            clearInterval(ele.timer);
            var speed = target>ele.offsetLeft?10:-10;
            ele.timer = setInterval(function () {
                var val = target - ele.offsetLeft;
                ele.style.left = ele.offsetLeft + speed + "px";
                if(Math.abs(val)<Math.abs(speed)){
                    ele.style.left = target + "px";
                    clearInterval(ele.timer);
                }
            },5)  
    }

    function gethtmlfontsize(){
        let htmlwidth=document.documentElement.clientWidth || document.body.clientWidth;
        console.log(htmlwidth);
        
        let htmlDom=document.getElementsByTagName("html")[0]
        console.log(htmlDom);
        if(htmlwidth<=375){
        htmlDom.style.fontSize=htmlwidth/20+'px';
        let nav =document.getElementsByClassName('nav');
        nav[0].style.width=htmlwidth
    }
    }
    gethtmlfontsize();

    window.addEventListener('resize',gethtmlfontsize)
 
}
