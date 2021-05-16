function loadModalRegisterForm(){
    $('#loadModalRegisterForm').html((
    "<button type='button' class='btn btn-primary' data-toggle='modal' data-target='#registeredModal'>"+
"  Register"+
"</button>"+
""+
"<!-- Modal -->"+
"<div class='modal fade' id='registeredModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
"  <div class='modal-dialog'>"+
"    <div class='modal-content'>"+
"      <div class='modal-header'>"+
"        <h5 class='modal-title' id='exampleModalLabel'>Registered</h5>"+
"        <button type='button' id = 'registeredFormClose' class='close' data-dismiss='modal' aria-label='Close'>"+
"          <span aria-hidden='true'>&times;</span>"+
"        </button>"+
"      </div>"+
"      <div class='modal-body' id ='modalRegister'>"+

"      </div>"+
"      <div>"
    ))

    $('#modalRegister').html((
        
        "  <div class='form-group'>"+
        "    <label for='exampleInputEmail1'>User Name</label>"+
        "    <input  class='form-control' id='userNameRegist' >"+
        
        "  </div>"+
        "  <div class='form-group'>"+
        "    <label for='exampleInputPassword1'>Password</label>"+
        "    <input type='password' class='form-control' id='userPassRegist'>"+
        "  </div>"+
        "  <div class='form-group form-check'>"+
        "    <input type='checkbox' class='form-check-input' id='registerPassword'>"+
        "    <label class='form-check-label' for='exampleCheck1'>Check me out</label>"+
        "  </div>"+
        "  <button id = 'registerSubmit' type='submit' class='btn btn-primary'>Submit</button>"
        
    ))


    $('#registerSubmit').bind('click',function(){
        
        
        var r_u = $('#userNameRegist').val()

        var r_p = $('#userPassRegist').val()
        console.log('r_u is',r_u,'r_p is',r_p)
        
        ajaxRegistered(r_u,r_p)
        $('#registeredFormClose').click()
    })
    



    
}