# MVP Plan: AI-CRM & Communications Platform

## Phase 1: Communication Infrastructure (AI Calling Agent)
- Integrate Twilio (Voice/SMS API) or Vapi.ai (specifically for AI voice agents).
- Create logic for incoming calls:
    - IVR logic (automated menu).
    - AI Agent prompt handling (answering customer queries).
    - Voicemail-to-text and AI summarization.
- Database: Store call logs, recordings, and transcripts.

## Phase 2: CRM Basics
- User/Company authentication and organization management.
- Contact/Lead data models:
    - Schema: Name, Phone, Email, Status, Tags, Assigned Agent.
    - Integration: Map incoming numbers from Phase 1 to existing or new leads.
- UI: Unified inbox for viewing SMS/Call history per contact.

## Phase 3: Automation Engine
- Define "Workflow Triggers":
    - New Lead -> Auto-Reply SMS.
    - Missed Call -> Auto-Text-Back.
- Triggered Campaigns:
    - Email/SMS blasts based on lead tags.
- Scheduling: Sync with calendar for appointment setting.

---
## Tech Stack Recommendation
- **Backend:** Node.js (TypeScript) + Fastify (for speed).
- **Database:** PostgreSQL (via Prisma ORM).
- **Frontend:** Next.js + Tailwind CSS.
- **Queue/State:** Redis (for handling real-time voice call concurrency).
