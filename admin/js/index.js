$(function(){
    // 2、获取用户信息
    // 请求地址：/admin/user/info
    // 请求方式：get
    // 请求参数：无

    // 页面一加载，就请求用户信息
    $.ajax({
        url:'http://localhost:8080/api/v1/admin/user/info',
        dataType:'json',
        // 通过请求头的方式传递token数据，并且键只能使用Authorization
        // headers:
        // 请求发送前来设置请求头，这个函数有一个默认参数xhr,它就是那个异步对象
        // xhr.setrequestHeader('Content-type','application...')
        // beforeSend:function(xhr){
        //     xhr.setRequestHeader('Authorization',localStorage.getItem('heban_bignews_token'))
        // },
        // 请求成功的回调函数
        success:function(res){
            console.log(res)
            if(res.code == 200){
                $('.user_info > img').attr('src',res.data.userPic)
                $('.user_info > span').html('欢迎你&nbsp;&nbsp;'+res.data.nickname)
            }
        },
        // 使用error专门处理请求失败的场景
        // error:function(err){
        //     console.log(err)
        //     if(err.statusText == 'Forbidden'){ // Forbidden说明token已过期
        //         alert('请求失败，请重新登陆')
        //         location.href='./login.html'
        //     }
        // }
    })
})