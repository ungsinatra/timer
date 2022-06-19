let min = document.querySelector('.min');
let sec =  document.querySelector('.sec');
let hr = document.querySelector('.hrs');
const start  = document.querySelector('.start')
const stop  = document.querySelector('.stop')
let stopStatus  = false




function timer(){
	// let hrTime = 1
	// let minTime = 59
	// let current = 59
	let hrTime = parseInt(hr.textContent)
	let minTime = parseInt(min.textContent)
	let current = parseInt(sec.textContent);
if(stopStatus){
		setTimeout(function go() {
			sec.textContent = current
			if (stopStatus) {
				setTimeout(go, 1000);
			}
			if(current==60){
				current = 0;
				min.textContent =`0${minTime += 1}`
		
			}
			if(minTime==60){
				minTime = 0
				hr.textContent = `0${hrTime += 1}`
				if(hr.textContent>=10){
					hr.textContent = hrTime+=1;
				}
			}
			return current+=1;
		}, 1000);
	}
	
	return current
}



start.addEventListener('click',function(){
	stopStatus = true
	timer()
})
// secTimer()

stop.addEventListener('click',function(){
	stopStatus = false
		
})




