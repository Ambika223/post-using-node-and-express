const cl = console.log;
const PORT = 3000;
const app = require('./app');
app.listen(PORT, () => {
    cl(`Server is running on Port ${PORT}`);
})
