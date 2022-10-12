// Short duration JWT token (5-10 min)
 function getJwtToken() {
    return sessionStorage.getItem("jwt")
}

 function setJwtToken(token) {
    sessionStorage.setItem("jwt", token)
}

// Longer duration refresh token (30-60 min)
 function getRefreshToken() {
    return sessionStorage.getItem("refreshToken")
}

 function setRefreshToken(token) {
    sessionStorage.setItem("refreshToken", token)
}

