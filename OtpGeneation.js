const otpgeneration=()=>
{
    return (Math.floor(Math.random()*1000));
}
console.log(`Here is your OTP ${otpgeneration()}`);