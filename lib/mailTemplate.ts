interface ContactHtmlInterface {
  subject: string;
  name: string;
  email: string;
  message: string;
}

export const contactHtml = ({
  name,
  email,
  subject,
  message,
}: ContactHtmlInterface) => {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Contact Form Submission</title>
    <style>
        /* Reset styles */
        body, html {
            margin: 0;
            padding: 0;
            font-family: 'Nunito Sans', Arial, sans-serif;
            line-height: 1.6;
            background-color: #f8f8f8; /* Light mode background */
        }

        /* Container */
        .email-container {
            max-width: 600px;
            margin: 25px auto;
            padding: 20px;
            background-color: #ffffff; /* Light mode container background */
            border-radius: 12px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        /* Header */
        .header {
            text-align: center;
            padding: 30px 0;
            background-color: #ea580c; /* Theme-specific orange */
            border-radius: 12px 12px 0 0;
        }

        .header h1 {
            margin: 0;
            font-family: 'Poppins', sans-serif;
            font-size: 28px;
            color: #ffffff;
            font-weight: 600;
        }

        /* Content */
        .content {
            padding: 20px;
        }

        .content h2 {
            font-family: 'Poppins', sans-serif;
            font-size: 22px;
            color: #1e293b; /* Dark gray for contrast in light mode */
            margin-bottom: 15px;
            font-weight: 600;
        }

        .content p {
            font-family: 'Nunito Sans', sans-serif;
            font-size: 16px;
            color: #475569; /* Medium gray for readability in light mode */
            margin: 0 0 15px;
            line-height: 1.6;
        }

        .content .label {
            font-weight: bold;
            color: #ea580c; /* Theme-specific orange */
        }

        /* Footer */
        .footer {
            text-align: center;
            padding: 20px;
            background-color: #f8f8f8; /* Light mode footer background */
            border-radius: 0 0 12px 12px;
            font-size: 14px;
            color: #777777; /* Light mode footer text */
        }

        .footer a {
            color: #ea580c; /* Theme-specific orange */
            text-decoration: none;
            font-weight: 600;
        }

        .footer a:hover {
            text-decoration: underline;
        }

        /* Dark Mode Styles */
        @media (prefers-color-scheme: dark) {
            body, html {
                background-color: #081b29; /* Dark mode background */
            }

            .email-container {
                background-color: #0a2540; /* Dark mode container background */
                box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
            }

            .header {
                background-color: #ea580c; /* Theme-specific orange remains the same */
            }

            .content h2 {
                color: #f8fafc; /* Light text for dark mode */
            }

            .content p {
                color: #cbd5e1; /* Light gray for readability in dark mode */
            }

            .footer {
                background-color: #081b29; /* Dark mode footer background */
                color: #94a3b8; /* Light gray for dark mode footer text */
            }

            .footer a {
                color: #ea580c; /* Theme-specific orange */
            }
        }

        /* Responsive Design */
        @media only screen and (max-width: 600px) {
            .email-container {
                padding: 15px;
            }

            .header h1 {
                font-size: 24px;
            }

            .content h2 {
                font-size: 20px;
            }

            .content p {
                font-size: 14px;
            }
        }
    </style>
    <!-- Add Google Fonts -->
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Nunito+Sans:wght@400;600&display=swap" rel="stylesheet">
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <h1>New Contact Form Submission</h1>
        </div>

        <!-- Content -->
        <div class="content">
            <h2>Contact Details</h2>
            <p><span class="label">Name:</span> ${name}</p>
            <p><span class="label">Email:</span> ${email}</p>
            <p><span class="label">Subject:</span> ${subject}</p>
            <p><span class="label">Message:</span></p>
            <p>${message}</p>
        </div>

        <!-- Footer -->
        <div class="footer">
            <p>This email was sent from your website's contact form.</p>
        </div>
    </div>
</body>
</html>`;
};
