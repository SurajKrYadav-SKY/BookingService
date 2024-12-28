const { BookingService } = require("../services/index");
const { StatusCodes } = require("http-status-codes");

const bookingService = new BookingService();

const create = async (req, res) => {
  try {
    const response = await bookingService.createBooking(req.body);
    console.log("from booking controller :", response);
    return res.status(StatusCodes.OK).json({
      message: "Successfylly completed the booking",
      success: true,
      error: {},
      data: response,
    });
  } catch (error) {
    console.log("from booking controller", error);
    res.status(error.statusCodes).json({
      message: error.message,
      success: false,
      error: error.explanation,
      data: {},
    });
  }
};

module.exports = {
  create,
};
