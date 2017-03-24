var app = angular.module('myApp', []);
app.component("hcompontent",{
  templateUrl: 'hcompontent.html',
  bindings: {
    abc: '='
  },
  controller: ['$scope',function($scope) {

    $scope.users = [];
    $scope.isShow1 = false;
    $scope.isShow2 = false;
    $scope.currentEditUser = null;
   for(var i=0;i<localStorage.length;i++){   
  	        var str=localStorage.getItem(localStorage.key(i)); 
  	        var user= JSON.parse(str);
            $scope.users.push(user);
   }
   //删除用户
   $scope.deleteUser=function(user){
       $scope.users.forEach( function(item,index){
          if( item.username === user.username ){
            $scope.users.splice(index, 1);
            localStorage.removeItem(user.username);
          }
       });
   }
   //弹出修改用户信息div
    $scope.editUser=function($event,user){
       $scope.isShow1 = true;
       $scope.currentEditUser = user;
       $scope.currentEditUser.birth = new Date(user.birth);
       var ele = angular.element( document.getElementById("dialog") );
       ele.css( {
         left:($event.clientX -80)  + "px",
         top:$event.clientY + "px",
       });
   }
   //查看用户信息
    $scope.checkUser=function(user){
       $scope.isShow2= true;
       $scope.currentEditUser = user;
      $scope.currentEditUser.birth = new Date(user.birth);
       var ele = angular.element( document.getElementById("dialog") );
       ele.css( {
         left:($event.clientX)  + "px",
         top:$event.clientY + "px",
       });
    }
    //修改或保存用户信息
     $scope.saveUser=function(){
          $scope.isShow1 = false;
          var user=$scope.currentEditUser;
          localStorage.setItem(user.username,angular.toJson(user));
        
    }
    $scope.hide=function(){
        $scope.isShow2 = false;
    }
  }],
});

