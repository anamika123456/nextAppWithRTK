export async function login(requestJson){
    let responseData = await fetch(`http://localhost:3000/api/user`,{
        method: "POST",
        body: JSON.stringify(requestJson)
    })
    responseData = await responseData.json();
    return responseData.success ; 
}