const inputCreditCard = document.getElementById("card");
const inputDateExpire = document.getElementById("expire");
const inputCrypto = document.getElementById("crypto");
const button = document.getElementById("buttonSubmit")

const regexCreditCard = /^\d{4}\d{4}\d{4}\d{4}$/;
const regexExpire = /^(0[1-9]|1[0-2])\/\d{2}$/;
const regexCrypto = /^\d{3}$/;

const handleCreditCard = () => {
  const value = inputCreditCard.value;
  const checkRegex = regexCreditCard.test(value);
  if (checkRegex) {
    inputCreditCard.value = value.replace(/(.{4})/g, "$1 ").trim();
  } else {
    alert(
      "Vérifier les informations, uniquement des chiffres, 16 maximum. Ne pas mettre d'espaces."
    );
  }
};

const handleExpire = () => {
  const value = inputDateExpire.value;
  const checkRegex = regexExpire.test(value);
  if (!checkRegex) {
    alert(
      "Vérifier les informations, uniquement des chiffres et /. Ex: 01/24."
    );
  }
};

const handleCrypto = () => {
    const value = inputCrypto.value
    const checkRegex = regexCrypto.test(value)
    if (!checkRegex) {
        alert("Vérifier les informations, uniquement des chiffres. Ex: 123.")
    } else {
        button.disabled= false
        button.classList.add("cursor")
    }
}

const handleSubmit = (e) => {
    e.preventDefault()
    console.log("click");
    alert("Votre paiement a été accepté")
}

button.addEventListener("click", handleSubmit)