function NavBar(){
    return (
        <div style={{display:'flex',justifyContent:'space-between',backgroundColor:'blue',border:'1px solid darkblue',padding:'20px',height:'50px',borderRadius:'20px',fontsize:'x-large'}}>
      <h1 style={{fontweight:'bold',fontstyle:'bold',color:'white',fontsize:'60px'}}>Jyothi</h1>
      <button style={{backgroundColor:'lavender',borderRadius:'10px',width:'90px',height:'40px',display:'flex',justifyContent:'center',alignItems:'center'}}>Login</button>
      
    </div>
    )
}

export default NavBar;