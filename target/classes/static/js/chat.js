 $(function(){
 let initApplication = function()
 {
        $('.messages-and-users').css({display: 'flex'});
        $('.controls').css({display: 'flex'});

        $('.send-message').on('click',function()
        {
        let message = $('.new-message').val();
        $.post('/message',{message: message},function(response){
                    if(response.result) {
                        $('.new-message').val('');
                    }else{
                        alert('Error!');
                        }
                });
        });
    };

 let registerUser = function(name)
 {
    $.post('/auth', {name:name},function(response){
        if(response.result) {
            initApplication();
            }
    });
 };

 $.get('/init', {},function(response){
    if(!response.result)
    {
        let name = prompt('Type you name');
        registerUser(name);
        return;
    }
        initApplication();
    });
});