$(function(){
    //交易区选择
    $('.arrow-down').on('click', function(){
        if($(this).attr('data-index') === 'false'){
            $('.trade-area-change').addClass('arrow-up');
            $('.trade-area-bg').css('display','block');
            $(this).attr('data-index','true');
            $('#area-content').show()
        }else{
            $('.trade-area-change').removeClass('arrow-up');
            $(this).attr('data-index','false');
            $('.trade-area-bg').css('display','none');
        }

    });
    $('.trade-area-bg').on('click', function(){
        $('.trade-area-change').removeClass('arrow-up');
        $(this).attr('data-index','false');
        $('.arrow-down').attr('data-index','false');
        $('.trade-area-bg').css('display','none');
    });
});