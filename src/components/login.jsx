function Login(){
    return(
        <div>
            <h1>Login</h1>
         <div>
            <input type="text" placeorder="enter your name"></input>
              <input type="email" placeholder="Enter your Email Id"></input>
            <input type="password" placeholder="Enter your password"></input>
          </div>  
          <button>Login</button>
          <a href="/user">Forgot password</a>
         </div>
    )
}

export default Login;