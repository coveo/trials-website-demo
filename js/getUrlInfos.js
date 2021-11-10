
const hiddenParamMatcher = /\?orgId=[^&]*&userId=[^&|#]*/
const remainingParamOperatorMatcher = /\&.*?/

function cleanUrlFromHiddenQueryParams() {
    const url = window.location.href
    const [baseUrl, remainingParams]= url.split(hiddenParamMatcher)
    if(remainingParams) {
        const fixedRemainingParams = remainingParams.replace(remainingParamOperatorMatcher, '?')
        const newUrlWithoutHiddenParams = baseUrl.concat(fixedRemainingParams)
    
        history.replaceState(null, document.title, newUrlWithoutHiddenParams)
    } else if(baseUrl) {
        history.replaceState(null, document.title, baseUrl)
    }
}

function queryParamsFromUrl() {
    const urlSearchParams = new URLSearchParams(window.location.search);
    return Object.fromEntries(urlSearchParams.entries());
}

function setUserInformationInLocalStorage() {
    const queryParam = queryParamsFromUrl()

    if(queryParam.orgId) {
        localStorage.setItem('organizationId', queryParam.orgId)
    }
    if(queryParam.userId) {
        localStorage.setItem('userId', queryParam.userId)
    }
    if(queryParam.fromCoveoDev) {
        localStorage.setItem('coveoDev', 'true')
    }
}

function main() {
    setUserInformationInLocalStorage()
    cleanUrlFromHiddenQueryParams()
}

main()
