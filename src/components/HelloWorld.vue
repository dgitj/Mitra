<template>
	<div id=app>
		<!--h3 class="fixed">Click the letters!</h3-->
	<div class="word">
			<span>b </span>
			<span>e</span>
			<span>t </span>
			<span> R</span>
	</div>
	<h3 class="fixed">be betR!</h3>
	<h5 class="explain">I'm a bot. Call me and I will log your bet.</h5>
	<footer>
		<p>Tell me your bets on twitter <a target="_blank" href="www.twitter.com/thebetR">@thebetR</a></p>
	</footer>
	</div>
</template>


<script>

const spans = document.querySelectorAll('.word span');
export default {

  }
		spans.forEach((span, idx) => {
		span.addEventListener('click', (e) => {
			e.target.classList.add('active');
		});
		span.addEventListener('animationend', (e) => {
			e.target.classList.remove('active');
		});
		
		// Initial animation
		setTimeout(() => {
			span.classList.add('active');
		}, 750 * (idx+1)) 
		})
		
  
  
</script>






<style>
@import url('https://fonts.googleapis.com/css?family=Anton|Roboto');

.word {
	font-family: 'Anton', sans-serif;
	perspective: 1000px; 
	color: #212121;
}

h3{
	color:#212121;
}

p{
	color:#212121;
}

.word span {
	cursor: pointer;
	display: inline-block;
	font-size: 180px;
	user-select: none;
	line-height: .8;
	margin-bottom:350px;
}

.word span:nth-child(1).active {
	animation: balance 1.5s ease-out;
	transform-origin: bottom left;
}

@keyframes balance {
	0%, 100% {
		transform: rotate(0deg);
	}
	
	30%, 60% {
		transform: rotate(-45deg);
	}
}

.word span:nth-child(2).active {
	animation: shrinkjump 1s ease-in-out;
	transform-origin: bottom center;
}

@keyframes shrinkjump {
	10%, 35% {
		transform: scale(2, .2) translate(0, 0);
	}
	
	45%, 50% {
		transform: scale(1) translate(0, -150px);
	}
	
	80% {
		transform: scale(1) translate(0, 0);
	}
}

.word span:nth-child(3).active {
	animation: falling 2s ease-out;
	transform-origin: bottom center;
}

@keyframes falling {
	12% {
		transform: rotateX(240deg);
	}
	
	24% {
		transform: rotateX(150deg);
	}
	
	36% {
		transform: rotateX(200deg);
	}
	
	48% {
		transform: rotateX(175deg);
	}
	
	60%, 85% {
		transform: rotateX(180deg);
	}
	
	100% {
		transform: rotateX(0deg);
	}
}

.word span:nth-child(4).active {
	animation: rotate 1s ease-out;
}

@keyframes rotate {
	20%, 80% {
		transform: rotateY(180deg);
	}
	
	100% {
		transform: rotateY(360deg);
	}
}

.word span:nth-child(5).active {
	animation: toplong 1.5s linear;
}

@keyframes toplong {
	10%, 40% {
		transform: translateY(-48vh) scaleY(1);
	}
	
	90% {
		transform: translateY(-48vh) scaleY(4);
	}
}

/* Other styles */
body {
	background-color: skyblue;
	color: #fff;
	display: flex;
	font-family: 'Roboto', sans-serif;
	justify-content: center;
	align-items: center;
	flex-direction: row;
	height: 100vh;
	margin: 0;
}

.explain{
	position:fixed;
	top: 450px;
}

.fixed {
	position: fixed;
	top: 350px;
	left: 50%;
	transform: translateX(-50%);
}

header{
	position:fixed;
	top:0;
}
footer {
	position: fixed;
	bottom: 0;
	left: 38%;
	right: 0;
	text-align: center;
	letter-spacing: 1px;
}

footer i {
	color: red;
}

footer a {
	color: #3C97BF;
	text-decoration: none;
}

</style>