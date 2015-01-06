var mongoose = require('mongoose');

var ResourceSchema = new mongoose.Schema({
    unit_id: String,
    unit_type: String,
});

module.exports = mongoose.model('Resource', ResourceSchema);
