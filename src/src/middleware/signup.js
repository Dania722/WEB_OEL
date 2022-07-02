import { Grid, Paper , Avatar , Typography, TextField, Button , Link , FormGroup ,
    Radio , RadioGroup , FormControl , FormControlLabel , FormLabel , Checkbox } from "@mui/material";
    import React from   "react";
    import HowToRegIcon from '@mui/icons-material/HowToReg';
    
    const Signup = () => {
        const paperstyle ={Padding:"30px 20px" , width:'500px' ,margin:"20px auto" ,  }
        const heading = {fontweight:'bold' , margin:"-10px 0 0 0" }
        const avatrastyle={backgroundColor :'green' , bottom:'20px' }
        const txt = { top:'3px'  }
        const btnstyle={margin:'8px 80px' , Padding:'100px', top:10 , marginBottom:"50px"}
        const radio = {right:115 , bottom:-10}
        const gp={ display:"inline" , margin:"5px 0 -12px 0 "}
        const signin = {marginTop:"-20px" }
        //  const check = { margin:"auto 10px" }
        const check={marginLeft:"110px"}
    
    
    
    
    //const [value, setValue] = useState('female');
    //const handleChange = (event) => {setValue(event.target.value);
        
        return (
    <Grid>
        <Paper  elevation={10} style={paperstyle} >
        <Grid align = "center">
        <Avatar sx={{ width: 66, height: 66 }}  style={avatrastyle} >  <HowToRegIcon/> </Avatar>
       <h2 style={heading}>Sign Up</h2>
       <Typography variant="caption">Please fill this form to register yourself ! </Typography>
        </Grid>
        <form align = "center">
        <TextField sx={{ width: '32ch' }}  label='Name' placeholder='name *' id="standard-basic" variant="standard" style={txt}  />
        <TextField sx={{ width: '32ch' }}  label='Email' placeholder='email *' id="standard-basic" variant="standard" style={txt}  />
        <TextField sx={{ width: '32ch' }}  label='Phone no' placeholder='contact *' id="standard-basic" variant="standard" style={txt}  />
        <FormControl component="fieldset" >
          <FormLabel component="legend" style={radio} >Gender</FormLabel>
          <RadioGroup
            aria-labelledby="gender"
            name="gender1" 
            style={gp}
          >
            <FormControlLabel value="Female" control={<Radio />} label="Female"  />
            <FormControlLabel value="Male" control={<Radio />} label="Male" />
            <FormControlLabel value="Other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
        <TextField sx={{ width: '32ch' }}  label='Password' placeholder='password *' type='password' id="standard-basic" variant="standard" style={txt} />
        <TextField sx={{ width: '32ch' }}  label='Confirm Password' placeholder='re-type password *' type='password' id="standard-basic" variant="standard" style={txt} />
        
    
        <FormGroup style={check} >
    <FormControlLabel   control={<Checkbox unChecked /> } 
    label ="I accept all the term & conditions." />
    </FormGroup>
        <Button  sx={{ width: '32ch' }}  type='submit' color='success'  variant="contained" style={btnstyle} href="/login" > 
        <Link href="#">
        </Link>  Sign in  </Button>
    
        <Typography  style={signin}> Already Signup ?
         <Link href="/login"  >
            Sign In 
    </Link>
    </Typography>
    
        </form>
    
    
        </Paper>
    </Grid>
        )
    }
    export default Signup;
    