var app = angular.module('myApp', []);
app.component("rcompontent",{
  templateUrl: 'rcompontent.html',
  bindings: {
    abc: '='
  },
  controller: ['$scope',function($scope) {
       $scope.user = {
           username:"",
           pass:"",
           pass2:"",
           sex:"",
           birth:""
      };
    $scope.zhuce=function(){
     var reg =/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;
     if($scope.myForm.$valid){
           if($scope.user.sex=="")
               window.alert("请选择性别");
           else if($scope.user.birth=="")
               window.alert("请选择出生日期");
           else if(!$scope.user.pass.match(reg))
                 window.alert("密码不规范，密码由数字和字母组成，长度为6-20位，请重新输入!");
           else {
                 var flag=true;
                 for(var i=0;i<localStorage.length;i++){   
  	                 var str=localStorage.getItem(localStorage.key(i)); 
  	                 var data= JSON.parse(str); 
  	                 if($scope.user.username==data.username){ 
  	        	         flag=false; 
                          break;
                    }
                 }
                if(flag==false)
                     window.alert("该用户已存在，请重新输入用户名");
                 else{
                    var user={
                    username:$scope.user.username,
                    pass: $scope.user.pass,
                    sex:  $scope.user.sex,
                    birth:$scope.user.birth,
                }
                 localStorage.setItem(user.username,angular.toJson(user));
                 window.alert("注册成功");
           }
         }
     }
    }
  }],
});
