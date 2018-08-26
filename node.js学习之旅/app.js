var a = 100;
/**
 * 原型练习
 */
//注意使用环境变量

function fn(){
    var a = 200;
    
    function fn2(){
        var a = 300;
        console.log(a);
    }
    
    fn2();
}

fn();