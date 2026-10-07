import mongoose from 'mongoose';

const userSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
            index: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            lowercase: true,
            index: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
            unique: true,
            match: /^[0-9]{10}$/,
            index: true,
        },

        password: {
            type: String,
            required: true,
        },

        role: {
            type: String,
            enum: ['user', 'admin'],
            default: 'user',
        },

        isVerified: {
            type: Boolean,
            default: false,
        },

        verifyOtp: {
            type: String,
            default: null,
        },

        verifyOtpExpire: {
            type: Date,
            default: null,
        },

        resetOtp: {
            type: String,
            default: null,
        },

        resetOtpExpire: {
            type: Date,
            default: null,
        },
    },
    {
        timestamp: true,
    },
);

export default mongoose.model('User', userSchema);
