
///check off todos
$("ul").on("click","li",function(){
	$(this).toggleClass("completed");
});

///delete todos
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	event.stopPropagation();
});

///make new todos
$("input[type='text']").keypress(function(event){
	if(event.which===13){
		///grab todo from input box
		var newToDo = ($(this).val());
		///creat new li
		$("ul").prepend("<li>" + newToDo + " <span class='delete'>X</span></li>");
		$(this).val("");
	}
});

$("#deleteAll").click(function(){
	$("li").remove();
});