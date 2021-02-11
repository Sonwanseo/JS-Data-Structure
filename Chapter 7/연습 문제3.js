// HTML
/*
<button id="one">Button 1</button>
<button id="two">Button 2</button>
*/

// JavaScript
var one = document.querySelector('#one');
var two = document.querySelector('#two');

function callBackExample() {
    one.removeEventListener('', callBackExample);
}

one.addEventListener('hover', function () {
    two.remove();
    console.log(two); // 삭제 이후에도 HTML을 출력한다.
});
two.addEventListener('hover', function () {
    one.remove();
    console.log(one); // 삭제 이후에도 HTML을 출력한다.
});

// DOM 메모리 누수 현상
// 항목들을 제거했지만 여전히 콜백함수에서 참조한다.

// HTML
/*
<button id="one">Button 1</button>
<button id="two">Button 2</button>
*/

// JavaScript
var one = document.querySelector('#one');
var two = document.querySelector('#two');

function callbackOne() {
    var two = document.querySelector('#two');

    if (!two) return;

    two.remove();
    one.removeEventListener('hover', callbackOne);
};
function callbackTwo() {
    var one = document.querySelector('#one');

    if (!one) return;

    one.remove();
    two.removeEventListener('hover', callbackTwo);
};

one.addEventListener('click', callbackOne);
two.addEventListener('click', callbackTwo);