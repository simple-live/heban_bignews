$(function(){
    // 1.实现文件预览：一选择文件就实现文件预览
    $('#inputCover').on('change',function(){
        // 1.获取文件对象
        let myfile = this.files[0]
        // 2.生成url
        let url = URL.createObjectURL(myfile)
        // 3.赋值给img标签的src属性
        $('.article_cover').attr('src',url)
    })
})