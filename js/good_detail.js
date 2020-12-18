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
    pic.addEventListener('mouseover',function() {
        mask.style.display = 'block'
    })
})
