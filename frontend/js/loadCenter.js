function loadCenter(){
    $('#center').html((
        "<button id='centerClick' type='button' class='btn btn-primary' data-toggle='modal' data-target='#exampleModal'>"+
        " User Center"+
        "</button>"+
        ""+
        "<!-- Modal -->"+
        "<div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
        "  <div class='modal-dialog'>"+
        "    <div class='modal-content'>"+
        "      <div class='modal-header'>"+
        "        <h5 class='modal-title' id='exampleModalLabel'>Modal title</h5>"+
        "        <button type='button' class='close' data-dismiss='modal' aria-label='Close'>"+
        "          <span aria-hidden='true'>&times;</span>"+
        "        </button>"+
        "      </div>"+
        "      <div class='modal-body' id = 'modalCenter'>"+
        "        ..."+
        "      </div>"+
        "      <div class='modal-footer'>"+
        "        <button type='button' class='btn btn-secondary' data-dismiss='modal'>Close</button>"+
        
        "      </div>"+
        "    </div>"+
        "  </div>"+
        "  </div>"
    ))
    $('#centerClick').bind('click',function(){
        console.log('id is',$.session.get('userId'))
        $.ajax({
            url : 'http://127.0.0.1:5000/loadUserCenter',
            data : {"l_u" : $.session.get('userId'),
                    "l_p" : $.session.get('userPa')},
            dataType : 'json',
            type : 'POST',
            success: function(result){
                console.log(result)
                $('#l1').text(result.l1+'%')
                $('#l2').text(result.l2+'%')
                $('#l3').text(result.l3+'%')
                $('#l4').text(result.l4+'%')
            },
            error: function(result){
    
            }
        })
    })

    $('#modalCenter').append((
        

"  <div class='form-group'>"+
"    <label>Level1 mark:  </label>"+
"    <span id='l1'>aaa</span>"+

"  </div>"+
"  <div class='form-group'>"+
"    <label>Level2 mark: </label>"+
"    <span id = 'l2'>aaa</span>"+

"  </div>"+
"  <div class='form-group'>"+
"    <label>Level3 mark: </label>"+
"    <span id = 'l3'>aaa</span>"+

"  </div>"+
"  <div class='form-group'>"+
"    <label>Level4 mark:  </label>"+
"    <span id = 'l4'>aaa</span>"+

"  </div>"



    ))

    


    
}