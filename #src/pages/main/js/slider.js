let btnPrev = document.querySelector('.prev-page');
let btnNext = document.querySelector('.next-page');
let itemsPerPage = 3;
let stepBtn = 3;
let pets = []; // 8
let fullPetsList = []; // 48
let currentPage = 0;
const request = new XMLHttpRequest();
request.open('GET', './pets.json');
request.onload = () => { request.response; };
fetch('./pets.json').then(res => res.json()).then(list => {
	pets = list;

	fullPetsList = (() => {
		let tempArr = [];

		for (let i = 0; i < 6; i++) {
			const newPets = pets;

			for (let j = pets.length; j > 0; j--) {
				let randInd = Math.floor(Math.random() * j);
				const randElem = newPets.splice(randInd, 1)[0];
				newPets.push(randElem);
			}

			tempArr = [...tempArr, ...newPets];
		}
		return tempArr;
	})();

	fullPetsList = sort863(fullPetsList);

	createPets(fullPetsList);

	for (let i = 0; i < (fullPetsList.length / 6); i++) {
		const stepList = fullPetsList.slice(i * 6, (i * 6) + 6);

		for (let j = 0; j < 6; j++) {
			stepList.forEach((item, ind) => {
				if (item.name === stepList[j].name && (ind !== j)) {
					document.querySelector(".slider").children[(i * 6) + j].style.border = '5px solid red';
				}
			})
		}
	}
})

const createPets = (petsList) => {
	const elem = document.querySelector(".slider");
	elem.innerHTML = '';
	elem.innerHTML += createElements(petsList);
}

createElements = (petsList) => {
	let str = '';
	let step = checkStepsPerPage();
	let items = checkItemsPerPage();
	for (let i = currentPage * step; i < currentPage * stepBtn + items; i++) {
		switch (i) {
			case 0: str += `<div class="slider__item" onclick="showPopup(0)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 1: str += `<div class="slider__item" onclick="showPopup(1)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 2: str += `<div class="slider__item" onclick="showPopup(2)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 3: str += `<div class="slider__item" onclick="showPopup(3)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 4: str += `<div class="slider__item" onclick="showPopup(4)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 5: str += `<div class="slider__item" onclick="showPopup(5)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 6: str += `<div class="slider__item" onclick="showPopup(6)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 7: str += `<div class="slider__item" onclick="showPopup(7)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 8: str += `<div class="slider__item" onclick="showPopup(8)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 9: str += `<div class="slider__item" onclick="showPopup(9)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 10: str += `<div class="slider__item" onclick="showPopup(10)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 11: str += `<div class="slider__item" onclick="showPopup(11)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 12: str += `<div class="slider__item" onclick="showPopup(12)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 13: str += `<div class="slider__item" onclick="showPopup(13)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 14: str += `<div class="slider__item" onclick="showPopup(14)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 15: str += `<div class="slider__item" onclick="showPopup(15)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 16: str += `<div class="slider__item" onclick="showPopup(16)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 17: str += `<div class="slider__item" onclick="showPopup(17)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 18: str += `<div class="slider__item" onclick="showPopup(18)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 19: str += `<div class="slider__item" onclick="showPopup(19)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 20: str += `<div class="slider__item" onclick="showPopup(20)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 21: str += `<div class="slider__item" onclick="showPopup(21)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 22: str += `<div class="slider__item" onclick="showPopup(22)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 23: str += `<div class="slider__item" onclick="showPopup(23)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 24: str += `<div class="slider__item" onclick="showPopup(24)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 25: str += `<div class="slider__item" onclick="showPopup(25)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 26: str += `<div class="slider__item" onclick="showPopup(26)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 27: str += `<div class="slider__item" onclick="showPopup(27)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 28: str += `<div class="slider__item" onclick="showPopup(28)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 29: str += `<div class="slider__item" onclick="showPopup(29)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 30: str += `<div class="slider__item" onclick="showPopup(30)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 31: str += `<div class="slider__item" onclick="showPopup(31)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 32: str += `<div class="slider__item" onclick="showPopup(32)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 33: str += `<div class="slider__item" onclick="showPopup(33)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 34: str += `<div class="slider__item" onclick="showPopup(34)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 35: str += `<div class="slider__item" onclick="showPopup(35)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 36: str += `<div class="slider__item" onclick="showPopup(36)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 37: str += `<div class="slider__item" onclick="showPopup(37)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 38: str += `<div class="slider__item" onclick="showPopup(38)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 39: str += `<div class="slider__item" onclick="showPopup(39)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 40: str += `<div class="slider__item" onclick="showPopup(40)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 41: str += `<div class="slider__item" onclick="showPopup(41)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 42: str += `<div class="slider__item" onclick="showPopup(42)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 43: str += `<div class="slider__item" onclick="showPopup(43)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 44: str += `<div class="slider__item" onclick="showPopup(44)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 45: str += `<div class="slider__item" onclick="showPopup(45)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 46: str += `<div class="slider__item" onclick="showPopup(46)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
			case 47: str += `<div class="slider__item" onclick="showPopup(47)"><div class="slider__wr-pic"><img src="${petsList[i].img}"
			class="slider__img" alt="pets"></div><h3 class="slider__title">${petsList[i].name}</h3><buttun class="slider__btn-popup">Learn more</buttun></div>`;
			break;
		}
	}
	return str;
}

request.send();

const nextSlide = () => {
	if (currentPage === 15) {
		currentPage = 0;
		createPets(fullPetsList);
	} else {
		currentPage++;
		createPets(fullPetsList);
	}
}

const prevSlide = () => {
	if (currentPage === 0) {
		currentPage = 15;
		createPets(fullPetsList);
	} else {
		currentPage--;
		createPets(fullPetsList);
	}
}

btnPrev.addEventListener('click', prevSlide);
btnNext.addEventListener('click', nextSlide);

const sort863 = (list) => {
	let unique8List = [];
	let length = list.length;
	for (let i = 0; i < length / 8; i++) {
		const uniqueStepList = [];
		for (j = 0; j < list.length; j++) {
			if (uniqueStepList.length >= 8) {
				break;
			}
			const isUnique = !uniqueStepList.some((item) => {
				return item.name === list[j].name;
			});
			if (isUnique) {
				uniqueStepList.push(list[j]);
				list.splice(j, 1);
				j--;
			}
		}
		unique8List = [...unique8List, ...uniqueStepList];
	}
	list = unique8List;


	list = sort6recursively(list);

	return list;
}

const sort6recursively = (list) => {
	const length = list.length;

	for (let i = 0; i < (length / 6); i++) {
		const stepList = list.slice(i * 6, (i * 6) + 6);

		for (let j = 0; j < 6; j++) {
			const duplicatedItem = stepList.find((item, ind) => {
				return item.name === stepList[j].name && (ind !== j);
			});

			if (duplicatedItem !== undefined) {
				const ind = (i * 6) + j;
				const which8OfList = Math.trunc(ind / 8);

				list.splice(which8OfList * 8, 0, list.splice(ind, 1)[0]);

				sort6recursively(list);
			}
		}
	}

	return list;
}

const checkItemsPerPage = () => {
	if (document.querySelector("body").offsetWidth >= 1280) {
		itemsPerPage = 3;
	}

	if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
		itemsPerPage = 2;
	}
	if (document.querySelector("body").offsetWidth < 768) {
		itemsPerPage = 1;
	}

	return itemsPerPage;
}

const checkStepsPerPage = () => {
	if (document.querySelector("body").offsetWidth >= 1280) {
		stepBtn = 3;
	}

	if (document.querySelector("body").offsetWidth >= 768 && document.querySelector("body").offsetWidth < 1280) {
		stepBtn = 2;
	}
	if (document.querySelector("body").offsetWidth < 768) {
		stepBtn = 1;
	}

	return stepBtn;
}


window.addEventListener('resize', function () {
	createPets(fullPetsList);
});
