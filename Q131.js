const listOfUserName=["prasanna","Pooja","kalavathi","veeraiah","kenchanahalli"];
function isUserPresent(username)
{
    if(listOfUserName.includes(username))
    {
        console.log(`Yes ,${username} is valid user`);
    }
    else 
    {
      console.log(`No ${username} is not valid user`)
    }
}
isUserPresent("prasanna");
isUserPresent("vedanthgm");