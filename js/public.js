// 动画函数封装
function animate(obj,target,callback) {
    clearInterval(obj.timer)
    obj.timer = setInterval(function() {
        var step = (target - obj.offsetLeft)/10
        step = step>0 ? Math.ceil(step):Math.floor(step)
        if(obj.offsetLeft == target) {
            clearInterval(obj.timer)
            // if() {
            //     callback()
            // }
            // 高级写法
            // &&是或的意思,如果前为真,就会执行callback()
            callback && callback()
        }
        obj.style.left = obj.offsetLeft + step  +'px'
    },15)
}
