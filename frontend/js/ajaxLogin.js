function ajaxLogin(l_u,l_p){//r_u is username, r_p is password
    //console.log('comes to here ',r_u,r_p)
    /*
    * it will send to back end to registered 
    * if it work it will send back registered successfully
    * else it will say it doesn't work
    */
   console.log('it comes ajax login')
    $.ajax({
        url : 'http://127.0.0.1:5000/login',
        data : {"l_u" : l_u,
                "l_p" : l_p,},
        dataType : 'json',
        type : 'POST',
        success : function(result){
            console.log(result)
            if (result.resultType == 'warning'){
                
                Alerting(result.resultType,result.resultMessage)
            }
            if (result.resultType == 'success'){
                $.session.set('userId', result.userId)
                $.session.set('userPa', result.userPa)
                console.log($.session.get('userId'))
                Alerting(result.resultType,result.resultMessage)
                loadCenter()
                location.reload(true)
            }

        },
        error : function(result){
            console.log('error!',result)
            
        }
    })

}