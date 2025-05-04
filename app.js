 const passwordbox=document.getElementById("password");
 const length=12;


 const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
 const lowercase="abcdefghijklmnopqrstuvwxyz";

const number="0123456789";
 const symbol="~!@#$%^&*()_+=-:{}|[]\<>?/";

 const allChars = number + lowercase + symbol+uppercase

 function createPassword(){
    let password=" ";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowercase[Math.floor(Math.random()*lowercase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbol[Math.floor(Math.random()*symbol.length)];
      
    while(length> password.length){
        password += allChars[Math.floor(Math.random()*allChars.length)];

    }
    passwordbox.value =password;
}
function copy(){
    navigator.clipboard.writeText(passwordbox.value)
        .then(() => {
            alert("Password copied to clipboard!");
            // Optional: show a temporary message to the user
        })
        .catch(err => {
            console.error("Failed to copy: ", err);
        });

}