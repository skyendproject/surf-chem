// 1. New User Registration (To Admin)
export const sendAdminRegistrationNotification = async (userData) => {
    const content = `
    <p>Dear Admin,</p>
    <p>A new user has registered and requires approval.</p>
    <ul>
      <li><strong>Name:</strong> ${userData.firstName} ${userData.lastName}</li>
      <li><strong>Company:</strong> ${userData.company}</li>
      <li><strong>Email:</strong> ${userData.email}</li>
      <li><strong>Country:</strong> ${userData.country}</li>
    </ul>
    <p>Please review the registration request and activate the account if approved.</p>
    <p>Regards,<br>Website Notification System<br>Surfactant Chemicals Company</p>
  `;
    return await sendEmail('webreg@surfchem.co.uk', 'SCC Admin: New User Registration - Approval Required', content);
};

// 2. Contact Form Submission
export const sendContactFormNotification = async (data) => {
    const content = `
    <p>Dear Marketing Team,</p>
    <p>A new contact request has been submitted.</p>
    <p><strong>Name:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.email}<br>
    <strong>Company:</strong> ${data.company}</p>
    <p><strong>Message:</strong><br>${data.message}</p>
    <p>Regards,<br>Website Notification System</p>
  `;
    return await sendEmail('marketing@surfchem.co.uk', 'New Contact Form Submission', content);
};

// 3. Complaint Submission
export const sendComplaintNotification = async (data) => {
    const content = `
    <p>Dear Complaints Team,</p>
    <p>A new customer complaint has been submitted.</p>
    <p><strong>Customer:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.email}<br>
    <strong>Company:</strong> ${data.company}</p>
    <p><strong>Details:</strong><br>${data.complaintMessage}</p>
    <p>Regards,<br>Website Notification System</p>
  `;
    return await sendEmail('complaints@surfchem.co.uk', 'Customer Complaint Submitted', content);
};

// 4. Product Inquiry
export const sendProductInquiry = async (data) => {
    const content = `
    <p>Dear Cropcare Team,</p>
    <p>A new product inquiry has been submitted.</p>
    <p><strong>Name:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.email}<br>
    <p><strong>Inquiry:</strong><br>${data.message}</p>
    <p>Regards,<br>Website Notification System</p>
  `;
    return await sendEmail('cropcare@surfchem.co.uk', 'New Product Inquiry', content);
};

// 5. Let's Talk Form
export const sendLetsTalkNotification = async (data) => {
    const content = `
    <p>Dear Team,</p>
    <p>A new inquiry has been submitted through the “Let’s Talk” form.</p>
    <p><strong>Name:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.email}</p>
    <p><strong>Message:</strong><br>${data.message}</p>
    <p>Regards,<br>Website Notification System</p>
  `;
    return await sendEmail('notifications@surfchem.co.uk', 'New Website Inquiry - Let\'s Talk', content);
};

// 6. Career Application
export const sendCareerApplication = async (data) => {
    const content = `
    <p>Dear HR Team,</p>
    <p>A new job application has been submitted.</p>
    <p><strong>Applicant:</strong> ${data.name}<br>
    <strong>Email:</strong> ${data.email}<br>
    <strong>Position:</strong> ${data.position}</p>
    <p><strong>Additional Message:</strong><br>${data.message}</p>
    <p>Regards,<br>Website Notification System</p>
  `;
    return await sendEmail('hr@surfchem.co.uk', 'New Career Application', content);
};

// 7. Account Not Yet Activated (To User)
export const sendActivationPendingEmail = async (userEmail, firstName) => {
    const content = `
    <p>Dear ${firstName},</p>
    <p>Thank you for registering on the Surfactant Chemicals Company portal.</p>
    <p>Your account is currently under review and has not yet been activated. Our team will notify you once your account is approved.</p>
    <p>Regards,<br>Surfactant Chemicals Company</p>
  `;
    return await sendEmail(userEmail, 'Account Activation Pending', content);
};

// 8. Account Approved (To User)
export const sendAccountApprovedEmail = async (userEmail, firstName) => {
    const content = `
    <p>Dear ${firstName},</p>
    <p>Your account on the Surfactant Chemicals Company portal has been successfully approved.</p>
    <p>You can now sign in and access the available documents and resources.</p>
    <p><a href="https://surfchem.co.uk/sign-in">Login here</a></p>
    <p>Regards,<br>Surfactant Chemicals Company</p>
  `;
    return await sendEmail(userEmail, 'Your Account Has Been Approved', content);
};

export const sendEmail = async (to, subject, content) => {
    await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            to: to,
            subject: subject,
            content: content
        }),
    })
};
