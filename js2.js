window.onload = () => {
    let inquire = document.getElementById('b');
    let inquire0 = document.getElementById('c');
    window.onkeydown = function(event) {
        if (event.keyCode === 13) {
            let require = document.getElementById('b').value;
            let require0 = document.getElementById('c').value;
            if (!require) {
                alert('不设密码等着白给？');
            } else {
                let myreg = /^(?=.*?[0-9A-Za-z]{8,})(?=.*?[0-9]+)(?=.*?[A-Z]+)(?=.*?[a-z]+).*$/
                let x = require;
                if (myreg.test(x)) {
                    if (require === require0) {
                        alert('好了');
                    } else {
                        alert('两次不一样');
                    }
                } else {
                    alert('这密码等着白给吧');
                }
                require.innerHTML = '';
                require0.innerHTML = '';
            }


        }
    }
    let button1 = document.getElementById('e');
    let button2 = document.getElementById('f');
    let button3 = document.getElementById('g');
    let button4 = document.getElementById('h');
    button1.onclick = () => {
        //   var inquire = document.getElementById('b');
        //   var require1 = document.getElementById('b').value;
        //   var newtext = document.createElement('text');
        //   newtext.innerHTML = require1;
        //   var newinput = document.createElement('input');
        //   newinput.type='text';
        //   newinput.innerHTML=newtext;
        //   var a = document.getElementById('a');
        //   a.removeChild(inquire);
        //   button1.insertAdjacentElement('beforeBegin',newinput);
        //   newinput.style.cssText = "margin-left:40px;display:block;background-color:orange;font-size:20px;line-height:20px;width:300px;height:auto;border:2px solid #FFE4C4;"
        inquire.type = "text";
    }
    button2.onclick = () => {
        inquire0.type = "text";
    }
    button3.onclick = () => {
        inquire.type = "password";
    }
    button4.onclick = () => {
        inquire0.type = "password";
    }
}