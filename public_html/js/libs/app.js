define(["jquery", "greeting"], function($){

        var App = App || {};
        
      

        App.init = function(cfg){
            console.log("here");  
            App.config = cfg || {};

          $('[data-action]').each(function(){
              $(this).on("click", function(event){
                  var $this = $(this),
                  data = $(this).data();

                  App.actions[$(this).data("action")]($this, data);

                  event.preventDefault();
              });
          });

        };

App.template = function(templateName,templateData){
    
    var templateType = App.config.templateType ? App.config.templateType : "runtimeCompiled";
    
    switch(templateType){
        case "preCompiled":
                return templates[ templateName ].render( templateData ) ;
            break;
            
        default:
           //use global template data var
           App.templateData = templateData;
           
           var pluginref = "text!",
           templatepath = "../../templates/" + templateName + ".mustache";

           var dep = pluginref + templatepath;
           
           require([dep,templateData], function(t){
                             
                  var compiled = Hogan.compile(t),
                  rendered = compiled.render( templateData );
                  console.log(rendered);
                 
              });
              
            break;
        
    }
}

        App.actions = {

          showSection: function($this, data){
              
            var templatedata = {"name":"Simon"},
                 listData = {
                "list":[
                    {"item":"bread"},
                    {"item":"milk"},
                    {"item":"sugar"}
                ]  
              };;
             
            //App.template("greeting", templatedata);
             App.template("todolist", listData);
            
            //  $("#showArea").html( App.template("greeting", templatedata) );
              // $("#showArea").after("<div>" + listTemplate.render(listData) + "</div>");
          }

        };

return App;

});
