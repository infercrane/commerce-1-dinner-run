const ROUND_SECONDS = 15;
const dinners = {
  lentil_pasta: { title: "Tomato lentil spaghetti", eligible: true, modelMatch: true },
  cashew_pesto_pasta: { title: "Cashew pesto pasta", eligible: false, modelMatch: false },
  tofu_penne: { title: "Tofu broccoli penne", eligible: true, modelMatch: false },
  bean_tacos: { title: "Black bean tacos", eligible: true, modelMatch: false },
};

const answers = [...document.querySelectorAll(".answer")];
const startView = document.querySelector("#startView");
const choiceView = document.querySelector("#choiceView");
const resultView = document.querySelector("#resultView");
const startButton = document.querySelector("#startButton");
const resetButton = document.querySelector("#resetButton");
const shareButton = document.querySelector("#shareButton");
const timerValue = document.querySelector("#timerValue");
const timerTrack = document.querySelector("#timerTrack");
const scoreValue = document.querySelector("#scoreValue");
const statusValue = document.querySelector("#statusValue");
const resultLabel = document.querySelector("#resultLabel");
const resultHeadline = document.querySelector("#resultHeadline");
const resultSummary = document.querySelector("#resultSummary");
const pointsEarned = document.querySelector("#pointsEarned");
const humanChoice = document.querySelector("#humanChoice");
const humanTime = document.querySelector("#humanTime");
const policyResult = document.querySelector("#policyResult");
const celebration = document.querySelector("#celebration");
const toast = document.querySelector("#toast");

let gameState = "ready";
let selectedDinner = null;
let roundStartedAt = 0;
let roundEndsAt = 0;
let remainingSeconds = ROUND_SECONDS;
let finalScore = 0;
let timerFrame = 0;
let toastTimer = 0;

function icon(name) {
  return `<svg aria-hidden="true"><use href="#i-${name}"></use></svg>`;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("is-visible");
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2200);
}

function setView(view) {
  startView.hidden = view !== "start";
  choiceView.hidden = view !== "choice";
  resultView.hidden = view !== "result";
}

function formatScore(score) {
  return String(score).padStart(4, "0");
}

function updateTimer() {
  if (gameState !== "playing") return;
  remainingSeconds = Math.max(0, (roundEndsAt - performance.now()) / 1000);
  timerValue.textContent = remainingSeconds.toFixed(1);
  timerTrack.style.transform = `scaleX(${remainingSeconds / ROUND_SECONDS})`;
  document.body.classList.toggle("time-critical", remainingSeconds <= 5);

  if (remainingSeconds <= 0) {
    finishRound(null);
    return;
  }
  timerFrame = window.requestAnimationFrame(updateTimer);
}

function startRound() {
  if (gameState === "playing") return;
  gameState = "playing";
  selectedDinner = null;
  finalScore = 0;
  remainingSeconds = ROUND_SECONDS;
  roundStartedAt = performance.now();
  roundEndsAt = roundStartedAt + ROUND_SECONDS * 1000;
  timerValue.textContent = ROUND_SECONDS.toFixed(1);
  timerTrack.style.transform = "scaleX(1)";
  scoreValue.textContent = "0000";
  statusValue.textContent = "Choose now";
  document.body.classList.add("mission-live");
  document.body.classList.remove("time-critical");
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.classList.remove("is-selected");
  });
  setView("choice");
  answers[0].focus({ preventScroll: true });
  timerFrame = window.requestAnimationFrame(updateTimer);
}

function computeScore(dinner) {
  if (!dinner || !dinner.eligible) return 0;
  const base = 1000;
  const speed = Math.round((remainingSeconds / ROUND_SECONDS) * 300);
  return base + speed;
}

function finishRound(id) {
  if (gameState !== "playing") return;
  window.cancelAnimationFrame(timerFrame);
  gameState = "result";
  selectedDinner = id;
  const dinner = id ? dinners[id] : null;
  const elapsed = Math.min(ROUND_SECONDS, (performance.now() - roundStartedAt) / 1000);
  finalScore = computeScore(dinner);

  document.body.classList.remove("mission-live", "time-critical");
  answers.forEach((answer) => {
    answer.disabled = true;
    answer.classList.toggle("is-selected", answer.dataset.dinner === id);
  });
  scoreValue.textContent = formatScore(finalScore);
  timerValue.textContent = Math.max(0, remainingSeconds).toFixed(1);
  statusValue.textContent = !dinner ? "Timed out" : dinner.eligible ? "5 / 5 cleared" : "4 / 5 · blocked";
  pointsEarned.textContent = `+${formatScore(finalScore)}`;
  humanChoice.textContent = dinner ? dinner.title : "No decision";
  humanTime.textContent = dinner ? `locked in ${elapsed.toFixed(1)}s` : "15.0s elapsed";

  celebration.classList.toggle("is-active", Boolean(dinner?.modelMatch));
  resultView.className = `result-view ${!dinner ? "is-timeout" : dinner.modelMatch ? "is-match" : dinner.eligible ? "is-safe" : "is-trap"}`;

  if (!dinner) {
    resultLabel.textContent = "Clock expired";
    resultHeadline.textContent = "No call made.";
    resultSummary.textContent = "Commerce-1 ranked the lentil dinner first while the customer was waiting.";
    policyResult.className = "policy-result is-neutral";
    policyResult.innerHTML = `${icon("clock")}<div><span>Checkout code</span><strong>No checkout attempted</strong><p>No basket was submitted before the timer expired.</p></div>`;
  } else if (dinner.modelMatch) {
    resultLabel.textContent = "Checkout cleared · model match";
    resultHeadline.textContent = "Five rules. Cleared.";
    resultSummary.textContent = "Your basket passes policy. Commerce-1 independently ranked the same dinner first.";
    policyResult.className = "policy-result is-pass";
    policyResult.innerHTML = `${icon("check")}<div><span>Checkout code</span><strong>Safe to continue</strong><p>This basket satisfies the frozen budget, time, diet, servings, and declared allergy rules.</p></div>`;
  } else if (dinner.eligible) {
    resultLabel.textContent = "Checkout cleared · different model call";
    resultHeadline.textContent = "Five rules. Cleared.";
    resultSummary.textContent = "Your basket passes policy. Commerce-1 independently ranked the lentil dinner first.";
    policyResult.className = "policy-result is-pass";
    policyResult.innerHTML = `${icon("check")}<div><span>Checkout code</span><strong>Safe to continue</strong><p>This basket satisfies the frozen budget, time, diet, servings, and declared allergy rules.</p></div>`;
  } else {
    resultLabel.textContent = "Policy trap";
    resultHeadline.textContent = "Checkout blocked.";
    resultSummary.textContent = "The basket looked fast and affordable, but it violated the customer’s hard allergy rule.";
    policyResult.className = "policy-result is-block";
    policyResult.innerHTML = `${icon("x")}<div><span>Checkout code</span><strong>Blocked: contains cashew</strong><p>The allergy rule stops this basket independently of the model.</p></div>`;
  }

  setView("result");
  resultHeadline.focus({ preventScroll: true });
}

function resetRound() {
  window.cancelAnimationFrame(timerFrame);
  gameState = "ready";
  selectedDinner = null;
  remainingSeconds = ROUND_SECONDS;
  finalScore = 0;
  document.body.classList.remove("mission-live", "time-critical");
  timerValue.textContent = ROUND_SECONDS.toFixed(1);
  timerTrack.style.transform = "scaleX(1)";
  scoreValue.textContent = "0000";
  statusValue.textContent = "Ready";
  celebration.classList.remove("is-active");
  answers.forEach((answer) => {
    answer.disabled = false;
    answer.classList.remove("is-selected");
  });
  setView("start");
  startButton.focus({ preventScroll: true });
}

async function shareResult() {
  const dinner = selectedDinner ? dinners[selectedDinner] : null;
  const verdict = !dinner ? "I ran out of time" : dinner.modelMatch ? "I matched Commerce-1" : dinner.eligible ? "I found a policy-safe alternative" : "checkout caught my allergy trap";
  const text = `${verdict} in Checkout Rush and scored ${finalScore} game points. Can you beat it?`;
  const shareData = { title: "Checkout Rush — Commerce-1", text, url: window.location.href };

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
    showToast("Score copied to clipboard.");
  } catch {
    showToast("Copy unavailable. Share this page URL instead.");
  }
}

answers.forEach((answer) => answer.addEventListener("click", () => finishRound(answer.dataset.dinner)));
startButton.addEventListener("click", startRound);
resetButton.addEventListener("click", resetRound);
shareButton.addEventListener("click", shareResult);

document.addEventListener("keydown", (event) => {
  if (event.metaKey || event.ctrlKey || event.altKey || event.repeat) return;
  if (event.target instanceof Element && event.target.closest("a, button, input, select, textarea, summary, [contenteditable='true']")) return;
  const key = event.key.toLowerCase();
  if (gameState === "ready" && (key === "s" || key === "enter")) {
    event.preventDefault();
    startRound();
    return;
  }
  if (gameState === "result" && key === "r") {
    event.preventDefault();
    resetRound();
    return;
  }
  if (gameState !== "playing") return;
  const index = ["a", "b", "c", "d"].indexOf(key);
  if (index >= 0) {
    event.preventDefault();
    finishRound(answers[index].dataset.dinner);
  }
});
