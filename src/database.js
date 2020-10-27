var informix = require('informixdb');
const express = require('express')
const router = express.Router()

const connectionString = "SERVER=dbServerName; DATABASE=dbName; HOST=hostName; SERVICE=port; UID=userID; PWD=password;";



router.get('/', function (req, res, next) {
    informix.open(connectionString, function (err, conn) {
        if (err) {
            res.render('index', {
                error: err,
                data: ''
            })
        }else {
            conn.query('select 1 from table(set{1})', function (err, data) {
                if (err) {
                    res.render('index',{
                        error: err,
                        data: data
                    })
                }else {
                        res.render('index',{
                            error: err,
                            data: data
                        })
                };
                conn.close(function () {
                    console.log('done');
                });
            });
        }
    });
});

module.exports = router