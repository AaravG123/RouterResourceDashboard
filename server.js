const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const Data = require('./models');
const cors = require('cors');

const app = express();
app.use(cors());
const PORT = process.env.PORT || 8080;

mongoose.connect('mongodb+srv://mongodb:!BGN9-rwZm6mEj-@cluster0.t1nbj.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log('Mongoose is connected');
});

// async function run() {
//     const data = await Data.create({ 
//         nModified: 0,
//         NPU0: {
//             group: "stage1_lb_group",
//             NPU: "NPU-0",
//             maxEntries: 16384,
//             usedEntries: 7000,
//             percentUsage: null,
//             color: ''
//         },
//         NPU1: {
//             group: "stage1_lb_group",
//             NPU: "NPU-1",
//             maxEntries: 16384,
//             usedEntries: 14000,
//             percentUsage: null,
//             color: ''
//         },
//         NPU2: {
//             group: "stage1_lb_group",
//             NPU: "NPU-2",
//             maxEntries: 16384,
//             usedEntries: 16000,
//             percentUsage: null,
//             color: ''
//         },
//         NPU3: {
//             group: "stage1_lb_group",
//             NPU: "NPU-3",
//             maxEntries: 16384,
//             usedEntries: 5000,
//             percentUsage: null,
//             color: ''
//         }
//      })
//      console.log(data);
// }
// run();

// async function deleteData() {
//     const deleter = await Data.deleteOne({  });
//     console.log(deleter);
// }
// deleteData();

// async function findData() {
//     const finder = await Data.find({  });
//     console.log(finder);
// }
// findData();

app.get('/api', (req, res) => {
    Data.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

app.use(express.json());

app.use(morgan('tiny'));

app.listen(PORT, console.log(`Server is starting at port ${PORT}`));