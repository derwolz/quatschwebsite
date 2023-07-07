//website ReichstagRivals.com
const Debug = false;
const testAPI = "http://localhost:8000"
const API = "https://api.QuatschGame.com"
// routes = store.reichstagrivals.com holds shopping test page || api.reichstagrivals.com || reichstagrivals.com landing page until product release
export const getRequest = (route) => {
    if (Debug === true)
        return testAPI + route
    else
        return API + route
}
