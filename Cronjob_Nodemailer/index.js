import express from 'express'
import cron from 'node-cron'
import report from './report.js'

const app = express()
const port = 5000

app.get('/', (req, res) => {
    res.send('Hello, my cron job is working 🚀')
})

// Run every 8 seconds
cron.schedule("*/8 * * * * *", async () => {
    console.log("⏰ Running scheduled report...");
    await report()
})

app.listen(port, () => {
    console.log(`✅ Server running on port ${port}`)
})
