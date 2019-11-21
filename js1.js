window.onload = () => {
    // var inquire = document.getElementById('require');
    var button = document.getElementById('submit');
    // var newtext = document.createElement('text');
    // newtext.innerHTML = require;
    button.onclick = () => {
        var require = document.getElementById('require').value;
        if (isNaN(require)) {
            alert('电话号码，数字啊，想啥呢？');
        } else if (!require) {
            alert('还是整点东西吧');
        } else {
            let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
            let number = require;
            if (myreg.test(number)) {
                alert('提交成功');
            } else {
                alert('格式有错误');
            }
            require.innerHTML = '';
        }
    }
    window.onkeydown = function(event) {
        if (event.keyCode === 13) {
            var require = document.getElementById('require').value;
            if (isNaN(require)) {
                alert('电话号码，数字啊，想啥呢？');
            } else if (!require) {
                alert('还是整点东西吧');
            } else {
                let myreg = /^[1][3,4,5,7,8][0-9]{9}$/;
                let number = require;
                if (myreg.test(number)) {
                    alert('提交成功');
                } else {
                    alert('格式有错误');
                }
                require.innerHTML = '';
            }


        }
    }
}
// 555555测试