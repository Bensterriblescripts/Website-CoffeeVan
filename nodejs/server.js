const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors({ origin: 'http://localhost:5173' }));
app.use(express.json());

// MySQL Connection
const mysql = require('mysql2');
const mySqlUser = process.env.MYSQL_USER;
const mySqlPass = process.env.MYSQL_PASS;
const db = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: mySqlUser,
    password: mySqlPass,
    database: 'prod_coffeevan'
  });

// Get user by phone number
function getUser(ph) {
    return new Promise((resolve, reject) => {
      db.query('SELECT * FROM prod_coffeevan.orders WHERE phone = ?', 
      ph, 
      function(err, results) {
        if (err) {
          reject(err);
        } 
        else {
          resolve(results);
        }
      });
    });
}

// POST Endpoint
app.post('/formpost', (req, res) => {
    const form = req.body;
    const ph = form.phone;

    // Invlalid form
    if (form.name == null || form.phone == null || form.phone == "" || form.phone == undefined || form.time == null) {
        console.log('Invalid phone input.');
        return;
    }

    // Check if the user exists by phone number
    getUser(ph)
    .then(userrecord => {

        // New record
        if (userrecord == null || userrecord == "" || userrecord == undefined) {
            newrecord = {
                name: form.name, // VARCHAR 45
                phone: form.phone, // VARCHAR 45
                type: form.type, // INT
                size: form.size, // INT 
                details: form.details, // VARCHAR 45
                time: form.time, // VARCHAR 45
            };
            db.query('INSERT INTO prod_coffeevan.orders SET name = ?, phone = ?, type = ?, size = ?, details = ?, time = ?, ordernum = 1, noreturn = 0', 
            [newrecord.name, newrecord.phone, newrecord.type, newrecord.size, newrecord.details, newrecord.time, newrecord.ordernum], 
            function(err, results) {
                if (err) throw err;
            });
        }

        // The Naughty List
        else if (userrecord[0].noreturn == 1) {
            console.log('degen')
        }

        // Update existing record
        else if (userrecord[0].phone !== undefined && userrecord[0].phone == form.phone) {

            // Only increment ordernum if made 16 hours  the last order
            if (userrecord[0].time < (form.time - 57600)) {
                userrecord[0].ordernum++;
            }

            userrecord[0].name = form.name;
            userrecord[0].details = form.details;
            userrecord[0].time = form.time;
            db.query('UPDATE prod_coffeevan.orders SET name = ?, type = ?, size = ?, details = ?, time = ?, ordernum = ? WHERE phone = ?', 
            [userrecord[0].name, userrecord[0].type, userrecord[0].size, userrecord[0].details, userrecord[0].time, userrecord[0].ordernum, userrecord[0].phone],
            function(err, results) {
                if (err) throw err;
            });
        }
    })
    .catch(err => {
        console.error(err);
    });
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});
