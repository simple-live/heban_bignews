$(function(){
    // 1.数据初始化
    // 10、文章搜索
    // 请求地址：/admin/article/query
    // 请求方式：get

    // 定义几个变量
    let page = 1,perpage = 8
    function init(){
        $.ajax({
            url:BigNew.article_query,
            data:{
                page,
                perpage
            },
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    $('tbody').html(template('articleTemp',res.data))
                }
            }
        })
    }
    init()
})