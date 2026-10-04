export const errorMiddleware = (err, rrq, res, next) => {
    console.log(err);
    const statusCode = err.statusCode || 500;

    res.status(statusCode).json({
        success: false,
        message: err.statusCode || "Internal server error",
    })
}