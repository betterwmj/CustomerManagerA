var app = angular.module('myApp', []);
app.component("logincompontent",{
  templateUrl: 'logincompontent.html',
  bindings: {    
  },
  controller: ['$scope',function($scope) {
      $scope.user = {
               userName:"",
               pass:""
      };
      $scope.login=function(){   
                if($scope.user.userName==""||$scope.user.pass==""||$scope.user.userName==null||$scope.user.pass==null)
                     window.alert("用户名或密码为空");
                else{
                        var flag=true;
                        for(var i=0;i<localStorage.length;i++){   
  	                        var str=localStorage.getItem(localStorage.key(i)); 
  	                        var data= JSON.parse(str); 
  	                        if($scope.user.userName==data.username&&$scope.user.pass==data.pass){ 
  	        	                 flag=false; 
                               break;
                             }
                      }
                      if(flag==false)
                         location.href="homepage.html";
                      else
                          window.alert("用户名或密码错误");
                }
           }

  }],
});
