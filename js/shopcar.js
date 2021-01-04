$(function() {
    // 全选
    $('.checkAll').change(function() {
        var index = $(this).prop('checked')
        $('.item_title .item_title_l>input').prop('checked',index)
        $('.item_body .t-checkbox>input').prop('checked',index)
        $('.checkAll').prop('checked',index)
    })
    // 店铺选择
    $('.item_title .item_title_l>input').change(function() {
        var index = $(this).prop('checked')
        $(this).parents('.item_title').siblings('.item_body').find('.t-checkbox>input').prop('checked',index)
        // 如果两个店铺都勾上,那就把全选勾上
        var len = $('.item_title .item_title_l>input').length
        if($('.item_title .item_title_l>input:checked').length == len ) {
            $('.checkAll').prop('checked',true)
        } else {
            $('.checkAll').prop('checked',false)
        }
    })
    // 种类的选择
    $('.shopcar_item').mousemove(function() {
        var zl_len = $(this).find('.t-checkbox>input').length
        var xz_len = $(this).find('.t-checkbox>input:checked').length
        if(zl_len == xz_len) {
            $(this).find('.item_title .item_title_l>input').prop('checked',true)
            if($('.item_title .item_title_l>input:checked').length == $('.item_title .item_title_l>input').length) {
                $('.checkAll').prop('checked',true)
            } else {
                $('.checkAll').prop('checked',false)
            }
        } else {
            $(this).find('.item_title .item_title_l>input').prop('checked',false)
        }
    })
    $().sum()
    // 数量加减
    $('.jian').click(function() {
        $(this).prop('href','javascript:;')
        var num = $(this).siblings('.shuliang').val()
        var price = $(this).parents('.t-num').siblings('.t-price').text()
        console.log(price)
        if(num == 0 ) {
            num = 0
        } else {
            num -- 
        }
        var sum = num * price
        $(this).siblings('.shuliang').val(num)
        $(this).parents('.t-num').siblings('.t-sum').text(sum.toFixed(2))
        $().sum()
    })
    $('.jia').click(function() {
        $(this).prop('href','javascript:;')
        var num = $(this).siblings('.shuliang').val()
        var price = $(this).parents('.t-num').siblings('.t-price').text()
        num ++
        $(this).siblings('.shuliang').val(num)
        var sum = num * price
        $(this).parents('.t-num').siblings('.t-sum').text(sum.toFixed(2))
        $().sum()
    }) 
})

// 计算购物车总计的方法
jQuery.fn.sum=function(){
    // 金额
    var shopcar_sum = 0
    $('.shopcar_item .t-sum').each(function(i,ele) {
        shopcar_sum += parseFloat($(ele).text())
    })
    $('.shopcar_sum').html(shopcar_sum.toFixed(2))
}


