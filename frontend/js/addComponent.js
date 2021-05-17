function addComponent(){
//添加主界面图
    $.ajax({
        url : 'http://127.0.0.1:5000/loadP1',
        data : {},
        dataType : 'json',
        type : 'POST',
        success : function(result){
            len = result.length
            
            console.log('the length of page is',len)
            console.log(result)
            for(var i=0;i<len;i++){
                $('#Component').append((
                    "<div class='col'>"+
                "</br>"+
                    "<div class='card mb-3' style='max-width: 540px;'>"+
                "  <div class='row no-gutters'>"+
                "    <div class='col-md-4'>"+
                "      <img src='"+result[i].img+"' height = '180' width='180' alt='...'>"+
                "    </div>"+
                    
                "      <div class='card-body'>"+
                
                "        <p class='card-text'>"+result[i].name+"</p>"+
                "        <button type='button' id='"+result[i].id+"' class='btn btn-light'>Study it</button>"+
                
                "    </div>"+
                "  </div>"+
                "  </div>"
                ))
                if (i%2 != 0){
                    $('#Component').append("<div class='w-100'></div>")
                }
                var jump =  result[i].jump
                if (jump == 'study1.html'){
                    $("#"+result[i].id+"").bind('click',function(){
                        if($.session.get('userId')){
                        $(location).attr('href',"./study1.html")
                        }else{
                            alert('you have to login first')
                        }
                    })  
                }
                if (jump == 'study2.html'){
                    $("#"+result[i].id+"").bind('click',function(){
                        if($.session.get('userId')){
                            $(location).attr('href',"./study2.html")
                            }else{
                                alert('you have to login first')
                            }
                    })  
                }
                if (jump == 'study3.html'){
                    $("#"+result[i].id+"").bind('click',function(){
                        if($.session.get('userId')){
                            $(location).attr('href',"./study3.html")
                            }else{
                                alert('you have to login first')
                            }
                    })  
                }

                if (jump == 'study4.html'){
                    $("#"+result[i].id+"").bind('click',function(){
                        $(location).attr('href',"./study4.html")
                    })  
                }
            
            }
        },
        error : function(result){

        },
    })




}