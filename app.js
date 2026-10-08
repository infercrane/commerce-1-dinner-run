const dinners = {
  lentil_pasta: { title: "Tomato lentil spaghetti", eligible: true, modelMatch: true },
  cashew_pesto_pasta: { title: "Cashew pesto pasta", eligible: false, modelMatch: false },
  tofu_penne: { title: "Tofu broccoli penne", eligible: true, modelMatch: false },
  bean_tacos: { title: "Black bean tacos", eligible: true, modelMatch: false },
};

const inputs = [...document.querySelectorAll('input[name="dinner"]')];
const answers = [...document.querySelectorAll(".answer")];
const choiceView = document.querySelector("#choiceView");
const resultView = document.querySelector("#resultView");
const resultHeadline = document.querySelector("#resultHeadline");
const resultSummary = document.querySelector("#resultSummary");
const humanChoice = document.querySelector("#humanChoice");
const policyResult = document.querySelector("#policyResult");
const resetButton = document.querySelector("#resetButton");
const shareButton = document.querySelector("#shareButton");
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

function revealDecision(id) {
  const dinner = dinners[id];
  if (!dinner) return;

  selectedDinner = id;
  answers.forEach((answer) => answer.classList.toggle("is-selected", answer.dataset.dinner === id));
  inputs.forEach((input) => { input.checked = input.value === id; });

  humanChoice.textContent = dinner.title;
  resultHeadline.textContent = dinner.modelMatch ? "Same call." : "Different call.";
  resultSummary.textContent = dinner.modelMatch
    ? "You and Commerce-1 both ranked the lentil dinner first."
    : "Commerce-1 ranked the lentil dinner first. The full distribution is below.";

  if (dinner.eligible) {
    policyResult.className = "policy-result is-pass";
    policyResult.innerHTML = `${icon("check")}<div><span>Checkout code</span><strong>Safe to continue</strong><p>This basket satisfies the budget, time, vegetarian, servings, and declared nut-free rules.</p></div>`;
  } else {
    policyResult.className = "policy-result is-block";
    policyResult.innerHTML = `${icon("x")}<div><span>Checkout code</span><strong>Blocked: contains cashew</strong><p>The allergy rule stops this basket before checkout, independently of the model.</p></div>`;
  }

  choiceView.classList.add("is-leaving");
  window.setTimeout(() => {
    choiceView.hidden = true;
    resultView.hidden = false;
    resultView.classList.add("is-entering");
    resultHeadline.focus({ preventScroll: true });
  }, window.matchMedia("(prefers-reduced-motion: reduce)").matches ? 0 : 180);
}

function resetRound() {
  selectedDinner = null;
  inputs.forEach((input) => { input.checked = false; });
  answers.forEach((answer) => answer.classList.remove("is-selected"));
  resultView.hidden = true;
  resultView.classList.remove("is-entering");
  choiceView.hidden = false;
  choiceView.classList.remove("is-leaving");
  inputs[0].focus();
}

async function shareResult() {
  if (!selectedDinner) return;
  const dinner = dinners[selectedDinner];
  const text = dinner.modelMatch
    ? "Commerce-1 and I made the same call in the €18 Agent Test."
    : `My shopping agent recommended ${dinner.title}; Commerce-1 recommended tomato lentil spaghetti. Try the €18 Agent Test.`;
  const shareData = { title: "The €18 Agent Test — Commerce-1", text, url: window.location.href };

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
    showToast("Copy unavailable. Share this page URL instead.");
  }
}

inputs.forEach((input) => {
  input.addEventListener("change", () => revealDecision(input.value));
  input.addEventListener("keydown", (event) => {
    if (!["ArrowDown", "ArrowUp"].includes(event.key)) return;
    event.preventDefault();
    const current = inputs.indexOf(input);
    const next = inputs[(current + (event.key === "ArrowDown" ? 1 : -1) + inputs.length) % inputs.length];
    next.focus();
  });
});

resetButton.addEventListener("click", resetRound);
shareButton.addEventListener("click", shareResult);
