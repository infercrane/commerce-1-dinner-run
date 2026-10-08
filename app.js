const dinners = {
  lentil_pasta: {
    title: "Tomato lentil spaghetti",
    eligible: true,
    modelMatch: true,
  },
  cashew_pesto_pasta: {
    title: "Cashew pesto pasta",
    eligible: false,
    modelMatch: false,
  },
  tofu_penne: {
    title: "Tofu broccoli penne",
    eligible: true,
    modelMatch: false,
  },
  bean_tacos: {
    title: "Black bean tacos",
    eligible: true,
    modelMatch: false,
  },
};

const cards = [...document.querySelectorAll(".dinner-card")];
const inputs = [...document.querySelectorAll('input[name="dinner"]')];
const sealedState = document.querySelector("#sealedState");
const resultState = document.querySelector("#resultState");
const modelState = document.querySelector("#modelState");
const humanResult = document.querySelector("#humanResult");
const ruleResult = document.querySelector("#ruleResult");
const shareButton = document.querySelector("#shareButton");
const resetButton = document.querySelector("#resetButton");
const toast = document.querySelector("#toast");

let selectedDinner = null;
let toastTimer = null;

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function selectDinner(id, moveFocus = false) {
  const dinner = dinners[id];
  if (!dinner) return;

  selectedDinner = id;
  cards.forEach((card) => card.classList.toggle("is-selected", card.dataset.dinner === id));
  inputs.forEach((input) => { input.checked = input.value === id; });

  const matchCopy = dinner.modelMatch
    ? "You and Commerce-1 picked the same dinner."
    : `You picked ${dinner.title}. Commerce-1 picked tomato lentil spaghetti.`;
  humanResult.innerHTML = `<span>Your choice</span><strong>${dinner.title}</strong><p>${matchCopy}</p>`;

  if (dinner.eligible) {
    ruleResult.className = "rule-result is-pass";
    ruleResult.innerHTML = `${icon("check")}<div><span>Hard-rule check</span><strong>Eligible to continue</strong><p>Within budget, vegetarian, under 30 minutes, and no declared nut warning.</p></div>`;
  } else {
    ruleResult.className = "rule-result is-block";
    ruleResult.innerHTML = `${icon("x")}<div><span>Hard-rule check</span><strong>Blocked before checkout</strong><p>Contains cashew. The strict nut-free rule overrides the model ranking.</p></div>`;
  }

  sealedState.hidden = true;
  resultState.hidden = false;
  modelState.textContent = "Revealed";
  modelState.classList.add("is-revealed");
  if (moveFocus) document.querySelector("#modelTitle").focus({ preventScroll: true });
}

function resetRound() {
  selectedDinner = null;
  cards.forEach((card) => card.classList.remove("is-selected"));
  inputs.forEach((input) => { input.checked = false; });
  resultState.hidden = true;
  sealedState.hidden = false;
  modelState.textContent = "Sealed";
  modelState.classList.remove("is-revealed");
  inputs[0].focus();
}

async function shareResult() {
  if (!selectedDinner) return;
  const dinner = dinners[selectedDinner];
  const text = dinner.modelMatch
    ? "Commerce-1 and I both picked tomato lentil spaghetti for the Dinner Run."
    : `I picked ${dinner.title}. Commerce-1 picked tomato lentil spaghetti. Try the Dinner Run.`;
  const shareData = { title: "Dinner Run — Commerce-1", text, url: window.location.href };

  if (navigator.share) {
    try {
      await navigator.share(shareData);
      return;
    } catch (error) {
      if (error.name === "AbortError") return;
    }
  }

  try {
    await navigator.clipboard.writeText(`${text} ${window.location.href}`);
    showToast("Result copied to clipboard.");
  } catch {
    showToast("Copy unavailable. You can share this page URL.");
  }
}

inputs.forEach((input) => {
  input.addEventListener("change", () => selectDinner(input.value, true));
  input.addEventListener("keydown", (event) => {
    if (!["ArrowRight", "ArrowDown", "ArrowLeft", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    const current = inputs.indexOf(input);
    const delta = ["ArrowRight", "ArrowDown"].includes(event.key) ? 1 : -1;
    const next = inputs[(current + delta + inputs.length) % inputs.length];
    next.focus();
    selectDinner(next.value);
  });
});

resetButton.addEventListener("click", resetRound);
shareButton.addEventListener("click", shareResult);
