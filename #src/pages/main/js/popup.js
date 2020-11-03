let popup = document.querySelector('.popup'),
	popupContainer = document.querySelector('.popup__container'),
	popupBtn = document.querySelector('.popup__btn'),
	popupName = document.querySelector('.popup__name'),
	popupPic = document.querySelector('.popup__wr-pic'),
	popupBreed = document.querySelector('.popup__breed'),
	popupDescription = document.querySelector('.popup__description'),
	popupAge = document.querySelector('.popup__age'),
	popupInoculations = document.querySelector('.popup__inoculations'),
	popupDiseases = document.querySelector('.popup__diseases'),
	popupParasites = document.querySelector('.popup__parasites');

const showPopup = (item = 0) => {
	popup.classList.add('show');
	body.classList.add('lock');

	popupName.innerHTML = fullPetsList[item].name;
	popupPic.innerHTML = `<img src="${fullPetsList[item].img}" class="popup__img" alt="dog's photo">`;
	popupBreed.innerHTML = `<span class="popup__type">${fullPetsList[item].type} - </span> ${fullPetsList[item].breed}`;
	popupDescription.innerHTML = fullPetsList[item].description;
	popupAge.innerHTML += ` <span class="popup__list-text">${fullPetsList[item].age}</span>`;
	popupInoculations.innerHTML += ` <span class="popup__list-text">${fullPetsList[item].inoculations}</span>`;
	popupDiseases.innerHTML += ` <span class="popup__list-text">${fullPetsList[item].diseases}</span>`;
	popupParasites.innerHTML += ` <span class="popup__list-text">${fullPetsList[item].parasites}</span>`;
};

const closePopup = () => {
	popup.classList.remove('show');
	body.classList.remove('lock');

	popupAge.innerHTML = '<span class="popup__list-title">Age:</span>';
	popupInoculations.innerHTML = '<span class="popup__list-title">Inoculations:</span>';
	popupDiseases.innerHTML = '<span class="popup__list-title">Diseases:</span>';
	popupParasites.innerHTML = '<span class="popup__list-title">Parasites:</span>';
};

popup.addEventListener('click', function (e) {
	e = e || window.event;
	let target = e.target || e.srcElement;
	if(target.id == 'popup') closePopup();
});