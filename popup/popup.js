const w = 200
const h = 250
const canvas = document.querySelector('#myCanvas')
const ratio = window.devicePixelRatio || 1;
canvas.width = w * ratio
canvas.height = h * ratio
canvas.style.width = w + 'px'
canvas.style.height = h + 'px'
var ctx = canvas.getContext('2d')
ctx.scale(ratio, ratio)

const backcircle = new Path2D();
backcircle.arc(40, 220, 25, 0, 2 * Math.PI);
ctx.fill(backcircle);

const menucircle = new Path2D();
menucircle.arc(160, 220, 25, 0, 2 * Math.PI);
ctx.fill(menucircle);

ctx.beginPath();
ctx.arc(100, 100, 90, 0, 2 * Math.PI);
ctx.fill();


ctx.beginPath();
ctx.arc(100, 100, 55, 0, 2 * Math.PI);
ctx.fillStyle = '#fff'
ctx.fill();

ctx.beginPath();
ctx.arc(100, 25, 5, 0, 2 * Math.PI);
ctx.fillStyle = '#fff'
ctx.fill();

ctx.beginPath();
ctx.arc(100, 175, 5, 0, 2 * Math.PI);
ctx.fillStyle = '#fff'
ctx.fill();

ctx.beginPath();
ctx.arc(25, 100, 5, 0, 2 * Math.PI);
ctx.fillStyle = '#fff'
ctx.fill();

ctx.beginPath();
ctx.arc(175, 100, 5, 0, 2 * Math.PI);
ctx.fillStyle = '#fff'
ctx.fill();

ctx.font = "16px self"
ctx.fillText('返回', 23.5, 225)
ctx.fillText('菜单', 145.5, 225)
ctx.fillStyle = '#000'
ctx.fillText('OK', 87.5, 106)



canvas.addEventListener('click', function (e) {
    const rect = canvas.getBoundingClientRect()

    const xdiff = e.x - rect.x
    const ydiff = e.y - rect.y

    if (xdiff > 0) {
        if (ydiff > 0) {
            if (xdiff > 45 && xdiff < 155 && ydiff < 45) {
                triggerEvent('top')
            }

            if (xdiff > 45 && xdiff < 155 && ydiff > 155 && ydiff < 200) {
                triggerEvent('bottom')
            }

            if (xdiff < 45 && ydiff > 45 && ydiff < 155) {
                triggerEvent('left')

            }

            if (xdiff > 155 && ydiff > 45 && ydiff < 155) {
                triggerEvent('right')

            }

            if (xdiff > 45 && xdiff < 155 && ydiff > 45 && ydiff < 155) {
                triggerEvent('center')

            }

        }
    }


    if (ctx.isPointInPath(backcircle, e.offsetX, e.offsetY)) {
        triggerEvent('goback')

    }

    if (ctx.isPointInPath(menucircle, e.offsetX, e.offsetY)) {
        triggerEvent('home')

    }
})


function triggerEvent(posi) {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, { posi }, function (response) {
        });
    });
}
