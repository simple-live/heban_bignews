$(function(){
    // 1.动态渲染分类数据
    // 5、所有文章类别
    // 请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无

    $.ajax({
       url:BigNew.category_list,
       dataType:'json',
       success:function(res){
        console.log(res)
        if(res.code == 200){
            // 模板中使用的是我们所传递的数据对象的属性名称
            $('tbody').html(template('cateTemp',res))
        }
       }
    })
})