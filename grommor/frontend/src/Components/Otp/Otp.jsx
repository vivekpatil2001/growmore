// import {useState} from 'react'
// import {Link, Route, Routes} from 'react-router-dom'
// import axios from 'axios'


// // eslint-disable-next-line react/prop-types
// const Home = ({setPhoneNumber, handleSendOtp}) => {


//     return (
//         <div>
//             <h1>otp varification </h1>
//             <form id='form1' onSubmit={handleSendOtp}>
//                 <label>
//                     Phone Number :<input type="tel" name="mobile"  onChange={e => setPhoneNumber(e.target.value)} />
//                 </label>    

//                 <Link to="/verify">
//                     <button onClick={handleSendOtp}>Send OTP</button>
//                 </Link>
//             </form>
        
//         </div>
//     )
// }




// const Verify = ({handleVerifyOtp}) => {
   
    

//     return (
//         <>
//             <div>
//                 <h1>verify otp</h1>

//                 <label>
//                     OTP :<input type="text" value={otp} name="otp" onChange={e => setOtp(e.target.value)} />
//                 </label>
//                 <Otp />
//                 <button onClick={handleVerifyOtp}>Verify OTP</button>
                
//             </div>
//         </>

//     )
// }



// function Otp() {
//     const [phoneNumber, setPhoneNumber] = useState('')
//     const [otp, setOtp] = useState('')

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         const config = {
//             "headers":{
//                 "Content-Type":"application/json"
//             }
//         }
//         const body = JSON.stringify({
//           phoneNumber
//         })
//         try{
//             const response = await axios.post('http://localhost:5000/sendOtp', body, config)
//             console.log(response)

//             const data = response.data;

//             console.log(response.data.message)
//             alert(data.message);
            



//             console.log(phoneNumber)
            

        

//         } catch(error){
//           console.log(error)
//         }
//       }

          
//     const handleVerifyOtp = async(e, {phoneNumber, otp}) => {

//         e.preventDefault();

//         const config = {
//             "headers" : {
//                 "Content-Type":"application/json"
//             }
//         }

//         const body = JSON.stringify({
//             phoneNumber,
//             userOtp: otp
//         })

//         const response = await axios.post('http://localhost:5000/verify', body, config)
//         console.log(response)

//         console.log(response.data)
//         console.log(response.data.message)

//     }

//     return (
//         <div>
            
//                 <Routes>

//                     <Route path="/verify" element={<Verify phoneNumber={phoneNumber} handleVerifyOtp={handleVerifyOtp}  />} />

//                     <Route path="/sendotp" element={<Home setPhoneNumber={setPhoneNumber} handleSendOtp={handleSubmit} />} />
                    

//                 </Routes>
         
//         </div>
//     )

// }







// export {

//     Verify,
//     Home,
//     Otp
// }


