function ajaxRegistered(r_u,r_p){//r_u is username, r_p is password
    //console.log('comes to here ',r_u,r_p)
    /*
    * it will send to back end to registered 
    * if it work it will send back registered successfully
    * else it will say it doesn't work
    */
    $.ajax({
        url : 'http://127.0.0.1:5000/registered',
        data : {"r_u" : r_u,
                "r_p" : r_p,},
        dataType : 'json',
        type : 'POST',
        success : function(result){
            console.log(result.resultType)
            if (result.resultType == 'warning'){
                
                Alerting(result.resultType,result.resultMessage)
            }
            if (result.resultType == 'success'){
                Alerting(result.resultType,result.resultMessage)
            }

        },
        error : function(result){
            console.log('error!',result)
            
        }
    })

}