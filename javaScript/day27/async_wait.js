async function fetchPost() {
    try{
      let res = await fetch("https://jsonplaceholder.typicode.com/posts");
      let data = await res.json()
      console.log("fetching the Post Data", data) 
    }
    catch(error) {
         console.log("Error fetching Post data", error)
    }
}


async function fetchUser() {
    try{
    let res = await fetch("https://jsonplaceholder.typicode.com/users");
    let data = await res.json();
    console.log("fetching the User data", data)
    }
    catch(error){
       console.log("Error fetching  user data", error)
    }
   
}


async function getData(){
    await fetchPost();
    await fetchUser();
}


getData();