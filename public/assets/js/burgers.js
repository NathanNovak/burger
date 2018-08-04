$(function(){

	$('.create-form').on('submit', function(event){
		event.preventDefault();
		
		var newBurger ={
			burger_name: $("#newBurger").val().trim(),
			
		};
		console.log("VAL of burger", newBurger);
		$.ajax("/api/burgers", {
			type: "POST",
			data: newBurger
		}).then(function(data){
			console.log("NEW BURGER", data);

			location.reload();
		});
	});

	$(".devoured").on("click", function(){
		var id = $(this).data("id");
		var newDevouredState = $(this).data("newdevouredstate");
		
		console.log("id", id);

		var newChowedDown = {
			devoured: newDevouredState
		}
		console.log("newDevouredState", newDevouredState);
		console.log("newChowedDown", newChowedDown);

		$.ajax("/api/burgers/" +id, {
			type:"PUT",
			data: newChowedDown
		}	
		).then(function(newDevouredState){
					console.log("newDevouredState after AJAX", newDevouredState);
				location.reload();
		});
	});
});