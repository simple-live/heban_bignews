$(function(){
    // 3、获取用户详情
    // 请求地址：/admin/user/detail
    // 请求方式：get

    // 页面加载，立刻发起ajax请求获取用户详情
    $.ajax({
        url:BigNew.user_detail,
        dataType:'json',
        success:function(res){
            console.log(res)
            // 操作dom
            $('[name="username"]').val(res.data.username)
            $('[name="nickname"]').val(res.data.nickname)
            $('[name="email"]').val(res.data.email)
            $('[name="password"]').val(res.data.password)
            // 图片
            $('.user_pic').attr('src',res.data.userPic)
        }
    })
})