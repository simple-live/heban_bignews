$(function(){
    let page = 1,perpage = 6
    // 获取评论数据
    // 19、文章评论搜索
    // 请求地址：/admin/comment/search
    // 请求方式：get

    function init(){
        $.ajax({
            // 访问一个对象不存在的属性，会得到undefined,访问一个不存在的变量，会报错
            // 如果写错的url相当于设置url为undefeind,那么ajax会默认将url设置为pathname
            url:BigNew.comment_search,
            data:{
                page,
                perpage
            },
            dataType:'json',
            success:function(res){
                console.log(res)
                if(res.code == 200){
                    // 生成评论列表
                    $('tbody').html(template('commentTemp',res.data))
                    // 生成分页结构
                    setPage(res.data.totalPage)
                }
            }
        })
    }
    init()

    // 封装分页方法
    // pageSum:总页数
    function setPage(pageSum){
        // bootstrapPaginator：实现分页的核心方法
        $('#pagination').bootstrapPaginator({
            bootstrapMajorVersion:3, // 设置版本号，版本号不一样，放置分页结构的dom元素不一样
            currentPage:page,// 当前页码
            totalPages:pageSum,//总页数，它会根据这个值生成合理的页码结构
            // 参数传递一一对应原则：数量对应，“顺序对应”，类型对应
            onPageClicked:function(event,originalEvent,type,cpage){
                // cpage：就是用户当前所单击的页码
                // 我们接下来的ajax请求就需要查询这个页码的数据
                // 修改全局的page,因为在ajax中是参照这个page进行数据的查询的
                page = cpage
                init()
            }
        })
    }
})