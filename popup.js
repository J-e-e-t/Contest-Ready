

// NUMBER OF QUestions

var num_of_que = document.getElementById("number_of_problems");
var total_problem = document.getElementById("total_problem");
total_problem.innerHTML = num_of_que.value;

num_of_que.oninput = function () {
    total_problem.innerHTML = this.value;
}

// Duration

var dur = document.getElementById("duration");
var total_duration = document.getElementById("total_duration");
total_duration.innerHTML = dur.value;

dur.oninput = function () {
    total_duration.innerHTML = this.value;
}