# EmailJS Configuration Guide

EmailJS has been integrated into your contact form. Follow these steps to make it work:

## Step 1: Create an EmailJS Account
1. Go to [emailjs.com](https://www.emailjs.com)
2. Sign up (free tier available)
3. Verify your email

## Step 2: Get Your Public Key
1. Go to Dashboard → Account
2. Copy your **Public Key**
3. In `src/app/components/contact/contact.component.ts`, replace:
   ```typescript
   emailjs.init('YOUR_PUBLIC_KEY');
   ```
   with:
   ```typescript
   emailjs.init('YOUR_ACTUAL_PUBLIC_KEY');
   ```

## Step 3: Create an Email Service
1. Go to Dashboard → Email Services
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the setup instructions
5. Copy the **Service ID** (e.g., `service_abc123`)

## Step 4: Create an Email Template
1. Go to Dashboard → Email Templates
2. Click "Create New Template"
3. Set up your template with these variables:
   - `{{from_name}}` - Sender's name
   - `{{from_email}}` - Sender's email
   - `{{message}}` - Message content
   - `{{to_email}}` - Your email (recipient)

4. Copy the **Template ID** (e.g., `template_xyz789`)

## Step 5: Update Your Component
In `src/app/components/contact/contact.component.ts`, replace:
```typescript
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
```
with your actual IDs:
```typescript
emailjs.send('service_abc123', 'template_xyz789', {
```

## Testing
1. Run `npm start`
2. Fill out the contact form
3. Click "Send message"
4. You should receive an email in your inbox!

## Notes
- The contact form includes validation for name, email, and message
- Success/error messages are displayed on the page
- The form resets after successful submission
- EmailJS handles all the email sending securely

## Troubleshooting
- Make sure your EmailJS Public Key is correct
- Verify your Service ID and Template ID match
- Check browser console (F12 → Console) for error messages
- Ensure your email service is properly configured in EmailJS dashboard
