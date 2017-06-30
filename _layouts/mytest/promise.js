function runAsync(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成');
            resolve('随便什么数据');
        }, 2000);
    });

    return p;
}

function runAsync1(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成1111');
            resolve('随便什么数据1111');
        }, 2000);
    });

    return p;
}

function runAsync2(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成222');
            resolve('随便什么数据2222');
        }, 2000);
    });

    return p;
}

function runAsync3(){
    var p = new Promise(function(resolve, reject){
        //做一些异步操作
        setTimeout(function(){
            console.log('执行完成333');
            resolve('随便什么数据333');
        }, 2000);
    });

    return p;
}


// runAsync().then(function(data){
//     console.log('sck',data);
// });


runAsync1()
.then(function(data){
    console.log(data);
    return runAsync2();
})
.then(function(data){
    console.log(data);
    return runAsync3();
})
.then(function(data){
    console.log(data);
});