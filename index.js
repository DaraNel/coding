
var ques_array = [
	"Invoice",
	"Prime cost",
	"D23,000",
	"Deficit",
	"Materiality"
];

var ques_answered = [
	false,
	false,
	false,
	false,
	false
]

function show_ques(ques_id, obj)	{

	var ques_element = document.getElementById(ques_id);

	var ques_elements = document.getElementsByClassName("content_pane");

	for (var i = 0; i < ques_elements.length; i++) {

		ques_elements[i].classList.add("no_display");
	}

	ques_element.classList.remove("no_display");

	var sel_btns = document.getElementsByClassName("sel_btn");

	for (var i = 0; i < sel_btns.length; i++) {
		sel_btns[i].classList.remove("active_btn");
	}

	obj.classList.add("active_btn");

}

function answer_ques(option_obj, target_ques)	{

	answer_strip = option_obj.textContent.substring(12).trim();
	valid_answer = ques_array[target_ques - 1].trim();

	if (answer_strip == valid_answer)	{

		if (ques_answered[target_ques] == true)	{
			return;
		}

		ques_answered[target_ques] = true;

		console.log("yes");

		options = document.getElementsByClassName("an_option");

		for (var i = 0; i < options.length; i++) {

			options[i].style.background = "transparent";
			options[i].style.color = "black";
		}
		option_obj.style.background = "green";
		option_obj.style.color = "white";

		score = document.getElementById("score_value").textContent;

		if (score >= 0 && score < 6)	{
			document.getElementById("score_value").textContent = ++score;
		}
	}
	else {

		if (ques_answered[target_ques] == true)	{
			return;
		}

		ques_answered[target_ques] = true;

		console.log("no");

		options = document.getElementsByClassName("an_option");

		for (var i = 0; i < options.length; i++) {

			options[i].style.background = "transparent";
			options[i].style.color = "black";
		}
		option_obj.style.background = "red";
		option_obj.style.color = "white";

		all_this_options = document.getElementsByClassName(target_ques + "");

		for (var i = 0; i < all_this_options.length; i++) {
			the_option_text = all_this_options[i].textContent.substring(12).trim();

			if (the_option_text == valid_answer)	{
				console.log(the_option_text);
				all_this_options[i].style.background = "green";
			}

		}

	}

}

function submit()	{

	buttons = document.getElementsByClassName("btn_group");

	buttons[0].classList.add("no_display");

	quiz_panes = document.getElementsByClassName("content_pane");

	for (var i = 0; i < quiz_panes.length; i++) {
		quiz_panes[i].classList.add("no_display");
	}

	document.getElementById("final_score").textContent = document.getElementById("score_value").textContent;

	document.getElementById("quiz_result").classList.remove("no_display");

	document.getElementById("submit_btn").classList.add("no_display");
}

function show_quiz_page()	{
	
	document.getElementById("quiz_result").classList.add("no_display");

	ques_panes = document.getElementsByClassName("content_pane");

	ques_panes[0].classList.remove("no_display");

	buttons = document.getElementsByClassName("btn_group");

	buttons[0].classList.remove("no_display");

	document.getElementById("submit_btn").classList.remove("no_display");
}

function reload()	{
	window.location.href = window.location.href;
}

function start()	{
	window.location.href = "quiz.html";
}

// function home()	{
	// window.location.href = "home.html";
// }