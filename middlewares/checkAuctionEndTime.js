import mongoose from "mongoose";
import { catchAsyncErrors } from "./catchAsyncErrors.js";
import ErrorHandler from "./error.js";
import { Auction } from "../models/auctionSchema.js";

export const checkAuctionEndTime = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;

  // Validate ID
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return next(new ErrorHandler("Invalid ID format.", 400));
  }

  // Find Auction by ID
  const auction = await Auction.findById(id);
  if (!auction) {
    return next(new ErrorHandler("Auction not found.", 404));
  }

  const now = new Date(Date.now());

  // Check if auction has started
  if (new Date(auction.startTime) > now) {
    return next(new ErrorHandler("Auction has not started yet.", 400));
  }

  // Check if auction has ended
  if (new Date(auction.endTime) < now) {
    return next(new ErrorHandler("Auction has ended.", 400));
  }

  // Proceed to next middleware if auction is ongoing
  next();
});
