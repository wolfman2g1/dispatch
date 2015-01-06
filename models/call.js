var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CallSchema = new mongoose.Schema( {
    call_id: String,
    call_meta: Date,
    caller_name : String,
    caller_street: String,
    caller_city: String,
    caller_state: String,
    call_type: String,
    call_status: String,
    call_resource:[ {type: Schema.Types.ObjectId, ref: 'Resource'}]
});
module.exports = mongoose.model('Call', CallSchema);
