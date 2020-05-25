$(function(){
    // 1.数据初始化
    // 10、文章搜索
    // 请求地址：/admin/article/query
    // 请求方式：get

    // 定义几个变量
    let page = 1, // 当前页码
    perpage = 8 // 每页显示的数量
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
                    // 渲染文章列表
                    $('tbody').html(template('articleTemp',res.data))
                    // 渲染分页结构  totalPage:直接返回了总页数
                    setPage(res.data.totalPage)
                }
            }
        })
    }
    init()

    // 实现分页功能
    // pageSum:总页数
    function setPage( pageSum) {
        //  $(".pagination").bootstrapPaginator:调用bootstrapPaginator生成分页结构，并放置到$(".pagination")元素中
        $(".pagination").bootstrapPaginator({
            //设置版本号
            bootstrapMajorVersion: 3,
            // 当前页码
            currentPage: page,
            // 总页数
            totalPages: pageSum,
            //当单击操作按钮的时候, 执行该函数, 调用ajax渲染页面
            onPageClicked: function (event,originalEvent,type,cpage) {
                // init()
                // cpage就是我们当前所单击的页码值，意味着我们只需要按照这个页码值进行ajax请求，就能够获取到当前页的数据
                console.log(cpage)
                if(page != cpage){
                    page = cpage
                    // 根据新的页码值重新发起请求
                    init()
                }
            }
        })
    }


    // 动态加载文章分类数据
    $.ajax({
        url: BigNew.category_list,
        dataType: 'json',
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                // 模板中使用的是我们所传递的数据对象的属性名称
                $('#selCategory').html(template('cateTemp', res))
            }
        }
    })
})