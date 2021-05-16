function loadModalLoginForm(){
    $('#loadModalLoginForm').html((
        "<button id='loginButton' type='button' class='btn btn-primary' data-toggle='modal' data-target='#loginModal'>"+
"  Login"+
"</button>"+
""+
"<!-- Modal -->"+
"<div class='modal fade' id='loginModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>"+
"  <div class='modal-dialog'>"+
"    <div class='modal-content'>"+
"      <div class='modal-header'>"+
"        <h5 class='modal-title' id='exampleModalLabel'>Login</h5>"+
"        <button type='button' class='close' id = 'registeredFormClose' data-dismiss='modal' aria-label='Close'>"+
"          <span aria-hidden='true'>&times;</span>"+
"        </button>"+
"      </div>"+
"      <div class='modal-body' id ='modalLogin'>"+

"      </div>"+
"      <div>"
    ))

    $('#modalLogin').append((
        

"  <div class='form-group'>"+
"    <label for='exampleInputEmail1'>User Name</label>"+
"    <input  class='form-control' id='userNameLogin' >"+

"  </div>"+
"  <div class='form-group'>"+
"    <label for='exampleInputPassword1'>Password</label>"+
"    <input type='password' class='form-control' id='userPassLogin'>"+
"  </div>"+
"  <div class='form-group form-check'>"+
"    <input type='checkbox' class='form-check-input' id='exampleCheck1'>"+
"    <label class='form-check-label' for='exampleCheck1'>Check me out</label>"+
"  </div>"+
"  <button id = 'userSubmitLogin' type='submit' class='btn btn-primary'>Submit</button>"


    ))
    $('#userSubmitLogin').bind('click',function(){
        var l_u = $('#userNameLogin').val()
        var l_p = $('#userPassLogin').val()

        ajaxLogin(l_u,l_p)
        
    })


    
}