import { MongoClient } from "mongodb";
import { sendMail } from "./mailer.js";

const url = "mongodb://localhost:27017";
const dbName = "cronjob";
const client = new MongoClient(url);

export default async function report() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB");

    const db = client.db(dbName);
    const collection = db.collection("reports");

    // Example: Count today's reports
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const totalReportsToday = await collection.countDocuments({
      generatedAt: { $gte: today }
    });

    const message = `
Daily Report Summary

Total reports generated today: ${totalReportsToday}
Checked at: ${new Date().toLocaleString()}
    `;

    // Send email
    await sendMail("📊 Daily Cron Report", message);

  } catch (error) {
    console.error("❌ Report job error:", error.message);
  } finally {
    await client.close();
    console.log("🔌 MongoDB connection closed");
  }
}
