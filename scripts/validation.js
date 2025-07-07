const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMsgEl = formElement.querySelector(`#${inputElement.id}-error`);
  errorMsgEl.textContent = errorMessage;
  inputElement.clasList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement) => {
  const errorMsgEl = formElement.querySelector(`#${inputElement.id}-error`);
  errorMsgEl.textContent = "";
  inputElement.clasList.remove("modal__input_type_error");
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__button");
  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
};

enableValidation();
