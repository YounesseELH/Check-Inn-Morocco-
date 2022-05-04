import mongoose from 'mongoose';
     //postShema
const hotelSchema = mongoose.Schema({
    title: String, // hotel name
    message: String, // hotel detaile
    name: String,    
    creator: String,
    tags: [String],
    selectedFile: String,
    likes: { type: [String], default: [] },
    comments: { type: [String], default: [] },
    createdAt: {
        type: Date,
        default: new Date(),
    },
})

var HotelData = mongoose.model('HotelData', hotelSchema);

export default HotelData; // PostMessage