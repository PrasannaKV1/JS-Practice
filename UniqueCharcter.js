function uniqueCharctercheck(userName)
{
    // creating set store only unique charcters 
        let set =new Set(userName);
        if(userName.length==set.size)
        {
            console.log("the input string contains unique charcters ");

        }
        else{
             console.log("the input string contain duplicate charcters");
        }

}
uniqueCharctercheck("Mike");
uniqueCharctercheck("prasanna");