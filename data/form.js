const mysql = require('mysql');

// Connection Pool
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'demoproject'
})

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("MySQL Connection Success");
  }
});


// Add new user
exports.add = (req, res) => {
   console.log(req.body)
    const { username,email, phonenumber, meetingtime, message  } = req.body;
  
      try {
            const { username,email, phonenumber, meetingtime, message } = req.body;
        if (!username || !email ||!phonenumber ||!meetingtime ||!message) {
            return res.render('error')            
  
        }   
        
   // User the connection
      db.query('INSERT INTO contactform SET username = ?, email = ?, phonenumber = ?, meetingtime = ?,message = ?', [username,email,phonenumber,meetingtime,message], (err,msg) => {
        if (!err) {
          res.render('index',{
            message: "User Data Has Been Sent.",
            messagetype:"good"
        });
          console.log('The data from user table: \n');
        } else {
          console.log(err);
        }
      });
    
    }catch{
      console.log("Update error on fields.")
    }
    }