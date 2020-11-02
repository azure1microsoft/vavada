jQuery(function($){
    $('#true_loadmore').click(function(){
        $(this).text('Загружаю...'); // изменяем текст кнопки, вы также можете добавить прелоадер
        var data = {
            'action': 'loadmore',
            'query': true_posts,
            'page' : current_page
        };
        $.ajax({
            url:ajaxurl, // обработчик
            data:data, // данные
            type:'POST', // тип запроса
            success:function(data){
                console.log(data);
                if( data ) {
                    $('#true_loadmore').text('Ещё игры').before(data); // вставляем новые посты
                    current_page++; // увеличиваем номер страницы на единицу
                    if (current_page == max_pages){
                        $("#true_loadmore").remove(); // если последняя страница, удаляем кнопку
                        $('#line_breaker').remove();
                    }
                } else {
                    $('#true_loadmore').remove(); // если мы дошли до последней страницы постов, скроем кнопку
                    $('#line_breaker').remove();
                }
            }
        });
    });
});