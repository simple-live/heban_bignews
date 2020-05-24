$(function () {
    let page = 1,perpage=8
    function init() {
        $.ajax({
            url: BigNew.article_query,
            data: { page, perpage },
            dataType: 'json',
            success: function (res) {
                console.log(res);
                if (res.code == 200) {
                    $('tbody').html(template('articleTemp',res.data))
                }
            }
        })
    }
    init()
})