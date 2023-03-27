var video = document.querySelector("#player1");
var volumesldr = document.querySelector("#volume");
var mutebtn = document.querySelector("#mute");

video.autoplay = false;
video.loop = false;


window.addEventListener("load", function() {
	console.log("Good job opening the window")
});

document.querySelector("#play").addEventListener("click", function() {
 	console.log("Play Video");
	video.play()
	volumesldr.innerHTML = video.volume * 100 + "%";
});

document.querySelector('#pause').addEventListener("click", function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("New speed: " + video.playbackRate);
	video.playbackRate -= .1;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("New speed: " + video.playbackRate);
	video.playbackRate += .1;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log(video.currentTime);
	video.currentTime += 10;

	if (video.currentTime >= video.duration) {
		video.currentTime = 0;
		console.log(video.currentTime);
	}

});

mutebtn.addEventListener("click", function() {
	console.log("Mute Video");

	if(video.muted) {
		video.muted = false;
		mutebtn.innerHTML = "Mute"
	}

	else {
		video.muted = true;
		mutebtn.innerHTML = "Unmute"
	}
});

document.querySelector("#slider").addEventListener("click", function() {
	video.volume = this.value / 100;
	volumesldr.innerHTML = video.volume * 100 + "%";
	console.log(video.volume);
});

document.querySelector("#vintage").addEventListener("click", function() {
	video.classList.add('oldSchool')
});

document.querySelector("#orig").addEventListener("click", function() {
	video.classList.remove('oldSchool')
});