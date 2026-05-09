import nodemailer from 'nodemailer'

// Email template function
function createEmailTemplate(formData: any): string {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="UTF-8">
      <title>Contact Request</title>
      <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
        .field { margin-bottom: 15px; }
        .label { font-weight: bold; color: #495057; }
        .value { margin-top: 5px; }
        .message-box { background-color: #f1f3f4; padding: 15px; border-radius: 8px; }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="header">
          <h1>New Contact Request</h1>
          <p>Received on ${new Date().toLocaleString()}</p>
        </div>

        <div class="field">
          <div class="label">Name:</div>
          <div class="value">${formData.name}</div>
        </div>

        <div class="field">
          <div class="label">Email:</div>
          <div class="value">${formData.email}</div>
        </div>

        ${formData.phone ? `
        <div class="field">
          <div class="label">Phone:</div>
          <div class="value">${formData.phone}</div>
        </div>
        ` : ''}

        ${formData.services ? `
        <div class="field">
          <div class="label">Services of Interest:</div>
          <div class="value">${formData.services}</div>
        </div>
        ` : ''}

        <div class="field">
          <div class="label">Preferred Contact Method:</div>
          <div class="value">${formData.contactMethod}</div>
        </div>

        <div class="field">
          <div class="label">Message:</div>
          <div class="message-box">${formData.message}</div>
        </div>
      </div>
    </body>
    </html>
  `
}

export default defineEventHandler(async (event) => {
  // Only allow POST requests
  if (event.node.req.method !== 'POST') {
    throw createError({
      statusCode: 405,
      statusMessage: 'Method Not Allowed'
    })
  }

  try {
    const body = await readBody(event)

    // Validate required fields
    if (!body.name || !body.email || !body.message) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Missing required fields: name, email, and message are required'
      })
    }

    // Get environment variables
    const config = useRuntimeConfig()

    // Email recipients (replace with actual admin email addresses)
    const recipients = [
      process.env.CONTACT_EMAIL_1 || 'admin1@spelp.org',
      process.env.CONTACT_EMAIL_2 || 'admin2@spelp.org'
    ].filter(Boolean)

    // Create email transporter
    let transporter

    if (process.env.NODE_ENV === 'production' && process.env.AZURE_COMMUNICATION_ENDPOINT) {
      // Use Azure Communication Services in production
      // Note: This requires additional Azure SDK setup
      throw createError({
        statusCode: 500,
        statusMessage: 'Azure Communication Services integration not implemented yet. Please use SMTP configuration.'
      })
    } else {
      // Use SMTP (works with most email providers)
      transporter = nodemailer.createTransporter({
        host: process.env.SMTP_HOST || 'smtp.gmail.com',
        port: parseInt(process.env.SMTP_PORT || '587'),
        secure: false, // true for 465, false for other ports
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASS
        }
      })
    }

    // Verify transporter
    await transporter.verify()

    // Send email to each recipient
    const emailPromises = recipients.map(recipient =>
      transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: recipient,
        subject: `New Contact Request - ${body.name} - ${new Date().toLocaleDateString()}`,
        html: createEmailTemplate(body),
        text: `
          Contact Request from ${body.name}

          Email: ${body.email}
          Phone: ${body.phone || 'Not provided'}
          Services: ${body.services || 'Not specified'}
          Contact Method: ${body.contactMethod}

          Message:
          ${body.message}
        `
      })
    )

    // Send all emails
    await Promise.all(emailPromises)

    return {
      success: true,
      message: 'Contact request sent successfully'
    }

  } catch (error) {
    console.error('Contact form error:', error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send contact request. Please try again later.'
    })
  }
})
