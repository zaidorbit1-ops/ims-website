<?php
// CORS headers for local development
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(204);
    exit;
}
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require_once __DIR__ . '/../PHPMailer-master/src/Exception.php';
require_once __DIR__ . '/../PHPMailer-master/src/PHPMailer.php';
require_once __DIR__ . '/../PHPMailer-master/src/SMTP.php';

header('Content-Type: application/json');

// Get POST data
$data = json_decode(file_get_contents('php://input'), true);
$name = $data['name'] ?? '';
$email = $data['email'] ?? '';
$message = $data['message'] ?? '';
$subject = $data['subject'] ?? 'Contact Form Submission';

// Validate
if (!$name || !$email || !$message) {
    echo json_encode(['success' => false, 'error' => 'Missing required fields.']);
    exit;
}

$mail = new PHPMailer(true);
try {
    // Server settings
    $mail->isSMTP();
    $mail->Host = 'server201.orangehost.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'info@imslimoandchaufferservice.com';
    $mail->Password = 'E0}k_k3Evqtp';
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $mail->Port = 465;

    // Recipients
    $mail->setFrom('info@imslimoandchaufferservice.com', 'IMS Website');
    $mail->addAddress('info@imslimoandchaufferservice.com');
    $mail->addReplyTo($email, $name);

        // Content - Admin Email (Brand Styled)
        $mail->isHTML(true);
        $mail->Subject = $subject;
        $mail->Body = '<div style="background:#fff; border:1px solid #e5e5e5; border-radius:10px; max-width:520px; margin:auto; font-family:DM Sans,Arial,sans-serif; color:#222;">
            <div style="background:#222; padding:24px 0; border-radius:10px 10px 0 0; text-align:center;">
                <img src="https://imslimoandchaufferservice.com/logo.png" alt="IMS Limo & Chauffeur Service" style="height:54px; margin-bottom:8px;" />
                <h2 style="color:#b88b40; font-family:Cormorant Garamond,serif; font-weight:400; margin:0; font-size:2rem;">New Website Inquiry</h2>
            </div>
            <div style="padding:32px 28px 24px 28px;">
                <table style="width:100%; border-collapse:collapse;">
                    <tr><td style="padding:8px 0; color:#b88b40; font-weight:600;">Name:</td><td style="padding:8px 0;">' . htmlspecialchars($name) . '</td></tr>
                    <tr><td style="padding:8px 0; color:#b88b40; font-weight:600;">Email:</td><td style="padding:8px 0;">' . htmlspecialchars($email) . '</td></tr>
                    '.($data['phone'] ? '<tr><td style="padding:8px 0; color:#b88b40; font-weight:600;">Phone:</td><td style="padding:8px 0;">' . htmlspecialchars($data['phone']) . '</td></tr>' : '').'
                    <tr><td style="padding:8px 0; color:#b88b40; font-weight:600;">Subject:</td><td style="padding:8px 0;">' . htmlspecialchars($subject) . '</td></tr>
                    <tr><td style="padding:8px 0; color:#b88b40; font-weight:600; vertical-align:top;">Message:</td><td style="padding:8px 0; white-space:pre-line;">' . nl2br(htmlspecialchars($message)) . '</td></tr>
                </table>
            </div>
            <div style="background:#f8f5f0; color:#b88b40; text-align:center; border-radius:0 0 10px 10px; padding:18px 0; font-size:13px;">IMS Limo & Chauffeur Service &bull; Houston, TX</div>
        </div>';

    $mail->send();

    // Send copy/thank you to user
    $userMail = new PHPMailer(true);
    $userMail->isSMTP();
    $userMail->Host = 'server201.orangehost.com';
    $userMail->SMTPAuth = true;
    $userMail->Username = 'info@imslimoandchaufferservice.com';
    $userMail->Password = 'E0}k_k3Evqtp';
    $userMail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;
    $userMail->Port = 465;
    $userMail->setFrom('info@imslimoandchaufferservice.com', 'IMS Website');
    $userMail->addAddress($email, $name);
        $userMail->isHTML(true);
        $userMail->Subject = 'Thank you for contacting IMS';
        $userMail->Body = '<div style="background:#fff; border:1px solid #e5e5e5; border-radius:10px; max-width:520px; margin:auto; font-family:DM Sans,Arial,sans-serif; color:#222;">
            <div style="background:#222; padding:24px 0; border-radius:10px 10px 0 0; text-align:center;">
                <img src="https://imslimoandchaufferservice.com/logo.png" alt="IMS Limo & Chauffeur Service" style="height:54px; margin-bottom:8px;" />
                <h2 style="color:#b88b40; font-family:Cormorant Garamond,serif; font-weight:400; margin:0; font-size:2rem;">Thank You for Contacting Us</h2>
            </div>
            <div style="padding:32px 28px 24px 28px;">
                <p style="font-size:1.1rem; margin-bottom:18px;">Dear <strong>' . htmlspecialchars($name) . '</strong>,</p>
                <p style="margin-bottom:18px;">Thank you for reaching out to <span style="color:#b88b40; font-weight:600;">IMS Limo & Chauffeur Service</span>.<br>We have received your message and our team will contact you shortly.</p>
                <div style="background:#f8f5f0; border-radius:8px; padding:18px 16px; margin-bottom:18px;">
                    <strong style="color:#b88b40;">Your Message:</strong><br>
                    <span style="white-space:pre-line;">' . nl2br(htmlspecialchars($message)) . '</span>
                </div>
                <p style="font-size:13px; color:#888;">If you need urgent assistance, call us at <a href="tel:+18005550199" style="color:#b88b40; text-decoration:none;">+1 (800) 555-0199</a> or email <a href="mailto:info@imslimoandchaufferservice.com" style="color:#b88b40; text-decoration:none;">info@imslimoandchaufferservice.com</a>.</p>
            </div>
            <div style="background:#f8f5f0; color:#b88b40; text-align:center; border-radius:0 0 10px 10px; padding:18px 0; font-size:13px;">IMS Limo & Chauffeur Service &bull; Houston, TX</div>
        </div>';
    $userMail->send();

    echo json_encode(['success' => true]);
} catch (Exception $e) {
    echo json_encode(['success' => false, 'error' => $mail->ErrorInfo]);
}
