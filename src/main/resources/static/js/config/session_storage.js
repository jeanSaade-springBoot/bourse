function setJwt(jwt)
{
	sessionStorage.setItem("jwt",jwt);
}

function getJwt()
{
	return sessionStorage.getItem("jwt");
}
function clearSessionStorage()
{
	sessionStorage.clear();
}
function setFirstLastName(firstName, lastName, username)
{
	sessionStorage.setItem("firstLastName",firstName+" "+lastName);
	sessionStorage.setItem("username",username);
}
function getFirstLastName()
{
	return sessionStorage.getItem("firstLastName");
}
function getUsername()
{
	return sessionStorage.getItem("username");
}

