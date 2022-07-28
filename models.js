const mongoose = require('mongoose');

const dataSchema = new mongoose.Schema({
    nModified: Number,
    NPU0: {
        group: String,
        NPU: String,
        maxEntries: Number,
        usedEntries: Number,
        percentUsage: Number,
        color: String
    },
    NPU1: {
        group: String,
        NPU: String,
        maxEntries: Number,
        usedEntries: Number,
        percentUsage: Number,
        color: String
    },
    NPU2: {
        group: String,
        NPU: String,
        maxEntries: Number,
        usedEntries: Number,
        percentUsage: Number,
        color: String
    },
    NPU3: {
        group: String,
        NPU: String,
        maxEntries: Number,
        usedEntries: Number,
        percentUsage: Number,
        color: String
    }
})

dataSchema.methods.getID = function() {
    return this.id;
}

module.exports = mongoose.model('Data', dataSchema);
