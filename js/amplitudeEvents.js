import amplitude from 'amplitude-js';

function amplitudeInit(isFromCoveoDev, userId) {
    amplitude.getInstance().init(isFromCoveoDev ? 'a3f5a01b8a40a7d5505a48238ac81458' : '342cfdda63cf76c0f5fa27b9f8ebe872' , userId, {
        apiEndpoint: 'analytics.cloud.coveo.com/amplitude',
    })
    amplitude.getInstance().logEvent('viewed demo search page');
}


document.addEventListener("DOMContentLoaded", function() {
    const userId = localStorage.getItem('userId')
    const isFromCoveoDev = localStorage.getItem('coveoDev')
    if(userId) {
        amplitudeInit(isFromCoveoDev, userId)
    }
})
