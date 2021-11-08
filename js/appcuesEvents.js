function appcuesInit(orgId) {
    Appcues.identify(orgId)
}

document.addEventListener("DOMContentLoaded", function() {
    const orgId = localStorage.getItem('organizationId')
    const isFromCoveoDev = localStorage.getItem('coveoDev')

    if(orgId) {
        appcuesInit(orgId, isFromCoveoDev)
    }


    userflow.identify('test123', {
    name: 'Kien Dang',
    email: 'kdang@coveo.com',
    signed_up_at: '2021-10-28T21:05:35.000+00:00',
    });
  });
