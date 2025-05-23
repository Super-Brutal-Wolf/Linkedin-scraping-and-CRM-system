"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Campaign = void 0;
const mongoose_1 = __importStar(require("mongoose"));
const CampaignSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    startDate: { type: Date, required: true },
    endDate: { type: Date, required: true },
    targetRole: { type: String, required: true },
    location: { type: String, required: true },
    seniority: { type: String, required: true },
    outreachType: { type: String, required: true },
    createdBy: { type: mongoose_1.Schema.Types.ObjectId, ref: 'User', required: true },
    status: {
        type: String,
        enum: ['draft', 'active', 'paused', 'completed'],
        default: 'draft'
    },
    linkedinSearchResults: {
        contacts: [{
                name: String,
                role: String,
                company: String,
                selected: { type: Boolean, default: false },
                profilePicture: String,
                profileUrl: String,
                location: String
            }],
        total: Number,
        currentPage: Number,
        pageSize: Number,
        totalPages: Number,
        searchParams: {
            location: String,
            targetRole: String,
            seniority: String
        },
        lastUpdated: Date
    },
    githubSearchResults: {
        contacts: [{
                name: String,
                role: String,
                company: String,
                location: String,
                selected: Boolean,
                profilePicture: String,
                githubUrl: String,
                contributions: Number,
                repositories: Number
            }],
        total: Number,
        currentPage: Number,
        pageSize: Number,
        totalPages: Number,
        searchParams: {
            location: String,
            targetRole: String,
            seniority: String
        },
        lastUpdated: Date
    },
    emailTemplate: String
}, {
    timestamps: true
});
exports.Campaign = mongoose_1.default.model('Campaign', CampaignSchema);
