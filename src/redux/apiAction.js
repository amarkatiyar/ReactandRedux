import axios from "axios"
// export const FETCH_USERS_SUCCESS = "FetchData2"
export const POST_USER_SUCCESS = "ADD_USER"

// export const fetchUsersSuccess = responseData =>{
//     return{
//         type: FETCH_USERS_SUCCESS,
//         payload: responseData
//     }
// }

// export const fetchData2 = () => {
//     return (dispatch) => {
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//         .then(response=>{
//             const responseData = response.data;
//             dispatch(fetchUsersSuccess(responseData))
//         })
//         .catch(err => dispatch(
//                   { type: "ERROR",msg: "Unable to fetch data" }))

//     }
//  }


export const addUser = userObj =>{
    // console.log("apihit data",data)
    return (dispatch) =>{
        axios.post("https://mchemist.in/user-signup-login-api/api/user/signup.php",{userObj})
        .then(response=>{
            console.log(response)
            dispatch({
                type: "ADD_USER",
                payload: response.data
            })
        })
        .catch(error=>{
            console.log(error)
        })
    }
}