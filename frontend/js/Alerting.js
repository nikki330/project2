function Alerting(resultType,resultMessage){
    $('#registeredFormClose').click()
    $('#registeredWarning').html((
        "<div class='alert alert-"+resultType+" alert-dismissible fade show' role='alert'>"+
        "  <strong>Warning</strong><p>"+resultMessage+"</p>"+
        "  <button type='button' class='close' data-dismiss='alert' aria-label='Close'>"+
        "    <span aria-hidden='true'>&times;</span>"+
        "  </button>"
    ))
}

