define(["jquery", "greeting"], function($){

        var App = App || {};

        App.init = function(){
            console.log("here");
          $('[data-action]').each(function(){
              $(this).on("click", function(event){
                  var $this = $(this),
                  data = $(this).data();

                  App.actions[$(this).data("action")]($this, data);

                  event.preventDefault();
              });
          });

        };

        App.actions = {

          showSection: function($this, data){
              var greetingTemplate = templates["greeting"],
                      listTemplate = templates["todolist"];

              var templatedata = {"name":"Simon"};
              var listData = {
                "list":[
                    {"item":"bread"},
                    {"item":"milk"},
                    {"item":"sugar"}
                ]  
              };

              $("#showArea").html( greetingTemplate.render(templatedata) );
               $("#showArea").after("<div>" + listTemplate.render(listData) + "</div>");
          }

        };

return App;

});
