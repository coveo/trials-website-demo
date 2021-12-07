document.addEventListener("DOMContentLoaded", function () {
  const orgId = localStorage.getItem("organizationId");

  Appcues.identify(orgId ?? 'triggerFlowPlaceHolderID')
});

Appcues.on("flow_started", () => {
  const restartTourBtn = document.getElementById("restart-tour");
  document.body.className = "";
  restartTourBtn.classList.add("btn-fadeOut");
  restartTourBtn.classList.remove("btn-fadeIn");
});

Appcues.on("flow_skipped", () => {
  const restartTourBtn = document.getElementById("restart-tour");
  restartTourBtn.classList.add("btn-fadeIn");
  restartTourBtn.classList.remove("btn-fadeOut");
});

Appcues.on("step_completed", (eventObject) => {
  if (eventObject.stepId === "78bc3c9b-3c81-4a55-8ed3-49c036e261ce") {
    const restartTourBtn = document.getElementById("restart-tour");
    restartTourBtn.classList.add("btn-fadeIn");
    restartTourBtn.classList.remove("btn-fadeOut");
  }
});
