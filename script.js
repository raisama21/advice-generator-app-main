const dice = document.querySelector(".dice");
const quote = document.querySelector(".quote");
const adviceIndex = document.querySelector(".advice-index");

dice.addEventListener("click", (ev) => {
  fetchAdvice(Math.ceil(Math.random() * 224));
});

const fetchAdvice = async (random_ID) => {
  try {
    const res = await fetch(`https://api.adviceslip.com/advice/${random_ID}`);
    const data = await res.json();
    const { advice, id } = data.slip;

    quote.textContent = advice;
    adviceIndex.textContent = `ADVICE #${id}`;
  } catch (err) {
    console.log(err);
  }
};
