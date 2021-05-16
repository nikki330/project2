function loadDropdown() {
    $('#quickStart').append((
        "<button class='btn btn-secondary dropdown-toggle' type='button' id='dropdownMenuButton' data-toggle='dropdown' aria-expanded='false'>"+
        "Quickstart"+
        "</button>"+

        "<div class='dropdown-menu' aria-labelledby='dropdownMenuButton'>"+
        "<a class='dropdown-item' href='#' id = 'le1'>Titration level1</a>"+
        "<a class='dropdown-item' href='#' id ='le2' >Titration level2</a>"+
        "<a class='dropdown-item' href='#' id = 'le3'>Titration level3</a>"+
        "<a class='dropdown-item' href='#' id = 'le4'>Titration level4</a>"+
        "</div>"
    ))
    $('#le1').bind("click",function(){
        alert('l1')
    })
    $('#le2').bind("click",function(){
        alert('l2')
    })
    $('#le3').bind("click",function(){
        alert('l3')
    })
    $('#le4').bind("click",function(){
        alert('l4')
    })
}