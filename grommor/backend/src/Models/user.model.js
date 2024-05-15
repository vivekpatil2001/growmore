import mongoose from 'mongoose';
import jwt from 'jsonwebtoken';

const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    phoneNumber: {
        type: String,
        
        minLength: [10, 'mobile number must be 10 digits long'],
        maxLength: [15, 'mobile number only 15 digits long'],

    },

    ourReferralCode: {
        type: String,
        trim: true,
    },

    acceptReferralCode: {
        type: String,
    
        trim: true,
    },

    mobileNumber: {
        type: String,
        
        minLength: [10, 'mobile number must be 10 digits long'],
        maxLength: [15, 'mobile number only 15 digits long'],
    },

    otp: {
        type: String,
        
        trim: true,
    },
    totalReferrals: {
        type: Number,
        type: Schema.Types.ObjectId,
        ref: 'Referral',
        default: 0,
        min: 0,
        max: 100,
    },

    




}, { timestamps: true });


userSchema.methods = {

    
    generateToken: async function () {

        return await jwt.sign(

            {   
                id: this._id, phoneNumber: this.phoneNumber, 
                ourReferralCode: this.ourReferralCode,
                acceptReferralCode: this.acceptReferralCode
            },
            process.env.JWT_SECRET,

            {
                expiresIn: "1d",
            }
        )
    }


}

export const User = mongoose.model('User', userSchema);