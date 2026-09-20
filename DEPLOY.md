# Deployment Guide for gtechcode (via Railway)

## Prerequisites
1.  **Railway Account:** Sign up at [Railway.app](https://railway.app).
2.  **GitHub Repo:** Ensure your code is pushed to your GitHub repository.

## Step-by-Step Deployment
1.  **Create Project:** Click **+ New Project** in Railway and select **Deploy from GitHub repo**.
2.  **Select Repository:** Choose `mehbhatt-tech/gtechcode`.
3.  **Automatic Build:** Railway will detect the `Dockerfile` we created. It will automatically build and deploy your app.
4.  **Add Database:**
    *   In your Railway project dashboard, click **+ Add** -> **Database** -> **PostgreSQL**.
    *   Railway will automatically provide a `DATABASE_URL` environment variable to your app.
5.  **Environment Variables:** 
    *   Go to the **Variables** tab in your Railway service.
    *   Ensure the following are set:
        *   `DATABASE_URL` (Provided by the Postgres plugin)
        *   `TWILIO_ACCOUNT_SID` (From your Twilio account)
        *   `TWILIO_AUTH_TOKEN` (From your Twilio account)
6.  **Public Domain:** Click the **Settings** tab in Railway, go to **Domains**, and click **Generate Domain** to get a public URL for your platform (e.g., `gtechcode-production.up.railway.app`).

## Troubleshooting
- **Build Fails:** If the build fails, check the **Deployments** tab in Railway to see the logs. If it says "Node dependencies missing," ensure your `package.json` correctly defines all dependencies.
- **DB Connection:** Ensure your backend code is correctly reading the `DATABASE_URL` environment variable (the current `prisma/schema.prisma` is configured to do this).

---
**Once you have initiated the deployment on Railway, tell me, and I can help you configure the Twilio Webhooks so your AI agent is live!**
