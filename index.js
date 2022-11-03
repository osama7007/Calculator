const numbers = document.querySelectorAll('input');
const buttons = document.querySelectorAll('button');
const screen = document.querySelector('.screen');

numbers.forEach((number) => {
	number.addEventListener('click', (e) => {
		screen.innerHTML += e.target.value;
	});
});
let Add = () => {
	screen.innerHTML += '+';
};
let Minus = () => {
	screen.innerHTML += '-';
};
let Multiply = () => {
	screen.innerHTML += '*';
};
let Divide = () => {
	screen.innerHTML += '/';
};
const result = () => {
	let res = 0;
	let operand = screen.innerHTML.split(/[-*/+]/g);
	let operation = screen.innerHTML.split(/\d+/g).filter((s) => s != '');
	for (let i = 0; i < operand.length; i++) {
		if (operation[i] === undefined) operation[i] = '';
		res += `${operand[i]}${operation[i]}`;
	}
	screen.innerHTML = eval(res);
};

const remove = () => {
	screen.innerHTML = 'Cleared';
	setTimeout(() => {
		screen.innerHTML = '';
	}, 500);
	inputNumber = '';
	operation = '';
};
let DeleteOne = ()=>{
     screen.innerHTML = screen.innerHTML.slice(0, screen.innerHTML.length - 1);
}
const ChangeColor = () => {
	let colors = [
		'#6318c9',
		'#840c94',
		'#d1f898',
		'#67940c',
		'#359',
		'#940c25',
		'#dfdfdf',
		'#d7c1f5',
		'#194517',
		'#732814',
		'#699ff5',
		'darkgoldenrodyellow',
		'darkblue',
		'darkpink',
		'darkskyblue',
		'darkcyan',
		'darkgreen',
		'darkyellow',
	];
    let randomNum = Math.floor(Math.random()*colors.length);
    screen.style.background = colors[randomNum+1];
    numbers.forEach((number) => {
            number.style.background = colors[randomNum];
		});
    buttons.forEach((button) => {
				button.style.background = colors[randomNum];
		});
};
let  ResetColor =()=>{
		screen.style.background = '#fff';
		numbers.forEach((number) => {
			number.style.background = 'darkviolet';
		});
		buttons.forEach((button) => {
			button.style.background = 'darkviolet';
		});
}
