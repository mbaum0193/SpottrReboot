var express = require("express")
var app = express()

var database = require("./database.js")

var HTTP_PORT = 8000

database.createTables( () => {});


app.listen(HTTP_PORT, () => {
    console.log("Server running on port %PORT%".replace("%PORT%", HTTP_PORT))
});

app.get("/", (req, res, next) => {
    res.json({"message": "Shit Works!"})
    database.insert_SpottrSite("RIT", "1 Lomb Memorial Drive")
    database.insert_ParkingLot(1, "CARLSON", "[]")
    database.insert_SpottrNode("MASTERNODE", 1, "TOP LEFT", 3)
    database.insert_SpottrNode("SLAVE0", 1, "TOP CENTER", 3)
    database.insert_SpottrNode("SLAVE1", 1, "TOP RIGHT", 3)
    
    database.insert_MasterNode(1, "masternode.com")
    
    database.insert_SlaveNode(2, 0)
    database.insert_SlaveNode(3, 0)
    
    database.insert_ParkingSpot("a0", 1, 0, 0, 76.01, 81.01)
    database.insert_ParkingSpot("a1", 1, 1, 0, 76.01, 81.01)
    database.insert_ParkingSpot("a2", 1, 2, 0, 76.01, 81.01)
    database.insert_ParkingSpot("b0", 2, 0, 0, 76.01, 81.01)
    database.insert_ParkingSpot("b1", 2, 1, 0, 76.01, 81.01)
    database.insert_ParkingSpot("b2", 2, 2, 0, 76.01, 81.01)
    database.insert_ParkingSpot("c0", 3, 0, 0, 76.01, 81.01)
    database.insert_ParkingSpot("c1", 3, 1, 0, 76.01, 81.01)
    database.insert_ParkingSpot("c2", 3, 2, 0, 76.01, 81.01)
});

// ================== SELECT ALL ENDPOINTS =================== //
app.get("/api/spottrsite", (req, res, next) => {
    database.selectall_SpottrSite((err, rows) => {
        if (err)
        {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({SpottrSite: rows})
    })
})

app.get("/api/parkinglot", (req, res, next) => {
    database.selectall_ParkingLot((err, rows) => {
        if (err)
        {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({ParkingLot: rows})
    })
})

app.get("/api/spottrnode", (req, res, next) => {
    database.selectall_SpottrNode((err, rows) => {
        if (err)
        {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({SpottrNode: rows})
    })
})

app.get("/api/masternode", (req, res, next) => {
    database.selectall_MasterNode((err, rows) => {
        if (err)
        {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({MasterNode: rows})
    })
})

app.get("/api/slavenode", (req, res, next) => {
    database.selectall_SlaveNode((err, rows) => {
        if (err)
        {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({SlaveNode: rows})
    })
})

app.get("/api/parkingspot", (req, res, next) => {
    database.selectall_ParkingSpot((err, rows) => {
        if (err)
        {
            res.status(400).json({"error":err.message})
            return
        }
        res.json({ParkingSpot: rows})
    })
})

// ================== SELECT ONE ENDPOINTS =================== //
app.get("/api/spottrsite/:id", (req, res, next) => {
    database.select_SpottrSite(req.params.id, (err, row) => {
        if (err)
        {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({SpottrSite: row})
    })
})

app.get("/api/parkinglot/:id", (req, res, next) => {
    database.select_ParkingLot(req.params.id, (err, row) => {
        if (err)
        {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({ParkingLot: row})
    })
})

app.get("/api/spottrnode/:id", (req, res, next) => {
    database.select_SpottrNode(req.params.id, (err, row) => {
        if (err)
        {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({SpottrNode: row})
    })
})

app.get("/api/masternode/:id", (req, res, next) => {
    database.select_MasterNode(req.params.id, (err, row) => {
        if (err)
        {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({MasterNode: row})
    })
})

app.get("/api/slavenode/:id", (req, res, next) => {
    database.select_SlaveNode(req.params.id, (err, row) => {
        if (err)
        {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({SlaveNode: row})
    })
})

app.get("/api/parkingspot/:id", (req, res, next) => {
    database.select_ParkingSpot(req.params.id, (err, row) => {
        if (err)
        {
            res.status(400).json({"error": err.message})
            return
        }
        res.json({ParkingSpot: row})
    })
})

// ================ SELECT FILTER ENDPOINTS ================== //

// Default response for any other request
app.use((req, res) => {
    res.status(404)
});