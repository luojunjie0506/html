window.addEventListener('load',function() {
    // 动态生成小圆点
    var focus = document.querySelector('.focus')
    var list_img = document.querySelector('.gun').querySelectorAll('li')
    var list_quan = document.querySelector('.list')
    var gun = document.querySelector('.gun')
    for(var i=0; i<list_img.length-1; i++) {
        var li = document.createElement('li')
        // 给创建的小圆点加一个自定义属性index
        li.setAttribute('index',i)
        list_quan.appendChild(li)
        // 给li绑定点击事件
        li.addEventListener('click',function() {
            for(var i=0; i<list_img.length-1; i++ ) {
                list_quan.children[i].className = ''
            }
            this.className = 'current'
            var index = this.getAttribute('index')
            num = index
            circle = index
            yidongjuli = -focus.offsetWidth * index 
            animate(gun,yidongjuli)
        })
    }
    

    // 把第一个的小圆点设置为选中状态
    list_quan.children[0].className = 'current'

    // 左右按钮的显示和隐藏
    var prev = document.querySelector('.prev')
    var next = document.querySelector('.next')
    focus.addEventListener('mouseover',function() {
        prev.style.display = 'block'
        next.style.display = 'block'
        clearInterval(timer)
    })
    focus.addEventListener('mouseout',function() {
        prev.style.display = 'none'
        next.style.display = 'none'
        timer =setInterval(function() {
            next.click()
        },2000)
    })

    // 左右按钮的功能
    var num = 0 //第几张图片的参数
    var circle = 0 // circle 控制小圆圈的播放
    var flag = true // 节流阀
    next.addEventListener('click',function() {
        if(flag) {
            flag = false //关闭节流阀
            if(num == list_img.length-1) {
                num = 0
                gun.style.left = '0px'
            }
            num++
            animate(gun,-focus.offsetWidth * num,function() {
                flag = true;
            })
            // 点击左右按钮小圆圈的变化
            circle++
            if(circle == list_quan.children.length) {
                circle = 0
            }
            for(var i=0; i<list_img.length-1; i++ ) {
                list_quan.children[i].className = ''
            }
            list_quan.children[circle].className = 'current'   
        } 
    })
    
    prev.addEventListener('click',function() {
        if(flag) {
            flag = false //关闭节流阀
            if(num == 0) {
                num = list_img.length-1
                gun.style.left = -focus.offsetWidth * num  +'px'
            }
            num-- 
            animate(gun,-focus.offsetWidth * num,function() {
                flag = true
            })
            // 点击左右按钮小圆圈的变化
            circle-- 
            if(circle < 0 ) {
                circle = list_quan.children.length - 1
            }
            for(var i=0; i<list_img.length-1; i++ ) {
                list_quan.children[i].className = ''
            }
            console.log(circle)
            list_quan.children[circle].className = 'current'
        }
    })

    // 自动播放
    var timer = setInterval(function() {
        next.click()
    },2000)

})

