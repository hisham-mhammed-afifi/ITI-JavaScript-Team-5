const signupModal = document.getElementById("signupModal");
const loginModal = document.getElementById("loginModal");
const signupModalWindow = document.getElementById("signupModalWindow");
const loginModalWindow = document.getElementById("loginModalWindow");

function closeSignupModal() {
  signupModalWindow.style.transform = `scale(0)`;
  signupModalWindow.style.opacity = `0`;

  signupModal.style.display = `none`;
}

function openSignupModal() {
  signupModalWindow.style.transform = `scale(1)`;
  signupModalWindow.style.opacity = `1`;

  signupModal.style.display = `flex`;
}

signupModal.addEventListener("click", closeSignupModal);

//////////////////////////////////////////////////////////////

function closeLoginModal() {
  loginModalWindow.style.transform = `scale(0)`;
  loginModalWindow.style.opacity = `0`;

  loginModal.style.display = `none`;
}

function openLoginModal() {
  loginModalWindow.style.transform = `scale(1)`;
  loginModalWindow.style.opacity = `1`;

  loginModal.style.display = `flex`;
}

loginModal.addEventListener("click", closeLoginModal);
