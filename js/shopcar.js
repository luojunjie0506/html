$(function() {
    // 全选
    $('.checkAll').change(function() {
        var index = $(this).prop('checked')
        $('.item_title .item_title_l>input').prop('checked',index)
        $('.item_body .t-checkbox>input').prop('checked',index)
        $('.checkAll').prop('checked',index)
        getSum()
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
        getSum()
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
        getSum()
    })
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
        getSum()
    })
    $('.jia').click(function() {
        $(this).prop('href','javascript:;')
        var num = $(this).siblings('.shuliang').val()
        var price = $(this).parents('.t-num').siblings('.t-price').text()
        num ++
        $(this).siblings('.shuliang').val(num)
        var sum = num * price
        $(this).parents('.t-num').siblings('.t-sum').text(sum.toFixed(2))
        getSum()
    })
    // 单品删除
    $('.shopcar_item .t-action>a:even').click(function() {
        // 用该元素的父元素的兄弟元素个数来判断该元素是不是最后一个,如果是就把该shopcar_item都删掉
        var num = $(this).parents().eq(-6).siblings().length  
        if(num == 0 ) {
            $(this).parents('.shopcar_item').remove()
        }
        $(this).parents().eq(-6).remove()
        getSum()
    })
    // 选择删除
    $('.del_xz').click(function() {
        $('.item_body .t-checkbox>input:checked').each(function(i,ele) {
            $(ele).parents().eq(-6).remove()
        })
        getSum()
    })
    // 全部删除
    $('.del_all').click(function() {
        $('.shopcar_item').each(function(i,ele) {
            $(ele).remove()
        })
        getSum()
    })
})

// 计算购物车总计的方法
function getSum() {
    // 金额
    var shopcar_sum = 0
    var shopcar_num = 0
    // 循环单选框,判断如果勾选上的话数量和总金额就加起来
    $('.item_body .t-checkbox>input').each(function(i,ele) {
        if($(ele).prop('checked') == true) {
            var money = parseFloat($(this).parents('.t-checkbox').siblings('.t-sum').text())
            var num = parseInt($(this).parents('ul').find('.shuliang').val()) 
            // var num = parseFloat($(this).parents('.t-checkbox').siblings('.t-sum')
            shopcar_sum += money
            shopcar_num += num
        }
    })
    $('.shopcar_sum').html(shopcar_sum.toFixed(2))
    $('.shopcar_num').html(shopcar_num)
}


