import AudioRecorder from "simple-audio-recorder";


const testName=$('#test').text()
var resultPage = document.querySelector('#resultPage')
var mainPage = document.querySelector('#speaking')
var answers = document.querySelector('#answers')

AudioRecorder.preload("/js/mp3worker.js");
const audioData = [];

let recorder = new AudioRecorder({
    recordingGain : 1, 
					encoderBitRate : 96,
					streaming : true, 
					streamBufferSize : 50000, 					
					constraints : { 
						channelCount : 1
					}
});

recorder.ondataavailable = (data) => {
					console.log("data", data.length);
					audioData.push(data);
				};

recorder.onstop = () => {
					let mp3Blob = new Blob(audioData, {type : "audio/mpeg"});
					var audioResponse = document.querySelector('#audioResponse')
					audioResponse.src= URL.createObjectURL(mp3Blob)
				};

 
const playBeep = ()=>{
   var beep = new Audio('/beep.m4a')
   beep.play()
}


function startRecording() {
    	recorder.start()
  }

 
 function stopRecording() {
	recorder.stop();
}




document.getElementById('start').addEventListener('click', ()=>{
	document.getElementById('home').classList.add('hidden')
	document.getElementById('speaking').classList.remove('hidden')
	step0()
})

    function step0() {
	$('#question').text(q[0]);
	$('#q-number').text(1)
	var audio = document.getElementById('audio1')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
        startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			stopRecording()
			step1()
            

  }
		  
		}, 1000);
	  }

}


function step1() {
	$('#question').text(q[1]);
	$('#q-number').text(2)
	var audio = document.getElementById('audio2')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
       startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step2()
			stopRecording()
  }
		  
		}, 1000);
	  }


}



function step2() {
	$('#question').text(q[2]);
	$('#q-number').text(3)
	var audio = document.getElementById('audio3')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            step3()
			stopRecording()
  }
		  
		}, 1000);
	  }


}


function step3() {
	$('#question').text(q[3]);
	$('#q-number').text(4)
	var audio = document.getElementById('audio4')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            step4()
			stopRecording()
  }
		  
		}, 1000);
	  }


}



function step4() {
	$('#question').text(q[4]);
	$('#q-number').text(5)
	var audio = document.getElementById('audio5')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            step5()
			stopRecording()
  }
		  
		}, 1000);
	  }


}



function step5() {
	$('#question').text(q[5]);
	$('#q-number').text(6)
	var audio = document.getElementById('audio6')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
            part2()
			stopRecording()
  }
		  
		}, 1000);
	  }


}


function part2(){
    $('#question').text('');
	$('#q-number').text('')
	var audio = document.getElementById('audio7')
    audio.play()
	audio.addEventListener("ended", step6)
    $('#indicator-2').removeClass('bg-blue-500')
    $('#indicator-2').addClass('active')
    

}

function step6() {
	$('#question').html(q[6]);
	$('#q-number').text(7)
	var audio = document.getElementById('audio8')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 60;
	$('#timer').text(` 00:${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
    $('#timer').text(`02:00`)
     var targetTime = moment().add(2, 'minutes');
     var countdownInterval = setInterval(function() {
         var currentTime = moment();
         var secondsRemaining = targetTime.diff(currentTime, 'seconds');
 
         var formattedTime = moment.utc(secondsRemaining * 1000).format('mm:ss');
         $('#timer').text(`${formattedTime}`);
 
         if (secondsRemaining <= 0) {
             $('#timer').text(`00:00`)
             clearInterval(countdownInterval);
             $('#recorder-blink').addClass('hidden')
             part3()
             stopRecording()
         }
     }, 1000); 
 
   }


}


function part3(){
    $('#question').text('');
	$('#q-number').text('')
	var audio = document.getElementById('audio9')
    audio.play()
	audio.addEventListener("ended", step7)
    $('#indicator-3').removeClass('bg-blue-500')
    $('#indicator-3').addClass('active')
    

}


function step7() {
	$('#question').html(q[7]);
	$('#q-number').text(8)
	var audio = document.getElementById('audio10')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step8()
			stopRecording()
  }
		  
		}, 1000);
	  }


}


function step8() {
	$('#question').html(q[8]);
	$('#q-number').text(9)
	var audio = document.getElementById('audio11')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step9()
			stopRecording()
  }
		  
		}, 1000);
	  }


}
 


function step9() {
	$('#question').html(q[9]);
	$('#q-number').text(10)
	var audio = document.getElementById('audio12')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step10()
			stopRecording()
  }
		  
		}, 1000);
	  }


}


function step10() {
	$('#question').html(q[10]);
	$('#q-number').text(11)
	var audio = document.getElementById('audio13')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			step11()
			stopRecording()
  }
		  
		}, 1000);
	  }


}
 

function step11() {
	$('#question').html(q[11]);
	$('#q-number').text(12)	
	var audio = document.getElementById('audio14')
    audio.play()
	audio.addEventListener("ended", startCountdown)
    
    function startCountdown() {
	let count = 5;
	$('#timer').text(` 00:0${count}`);
	const interval = setInterval(() => {
	  count--;
	  $('#timer').text(` 00:0${count}`);
	  if (count <= 0) {
		playBeep()
		clearInterval(interval);
		start30SecondCountdown();
		startRecording()
	  }
	}, 1000);
  }


  function start30SecondCountdown() {
    $('#recorder-blink').removeClass('hidden')
		let count = 30;
		$('#timer').text(` 00:${count}`);
		const interval = setInterval(() => {
		  count--;
		  $('#timer').text(`00:${count}`);
		  if (count <= 0) {
			$('#timer').text(`00:00`)
			clearInterval(interval);
            $('#recorder-blink').addClass('hidden')
			examEnd()
  }
		  
		}, 1000);
	  }


}

function examEnd(){
    $('#question').text('');
	$('#q-number').text('')
	var audio = document.getElementById('audio15')
    audio.play()
	audio.addEventListener("ended", ()=>{
		stopRecording()
		mainPage.classList.add('hidden')
		resultPage.classList.remove('hidden')
	})	
}
 
