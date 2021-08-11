const database = require( "mime-db" );
var tableData = require("../data/table-data");
var waitListData = require("../data/waitinglist-data");

module.exports = function(app) {

      app.get('/api/tables', function(req, res){
            res.json(tableData);
      });

      app.get('/api/waitlist', function(req,res){
            res.json(waitListData)
      })

      app.post('/api/tables', function(req, res){
            console.log(req.body)
            if(tableData.tableArray.length < tableData.capacity){
                  tableData.tableArray.push(req.body);
                  res.json(true);
            } else {
                  waitListData.waitingArray.push(req.body);
                  res.json(false);
            }
      });

      app.post("/api/clear", function() {
            // Empty out the arrays of data
            tableData.tableArray.length = [];
            waitListData.waitingArray.length = [];

            console.log(tableData)
            console.log(waitListData)
        
          });

          app.post("/api/updateCapacity", function(req, res){
                
           var capacityData = req.body
           console.log("New Table Capacity:",capacityData.table)
           console.log("New Wait Capacity: ", capacityData.wait)
           
            tableData.capacity = capacityData.table
            waitListData.capacity = capacityData.wait
            
            console.log("Table Data: ",tableData)
            console.log("WaitList Data:" , waitListData)

            res.json(true);
           

          })
        
}