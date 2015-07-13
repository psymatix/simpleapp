requirejs.config({
    paths: {
       
        'jquery': 'jquery-1.9.0/jquery.min',
        'greeting':'../../compiled_templates/greeting'
        
    }
});



requirejs(['app'], function(app){
    app.init();
});

