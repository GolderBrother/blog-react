/* 
	GolderBrother's JavaScript Document.
	After Miaowei Classroom learning, completely write their own code library.
*/



/*1---------$()使用  开始---------*/

function $(v) {
    if (typeof v === 'function') { //如果等于函数，就在页面加载完之后执行代码
        window.onload = v;
    } else if (typeof v === 'string') { //如果等于字符串，那么就查找id
        return document.getElementById(v);
    } else if (typeof v === 'object') { //如果等于对象，就直接返回对象
        return v;
    }
}

/*---------$()使用  结束---------*/



/*2---------getElementsByClassName()使用  查找页面的class元素  开始---------*/
/*
	obj == 父元素,如果没有父元素，可以使用document
	tagName ==  子元素，如果想查找所有的子元素，可以使用'*'
	className == 页面中的class
	使用方法：
	getElementsByClassName(父元素,子元素,页面中的class)
*/
function getElementsByClassName(obj, tagName, className) {
    let aEls = obj.getElementsByTagName(tagName); //obj是什么盒子下的tagName标签
    let arr = []; //建立一个空的数组
    for (let i = 0; i < aEls.length; i++) { //循环下盒子下面有多少tagName标签
        let aClassName = aEls[i].className.split(' '); //如果class的'box box1'中间具有空格，就拆分了
        for (let j = 0; j < aClassName.length; j++) { //然后循环拆分的数组里面
            if (aClassName[j] == className) { //如果这个数组等于我们想要的
                arr.push(aEls[i]); //那么就加到arr数组里面
                break; //并且跳出去，避免脑残们的手误给元素增加相同的class
            }
        }
    }
    return arr; //最后返回arr给getElementsByClassName
};
/*---------getElementsByClassName()  结束---------*/



/*3---------addClass(盒子，class) removeClass(盒子，class)  开始---------*/
function addClass(obj, className) {
    if (obj.className == '') { //如果原来没有Class
        obj.className = className; //那么传进去的值就等于ClassName
    } else {
        //如果有class
        //如果添加的class在原本的class中不存在
        let arrClassName = obj.className.split(' '); //把obj的className字符串分割成数组
        let _index = arrIndexof(arrClassName, className); //详情见封装的arrIndexOf(arr.v)
        if (_index == -1) { //如果没有找到要添加的Class
            obj.className += ' ' + className; //那么obj的className就+= 空格+className
        }

        //如果添加的class在原本的class中存在
    }
}

function removeClass(obj, className) {
    if (obj.className != '') { //如果原本有Class
        let arrClassName = obj.className.split(' '); //那么就把原本的Class分割成数组形式
        let _index = arrIndexof(arrClassName, className); //详情见封装的arrIndexOf(arr.v)
        //如果有我们要移除的class
        if (_index != -1) { //如果不等于-1就表示有需要移除的
            arrClassName.splice(_index, 1); //那么就从_index的位置，删除1位
            obj.className = arrClassName.join(' '); //并且转换成字符串形式
        }
    }
    //如果原本没有Class
}

function arrIndexOf(arr, v) { //arr等于分割后的数组，v等于要本身有的Class
    for (let i = 0; i < arr.length; i++) { //开始循环数组
        if (arr[i] == v) { //如果数组某个值等于V，也就是要本身有的Class
            return i; //那么返回第几个位置也就是i

        }
    }
    return -1; //如果没有就返回-1
}
/*---------addClass() removeClass()  结束---------*/



/*4---------getStyle()，盒子计算后显示结果  开始---------*/

//获取计算后的盒子样式，obj填写盒子，attr填写宽或者高，包括透明度等等
function getStyle(obj, attr) {
    return obj.currentStyle ? obj.currentStyle[attr] : getComputedStyle(obj)[attr];
}

/*---------getStyle()，盒子计算后显示结果  结束---------*/





/*5---------doMove()，可以动的盒子  开始---------*/

//obj是盒子  attr是要走的宽或者高  dir是步长，target是到达的位置，endfn是可以继续执行的函数
function doMove(obj, attr, dir, target, endFn) {

    dir = parseInt(getStyle(obj, attr)) < target ? dir : -dir;

    clearInterval(obj.timer);

    obj.timer = setInterval(function () {

        let speed = parseInt(getStyle(obj, attr)) + dir; // 步长

        if (speed > target && dir > 0 || speed < target && dir < 0) {
            speed = target;
        }

        obj.style[attr] = speed + 'px';

        if (speed == target) {
            clearInterval(obj.timer);

            /*
            if ( endFn ) {
            	endFn();
            }
            */
            endFn && endFn();

        }

    }, 30);
}

/*6---------doMove()，可以动的盒子  结束--------*/






/*7---------shake()，可以抖动的盒子  开始---------*/

//抖函数，obj是盒子，attr是top或者left，endFn是可以执行另外的函数 shake( this, 'left');
function shake(obj, attr, endFn) {
    let pos = parseInt(getStyle(obj, attr));
    let arr = []; // 20, -20, 18, -18 ..... 0
    let num = 0;
    let timer = null;

    for (let i = 20; i > 0; i -= 2) {
        arr.push(i, -i);
    }
    arr.push(0);
    if (obj.onOff !== true) { //开关如果不等于true，就执行下面的代码 注：避免重复使用抖
        clearInterval(obj.shake);
        obj.shake = setInterval(function () {
            obj.onOff = true; //开始执行的时候，一直为true，但是这里的true是关闭
            obj.style[attr] = pos + arr[num] + 'px';
            num++;
            if (num === arr.length) {
                clearInterval(obj.shake);
                endFn && endFn();
                obj.onOff = false; //执行完之后，就变成flase，然后又可以开始点击
            }
        }, 50);
    }
}

/*---------shake()，可以抖动的盒子  结束---------*/


/*8---------hide()，渐隐 obj是盒子，sec是渐隐时间，endFn是继续执行的函数---------*/
function hide(obj, cy, sec, endFn) {
    let timer = null;
    let fadeNum = Number(getStyle(obj, 'opacity') * 100);
    let fadeNum1 = Number(getStyle(obj, 'opacity'));

    timer = setInterval(function () {
        fadeNum -= 10;
        fadeNum1 -= 0.1;
        obj.style.filter = "alpha(opacity=" + fadeNum + ")";
        obj.style['-moz-opacity'] = fadeNum1;
        obj.style['-khtml-opacity'] = fadeNum1;
        obj.style.opacity = fadeNum1;
        if (fadeNum == cy * 100 || fadeNum1 == cy) {
            clearInterval(timer);
            endFn && endFn();
        }
    }, sec);
}

/*---------hide()，渐隐---------*/



/*9---------out()，渐出 obj是盒子，sec是渐出时间，endFn是继续执行的函数---------*/
function out(obj, cy, sec, endFn) {
    let timer = null;
    let fadeNum = Number(getStyle(obj, 'opacity') * 100);
    let fadeNum1 = Number(getStyle(obj, 'opacity'));
    timer = setInterval(function () {
        fadeNum += 10;
        fadeNum1 += 0.1;
        obj.style.filter = "alpha(opacity=" + fadeNum + ")";
        obj.style['-moz-opacity'] = fadeNum1;
        obj.style['-khtml-opacity'] = fadeNum1;
        obj.style.opacity = fadeNum1;
        if (fadeNum == cy * 100 || fadeNum1 == cy) {
            clearInterval(timer);
            endFn && endFn();
        }
    }, sec);
}

/*---------out()，渐出---------*/




/*10---------getPos()，获取div到body的宽或者高，开始---------*/
/*
	使用方法：
			let p = getPos( oDiv3 );	//p等于pos的json值
			alert( p.top );				//所以调用时可以直接调用p.left或者p.top

*/
function getPos(obj) { //判断的就是盒子，如果循环到最上面时，盒子就无法判断，也就为false

    let pos = {
        left: 0,
        top: 0
    }; //使用json让下面可以获得到left和top两种值

    while (obj) {
        pos.left += obj.offsetLeft; //left获得当前元素到父级元素的left宽度
        pos.top += obj.offsetTop; //left获得当前元素到父级元素的top高度
        obj = obj.offsetParent; //找到div盒子的父级元素，然后继续循环
    }

    return pos; //返回的实际也是json

}

/*---------getPos()，获取div到body的宽或者高，结束---------*/


/*---------drag()，推拽，obj写要推拽的物体，里面可以修改磁性吸附效果，开始---------*/
function drag(obj) {
    obj.onmousedown = function (ev) { //1、先按下
        let ev = ev || event; //兼容ev
        let disX = ev.clientX - this.offsetLeft; //获取鼠标到最左边的值减去盒子到最左边的值，等于属于距离盒子左边距离的值
        let disY = ev.clientY - this.offsetTop; //同上，只是是高度

        if (obj.setCapture) { //全部捕获，解决拖拽问题
            obj.setCapture();
        }


        document.onmousemove = function (ev) { //2、按下时移动
            let ev = ev || event;
            let L = ev.clientX - disX;
            let T = ev.clientY - disY;
            if (L < 0) { //特别注意！！！！把0改为100，可以成为磁性吸附的效果
                L = 0;
            } else if (L > document.documentElement.clientWidth - obj.offsetWidth) {
                L = document.documentElement.clientWidth - obj.offsetWidth;
            }
            if (T < 0) {
                T = 0;
            } else if (T > document.documentElement.clientHeight - obj.offsetHeight) {
                T = document.documentElement.clientHeight - obj.offsetHeight;
            }
            obj.style.left = ev.clientX - disX + 'px';
            obj.style.top = ev.clientY - disY + 'px';
        }


        document.onmouseup = function () { //3、抬起

            document.onmousemove = null;
            if (obj.releaseCapture) { //解除全部捕获，解决拖拽问题
                obj.releaseCapture();
            }
        }

        return false;
    }
}
/*---------drag()，结束---------*/


/*---------transition过渡完成事件,addEnd(obj(盒子),fn(增加的函数)),removeEnd(obj,fn)开始---------*/
/*
	.box{width:100px;height:100px;background:red; transition:1s width;} //这里就不需要box：hover了，用js同样可以达到hover的效果
	<div class="box"></div>

	let oBox=document.getElementById("box");
	oBox.onclick=function()						//如果点击了那么就开始执行
	{
		this.style.width=this.offsetWidth+100+"px";	//会开始进行过渡
		addEnd(oBox,end);						//然后过渡完成之后，再继续执行任务
	};	
	function end()								//这里是任务，会开始继续加宽100px
	{
		this.style.width=this.offsetWidth+100+"px";
		removeEnd(this,end);					//然后删除掉这个任务
	}

	//兼容处理
	function addEnd(obj,fn)		//过渡完成后加事件
	{
		obj.addEventListener('WebkitTransitionEnd',fn,false);
		obj.addEventListener('transitionend',fn,false);
	}

	function removeEnd(obj,fn)	//删除事件
	{
		obj.removeEventListener('WebkitTransitionEnd',fn,false);
		obj.removeEventListener('transitionend',fn,false);
	}

*/

//下面是兼容处理

function addEnd(obj, fn) //过渡完成后加事件
{
    obj.addEventListener('WebkitTransitionEnd', fn, false);
    obj.addEventListener('transitionend', fn, false);
}

function removeEnd(obj, fn) //删除事件
{
    obj.removeEventListener('WebkitTransitionEnd', fn, false);
    obj.removeEventListener('transitionend', fn, false);
}

/*---------transition过渡完成事件结束---------*/