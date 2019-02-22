
var note_number=2;

function addnote() {
    //event.preventDefault();
    $(".notes-box").append('<div class="col-md-3 float-right note' + note_number + '"><div class="sticky green-border"><section class="sticky-header gray-color green-bg green-border text-light"><div class="sticky-header-right float-right"><a onclick="removenote(' + note_number + ');" class="remove-note"><span class="fas fa-lg fa-trash-alt"></span></a><span class="fas fa-lg fa-ellipsis-h"></span></div><div class="sticky-header-left float-left"><a onclick="addnote();" class="add-note"><span class="fas fa-lg fa-plus"></span></a></div><div class="clearfix"></div></section><section class="sticky-content"><textarea onkeyup="autodir();" class="auto_direction"></textarea></section></div></div>');
    note_number = note_number + 1;
};
