console.log("cccc");
function bootstapAlert(){
 $.notify("Added to cat!");
}

$('#myModal').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
  })