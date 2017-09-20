define(['jquery'],function($){
    //工具函数
return{
    setMenu:function(path){
      $('.navs a[href="'+path+'"]').addClass('active');
    },
    qs:function(key){
        //获取url参数中指定的参数值
        //param是所有的参数
        var param=location.search.substring(1);
        var result=null;
        if(param){
         var kvs=param.split('&');
         $.each(kvs,function(i,item){
            var kv=item.split('=');
            if(key==kv[0]){
                //找到对应参数
                result =kv[1];
                return false;
            }
         });
       }
       return result;
    }
  }
});