$(function () {
    // 1.实现文件预览：一选择文件就实现文件预览
    $('#inputCover').on('change', function () {
        // 1.获取文件对象
        let myfile = this.files[0]
        // 2.生成url
        let url = URL.createObjectURL(myfile)
        // 3.赋值给img标签的src属性
        $('.article_cover').attr('src', url)
    })

    // 2.实现分类数据的动态渲染
    $.ajax({
        url: BigNew.category_list,
        dataType: 'json',
        success: function (res) {
            console.log(res)
            if (res.code == 200) {
                // 模板中使用的是我们所传递的数据对象的属性名称
                $('.category').html(template('cateTemp', res))
            }
        }
    })

    // 3.日期插件初始化
    jeDate('#artcileDate', {
        trigger: 'click',
        // bgcolor:背景色   pnColor：本月和下月及上月的分隔色
        theme: { bgcolor:"orange",pnColor:"blue" },//red色主题
        format: "YYYY-MM-DD",
        isinitVal: true,
    })

    // 发表文章
    $('.btn-release').on('click',function(e){
        e.preventDefault()
        // FormData:传入的表单必须是dom元素
        let formdata = new FormData($('#form')[0])
        console.log(...formdata)
    })

})