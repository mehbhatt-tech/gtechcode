import { triggerWorkflow } from '../automation/workflowEngine';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// Handle incoming Twilio webhooks
export const handleIncomingCall = async (data: any) => {
    const { From, CallSid, Status } = data;

    // 1. Log the interaction in the database
    await prisma.interaction.create({
        data: {
            contactId: "lookup-logic-here", // Logic to find contact by phone
            type: 'CALL',
            content: `Call status: ${Status}`
        }
    });

    // 2. Trigger workflow engine if it's a missed call
    if (Status === 'no-answer' || Status === 'failed') {
        await triggerWorkflow('MISSED_CALL', { phone: From });
    }
    
    console.log("Communication hookup: Handled call from", From);
};

export const handleIncomingSMS = async (data: any) => {
    const { From, Body } = data;

    // Log the SMS
    await prisma.interaction.create({
        data: {
            contactId: "lookup-logic-here",
            type: 'SMS',
            content: Body
        }
    });

    console.log("Communication hookup: Received SMS from", From);
};
