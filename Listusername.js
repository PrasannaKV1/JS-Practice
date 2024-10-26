const listofusername=["Prasanna","kenchanahalli","veeraiah","pooja",];
function ispresentUsername(userName)
{
    if(listofusername.includes(userName))
    {
        console.log(`Yes ,${userName} is a valid user`);
    }
    else
    {
        console.log(`No,${userName} is not valid user`);
    }
}
ispresentUsername("Prasanna");
ispresentUsername("pooja");