
// create controllers for get user data
exports.fetchApiData = (req, res) =>{

    // handle Exception usign try and catch block
    try {
        
        fetch('https://jsonplaceholder.typicode.com/users',{
            method: 'Get',
            headers:{"Content-Type": "application/json"},
        }).then(response => response.json())       // return promises
        .then((data)=>{     
            res.send({data});
        }).catch((err)=>{
            console.log(err);
        })
    } catch (error) {
        
        res.status(500).json({
            success: false,
            message:"Internal Server Error"
        })
    }
   
}