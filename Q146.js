function uniqueCharcters (userName)
{
    let set =new Set(userName);
    if(userName.length==set.size)
    {
        console.log("the string contain unique charcters");
    }
    else
    {
        console.log(`this string contains duplicate letters`);
    }
}
uniqueCharcters("prasanna");
uniqueCharcters("ajay");