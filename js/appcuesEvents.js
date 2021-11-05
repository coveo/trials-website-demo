function appcuesInit(orgId) {
    Appcues.identify(orgId)
}

document.addEventListener("DOMContentLoaded", function() {
    const orgId = localStorage.getItem('organizationId')
    const isFromCoveoDev = localStorage.getItem('coveoDev')
    if(orgId) {
        appcuesInit(orgId, isFromCoveoDev)
    }
  });
