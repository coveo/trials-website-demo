function appcuesInit(orgId) {
  Appcues.identify(orgId);
}

document.addEventListener("DOMContentLoaded", function () {
  const orgId = localStorage.getItem("organizationId");
  const isFromCoveoDev = localStorage.getItem("coveoDev");

  if (orgId) {
    appcuesInit(orgId, isFromCoveoDev);
  }

  userflow.init("ct_aybfvgmsqrh4np7ixkp5ibwnfu");
  userflow.identify("test123", {
    name: "Kien Dang",
    email: "kdang@coveo.com",
    signed_up_at: "2021-10-28T21:05:35.000+00:00",
  });
});

Appcues.on("flow_started", () => {
    const restartTourBtn = document.getElementById('restart-tour');
    restartTourBtn.classList.add('btn-fadeOut')
    restartTourBtn.classList.remove('btn-fadeIn')

});

Appcues.on('flow_skipped', () => {
    const restartTourBtn = document.getElementById('restart-tour');
    restartTourBtn.classList.add('btn-fadeIn');
    restartTourBtn.classList.remove('btn-fadeOut');
})

Appcues.on("step_completed", (eventObject) => {
    if (eventObject.stepId === "78bc3c9b-3c81-4a55-8ed3-49c036e261ce") {
        const restartTourBtn = document.getElementById('restart-tour');
        restartTourBtn.classList.add('btn-fadeIn');
        restartTourBtn.classList.remove('btn-fadeOut');
    }
});