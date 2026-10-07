import brevo from '../config/brevo';

export const sendVerificationEmail = async (receiverEmail, receiverName, otp) => {
    try {
        await brevo.transactionalEmails.sendTransacEmail({
            sender: {
                name: process.env.SENDER_NAME,
                email: process.env.SENDER_EMAIL,
            },

            to: [
                {
                    name: receiverName,
                    email: receiverEmail,
                },
            ],

            subject: 'Verify your email',

            htmlContent: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>FreshMart Email Verification</title>
                </head>

                <body style="margin: 0; padding: 0; background-color: #f4f7f5; font-family: Arial, Helvetica, sans-serif;">

                    <table width="100%" cellpadding="0" cellspacing="0" border="0"
                        style="background-color: #f4f7f5; padding: 40px 15px;">

                        <tr>
                            <td align="center">

                                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden;">

                                    <!-- Header -->
                                    <tr>
                                        <td align="center"
                                            style="background-color: #16a34a; padding: 28px 20px;">

                                            <h1 style="margin: 0; color: #ffffff; font-size: 30px;">
                                                FreshMart
                                            </h1>

                                            <p style="margin: 8px 0 0; color: #eafff0; font-size: 14px;">
                                                Fresh groceries, delivered to your doorstep
                                            </p>

                                        </td>
                                    </tr>

                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 35px;">

                                            <h2 style="margin: 0 0 20px; color: #222222; font-size: 24px;">
                                                Verify your email address
                                            </h2>

                                            <p style="margin: 0 0 16px; color: #333333; font-size: 16px; line-height: 1.6;">
                                                Hi ${receiverName},
                                            </p>

                                            <p style="margin: 0 0 25px; color: #555555; font-size: 16px; line-height: 1.6;">
                                                Thanks for creating your FreshMart account!
                                                Please use the OTP below to verify your email address
                                                and complete your registration.
                                            </p>

                                            <!-- OTP -->
                                            <table cellpadding="0" cellspacing="0" border="0" align="center"
                                                style="margin: 30px auto;">

                                                <tr>
                                                    <td align="center"
                                                        style="background-color: #f0fdf4;
                                                        border: 2px dashed #16a34a;
                                                        border-radius: 10px;
                                                        padding: 18px 35px;">

                                                        <span style="font-size: 32px;
                                                            font-weight: bold;
                                                            letter-spacing: 8px;
                                                            color: #15803d;">
                                                            ${otp}
                                                        </span>

                                                    </td>
                                                </tr>

                                            </table>

                                            <p style="margin: 25px 0 8px; color: #555555; font-size: 14px; line-height: 1.6; text-align: center;">
                                                This OTP is valid for <strong>10 minutes</strong>.
                                            </p>

                                            <p style="margin: 0; color: #777777; font-size: 14px; line-height: 1.6; text-align: center;">
                                                Please do not share this OTP with anyone.
                                            </p>

                                            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;">

                                            <p style="margin: 0; color: #888888; font-size: 13px; line-height: 1.6; text-align: center;">
                                                If you didn't request this verification code,
                                                you can safely ignore this email.
                                            </p>

                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center"
                                            style="background-color: #f8faf9; padding: 20px;">

                                            <p style="margin: 0; color: #888888; font-size: 13px;">
                                                © 2026 FreshMart. All rights reserved.
                                            </p>

                                            <p style="margin: 6px 0 0; color: #aaaaaa; font-size: 12px;">
                                                Fresh groceries. Fast delivery. FreshMart.
                                            </p>

                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>

                    </table>

                </body>
                </html>
                `,
        });
    } catch (error) {
        console.error('Failed to send Email!!!');
        console.error('Error : ', error);
    }
};

export const sendResetPasswordOTP = async (receiverEmail, receiverName, otp) => {
    try {
        await brevo.transactionalEmails.sendTransacEmail({
            sender: {
                name: process.env.SENDER_NAME,
                email: process.env.SENDER_EMAIL,
            },

            to: [
                {
                    name: receiverName,
                    email: receiverEmail,
                },
            ],

            subject: 'Reset password OTP',

            htmlContent: `
                <!DOCTYPE html>
                <html lang="en">
                <head>
                    <meta charset="UTF-8">
                    <meta name="viewport" content="width=device-width, initial-scale=1.0">
                    <title>FreshMart Password Reset</title>
                </head>

                <body style="margin: 0; padding: 0; background-color: #f4f7f5; font-family: Arial, Helvetica, sans-serif;">

                    <table width="100%" cellpadding="0" cellspacing="0" border="0"
                        style="background-color: #f4f7f5; padding: 40px 15px;">

                        <tr>
                            <td align="center">

                                <table width="100%" cellpadding="0" cellspacing="0" border="0"
                                    style="max-width: 600px; background-color: #ffffff; border-radius: 12px; overflow: hidden;">

                                    <!-- Header -->
                                    <tr>
                                        <td align="center"
                                            style="background-color: #16a34a; padding: 28px 20px;">

                                            <h1 style="margin: 0; color: #ffffff; font-size: 30px;">
                                                FreshMart
                                            </h1>

                                            <p style="margin: 8px 0 0; color: #eafff0; font-size: 14px;">
                                                Fresh groceries, delivered to your doorstep
                                            </p>

                                        </td>
                                    </tr>

                                    <!-- Content -->
                                    <tr>
                                        <td style="padding: 40px 35px;">

                                            <h2 style="margin: 0 0 20px; color: #222222; font-size: 24px;">
                                                Reset your password
                                            </h2>

                                            <p style="margin: 0 0 16px; color: #333333; font-size: 16px; line-height: 1.6;">
                                                Hi ${receiverName},
                                            </p>

                                            <p style="margin: 0 0 25px; color: #555555; font-size: 16px; line-height: 1.6;">
                                                We received a request to reset your FreshMart account
                                                password. Use the OTP below to verify your identity
                                                and continue resetting your password.
                                            </p>

                                            <!-- OTP -->
                                            <table cellpadding="0" cellspacing="0" border="0" align="center"
                                                style="margin: 30px auto;">

                                                <tr>
                                                    <td align="center"
                                                        style="background-color: #f0fdf4;
                                                        border: 2px dashed #16a34a;
                                                        border-radius: 10px;
                                                        padding: 18px 35px;">

                                                        <span style="font-size: 32px;
                                                            font-weight: bold;
                                                            letter-spacing: 8px;
                                                            color: #15803d;">
                                                            ${otp}
                                                        </span>

                                                    </td>
                                                </tr>

                                            </table>

                                            <p style="margin: 25px 0 8px; color: #555555; font-size: 14px; line-height: 1.6; text-align: center;">
                                                This OTP is valid for <strong>10 minutes</strong>.
                                            </p>

                                            <p style="margin: 0; color: #777777; font-size: 14px; line-height: 1.6; text-align: center;">
                                                For your security, never share this OTP with anyone.
                                            </p>

                                            <hr style="border: 0; border-top: 1px solid #eeeeee; margin: 30px 0;">

                                            <p style="margin: 0; color: #888888; font-size: 13px; line-height: 1.6; text-align: center;">
                                                If you didn't request a password reset, please ignore
                                                this email. Your password will remain unchanged.
                                            </p>

                                        </td>
                                    </tr>

                                    <!-- Footer -->
                                    <tr>
                                        <td align="center"
                                            style="background-color: #f8faf9; padding: 20px;">

                                            <p style="margin: 0; color: #888888; font-size: 13px;">
                                                © 2026 FreshMart. All rights reserved.
                                            </p>

                                            <p style="margin: 6px 0 0; color: #aaaaaa; font-size: 12px;">
                                                Fresh groceries. Fast delivery. FreshMart.
                                            </p>

                                        </td>
                                    </tr>

                                </table>

                            </td>
                        </tr>

                    </table>

                </body>
                </html>
                `,
        });
    } catch (error) {
        console.error('Failed to send Email!!!');
        console.error('Error : ', error);
    }
};
