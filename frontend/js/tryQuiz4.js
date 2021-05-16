function tryQuiz4(){
    $('#quiz4').bind('click',function(){
        $('#quiz4').attr('style','display:none')
        var qNumber = 0
        //$('#Content').html('')
        $('#Content4').append((
            "<!-- Button trigger modal -->"+
            "<button type='button' style='display:none' id = 'triggerQuiz4' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>"+
            "  Launch demo modal"+
            "</button>"+
            ""+
            "<!-- Modal -->"+
            "<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
            "  <div class='modal-dialog'>"+
            "    <div class='modal-content'>"+
            "      <div class='modal-header'>"+
            "        <h5 class='modal-title' id='exampleModalLabel'>Level1 Quiz</h5>"+
           
            "      </div>"+
            "      <div class='modal-body'>"+
            "<div id = 'questions4'>"+


"</div>"+
"<div id = 'final4'></div>"+


            "      </div>"+
            "      <div class='modal-footer'>"+
            "        <button type='button' id = 'closeLevel4' class='btn btn-secondary'>Close</button>"+
            "        <button id = 'submitTest4' type='button' class='btn btn-primary'>Submit</button>"+
            "      </div>"+
            "    </div>"+
            "  </div>"
            

        ))
        $('#closeLevel4').bind('click',function(){
            $(location).attr('href','index.html')
        })
        $('#triggerQuiz4').click()
        
        $.ajax({
            url : 'http://127.0.0.1:5000/loadQ4',
            data : {},
            dataType : 'json',
            type : 'POST',
            success : function(result){
                len = result.length
                qNumber = len
                console.log('the length of quiz is',len)
                for(var i=0;i<len;i++){
                    $('#questions4').append((
                        ""+result[i].question+""+
"</br>"+
"<label><input name='"+result[i].qid+"' type='radio' value='"+result[i].c1+"'>"+result[i].c1+"</label>"+
"</br>"+
"<label><input name='"+result[i].qid+"' type='radio' value='"+result[i].c2+"'>"+result[i].c2+"</label>"+
"</br>"+
"<label><input name='"+result[i].qid+"' type='radio' value='"+result[i].c3+"'>"+result[i].c3+"</label>"+
"</br>"+
"<label><input name='"+result[i].qid+"' type='radio' value='"+result[i].c4+"'>"+result[i].c4+"</label>"+
"</br>"+
"<div id="+result[i].qid+"></div>"+
"</br>"
                    ))
                }
            },
            error : function(result){
                console.log('error!',result)
                
            }
        })

        $('#submitTest4').bind('click',function(){
            
            
            //console.log('Q number is',qNumber)
            $.ajax({
                url : 'http://127.0.0.1:5000/loadQ4',
                data : {},
                dataType : 'json',
                type : 'POST',
                success : function(result){
                    len = result.length

                    var correctNum = 0
                
                    for(var i = 0; i < len; i++){
                        var q = $("input[name='"+result[i].qid+"']:checked").val()
                        console.log(q)
                        var correctQ = result[i].aQ
                        console.log(q,correctQ)
                        if (q == correctQ){
                            var sign = "<div class='alert alert-success' role='alert'>"+
                            "    correct answer"+
                            "<div>"
                            correctNum += 1
                        }else{
                            var sign = "<div class='alert alert-danger' role='alert'>"+
                            "    wrong answer"+
                            "</div>"
                        }
                        $("#"+result[i].qid+"").html((
   
                            sign
                        ))
                        $(':radio').attr('disabled', true);
                    }
                    var mark = (correctNum / qNumber) * 100 
                    $('#final4').append("your mark for this quiz is "+mark+" %")
                    $('#submitTest4').attr('style','display:none')
                    $.ajax({
                        url : 'http://127.0.0.1:5000/updateMark',
                        data : {"l_u" : $.session.get('userId'),
                                "l_p" : $.session.get('userPa'),
                                'mark': mark,'level':'4'
                                },
                        dataType : 'json',
                        type : 'POST',
                        success : function(result){
                            console.log(result)
                            
                
                        },
                        error : function(result){
                            console.log('error!',result)
                            
                        }
                    })
                },
                error : function(result){
                    console.log()
                }
            })
        
         })
        
    })
}