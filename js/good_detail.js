window.addEventListener('load',function() {
    var detail = document.querySelector('.detail_r_x_bh').querySelectorAll('li')
    var canshu = document.querySelectorAll('.canshu')
    for(var i=0; i<detail.length; i++) {
        detail[i].onclick = function() {
            for(var b=0; b<detail.length; b++) {
                detail[b].className = ''
                detail[b].setAttribute('index',b)
            }
            this.className = 'red'
            for(var c=0; c<detail.length; c++) {
                canshu[c].style.display = 'none'
            }
            var num = this.getAttribute('index')
            canshu[num].style.display = 'block'
        }
    }
    var pic = document.querySelector('.pic')
    var mask = document.querySelector('.mask')
    var big_box = document.querySelector('.big_box')
    var detail_bd_1 = document.querySelector('.detail_bd_1')
    var big_img = document.querySelector('.big_img')
    pic.addEventListener('mouseover',function() {
        mask.style.display = 'block'
        big_box.style.display = 'block'

    })
    pic.addEventListener('mouseout',function() {
        mask.style.display = 'none'
        big_box.style.display = 'none'
    })
    pic.addEventListener('mousemove',function(e) {
        //鼠标在pic盒子最大移动距离
        var picXMax = pic.offsetWidth - mask.offsetWidth
        var picYMax = pic.offsetHeight - mask.offsetHeight
        // 鼠标在pic盒子的坐标,要让鼠标在mask遮罩层中间要减去遮罩层的一半
        var picX = e.pageX - detail_bd_1.offsetLeft - mask.offsetWidth/2
        var picY = e.pageY - detail_bd_1.offsetTop - mask.offsetHeight/2
        // 限制遮罩层只能在pic盒子移动
        if(picX <= 0 ) {
            picX = 0
        } else if(picX >= picXMax ) {
            picX = picXMax
        }
        if(picY <= 0 ) {
            picY = 0
        } else if(picY >= picYMax ) {
            picY = picYMax
        }
        mask.style.top = picY + 'px'
        mask.style.left = picX + 'px'
        
        var bigXMax = big_img.offsetWidth - big_box.offsetWidth
        var bigYMax = big_img.offsetHeight - big_box.offsetHeight
        //通过小盒子的坐标/最大移动距离得到大盒子big_img中图片的移动距离
        var bigX = picX / picXMax * bigXMax
        var bigY = picY / picYMax * bigYMax
        big_img.style.top = 0 - bigY + 'px'
        big_img.style.left = 0 - bigX + 'px'

    })
})
