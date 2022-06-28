import * as userService from '../../utilities/users-service'

export default function OrderHistoryPage(props) {

    async function handleCheckToken(){
       const expDate = await userService.checkToken()
        console.log(expDate)
       
    }

    return(
        <>
    <h1> Order History </h1>
    <button onClick={handleCheckToken}> Check if My Login Expires </button>
    </>
    )
}