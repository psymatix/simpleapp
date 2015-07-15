//initialization script

requirejs.config({
    paths: {
       
        'jquery': 'jquery-1.9.0/jquery.min',
        'greeting':'../../compiled_templates/greeting'
        
    }
});


//initialize app
requirejs(['app'], function(app){
    var cfg = {
     //  "templateType":"preCompiled"
    };
    
    app.init(cfg);
    
});

