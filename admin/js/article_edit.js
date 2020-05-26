$(function(){
    // 1.获取id
    // search获取当前请求url中?及后面的内容
    // split的方式只能处理单个参数的情况
    // let id = location.search.split('=')[1]
    let id = itcast.getArguments(location.search).id
    
    // 根据id获取文件详情数据
    // 12、根据id获取文章信息
    // 请求地址：/admin/article/search
    // 请求方式：get
    $.ajax({
        url:BigNew.article_search,
        data:{id},
        dataType:'json',
        success:function(res){
            console.log(res)
            if(res.code == 200){
                $('#inputTitle').val(res.data.title)
                $('.article_cover').attr('src',res.data.cover)
                // 下拉列表：下拉列表赋值的值的两种方式
                // 1.赋值字符串--不常见
                // 2.赋值value值，它会找到与value值匹配的选项进行显示
                $(".category").val(res.data.categoryId)
                $('#artcileDate').val(res.data.date)
                // 富文本框
                $('#articlecontent').val(res.data.content)
            }
        }
    })
})