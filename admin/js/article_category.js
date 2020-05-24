$(function(){
    // 1.动态渲染分类数据
    // 5、所有文章类别
    // 请求地址：/admin/category/list
    // 请求方式：get
    // 请求参数：无

    // 数据初始化
    function init(){
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
    }
    init()

    // 实现分类数据的新增
    // 6、新增文章类别
    // 请求地址：/admin/category/add
    // 请求方式：post

    $('.btnadd').on('click',function(){
        // 收集数据
        let name = $('#name').val()
        let slug = $('#slug').val()
        if(name.trim() == "" || slug.trim() == ""){
            alert('请输入名称和别名')
            return
        }
        // ajax
        $.ajax({
            type:'post',
            url:BigNew.category_add,
            data:{
                name,slug
            },
            dataType:"json",
            success:function(res){
                console.log(res)
                if(res.code == 201){
                    // 提示信息
                    alert(res.msg)
                    // 隐藏模态框
                    $('#myModal').modal('hide')
                    // 清空表单元素的数据，有一个原生方法reset可以实现这个效果
                    $('form')[0].reset()
                    // 刷新--局部刷新
                    init()
                }
            }
        })
    })
})