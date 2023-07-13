const emailTemplate = (
  recipientName,
  badgeName,
  badgeImageUrl,
  markdownLink,
  htmlLink
) => {
  return `
      <!DOCTYPE html>
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #f9f9f9;
          }
      
          .container {
            max-width: 600px;
            margin: 0 auto;
            padding: 20px;
            background-color: #ffffff;
            border-radius: 5px;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
      
          h1 {
            color: #333333;
            font-size: 24px;
            margin-bottom: 20px;
          }
      
          p {
            color: #555555;
            font-size: 16px;
            line-height: 1.5;
          }
      
          .badge-container {
            display: flex;
            align-items: center;
            margin-top: 30px;
          }
      
          .badge-image {
            width: 80px;
            height: 80px;
            margin-right: 20px;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <h1>Congratulations on Your Achievement!</h1>
          <p>Dear ${recipientName},</p>
          <p>We are thrilled to inform you that your recent review submission has been recognized and rewarded  <strong>${badgeName}</strong> badge.</p>
          <div class="badge-container">
            <img class="badge-image" src="${badgeImageUrl}" alt="${badgeName}">
            <p>Take pride in your accomplishment and let this badge serve as a testament to your exceptional insights and dedication to making your project Inclusive.</p>
          </div>
          <p>Once again, congratulations on this well-deserved Badge!</p>
          <p>For more details, you can access the badge using the following links:</p>
          <p>Here is the <a href="${markdownLink}">Markdown Badge Link</a> and <a href="${htmlLink}">HTML Link</a> for use.</p>
          <p>Thank you for your ongoing DEI efforts</p>
          <p>Best regards,</p>
          <p>The DEI Badging Team</p>
        </div>
      </body>
      </html>
    `;
};

module.exports = emailTemplate;