export const errorHandler = (err, req, res, next) => {
    console.error(`Error occurred on path: ${req.path}`, err);
    res.status(500).json({ message: 'Internal Server Error', error: err.message });
}