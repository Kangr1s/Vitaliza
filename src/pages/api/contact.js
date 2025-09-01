// 👇 Tiene que ser una constante, no una función
export const prerender = false;

import nodemailer from "nodemailer";

export async function POST({ request }) {
  try {
    const data = await request.json();
    const { name, email, mobile, subject, message } = data;

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: import.meta.env.EMAIL_USER,
        pass: import.meta.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"Formulario de Contacto" <${import.meta.env.EMAIL_USER}>`,
      to: import.meta.env.EMAIL_TO || import.meta.env.EMAIL_USER,
      subject: `📩 Nuevo mensaje de contacto: ${subject}`,

      // Versión de texto plano (por compatibilidad)
      text: `
Has recibido un nuevo mensaje desde el formulario de contacto:

─────────────────────────────
👤 Nombre: ${name}
📧 Email: ${email}
📱 Teléfono: ${mobile}
📌 Asunto: ${subject}

📝 Mensaje:
${message}
─────────────────────────────

Este mensaje fue enviado automáticamente desde tu página web.
  `,

      // Versión en HTML (para la mayoría de clientes de correo)
      html: `
    <div style="font-family: Arial, sans-serif; padding: 20px; color: #333; line-height: 1.5;">
      <h2 style="color: #4CAF50; margin-bottom: 10px;">📩 Nuevo mensaje de contacto</h2>
      <p>Has recibido un nuevo mensaje desde el formulario de tu sitio web:</p>
      
      <table style="width: 100%; border-collapse: collapse; margin-top: 15px;">
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>👤 Nombre:</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${name}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>📧 Email:</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${email}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>📱 Teléfono:</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${mobile}</td>
        </tr>
        <tr>
          <td style="padding: 8px; border: 1px solid #ddd;"><b>📌 Asunto:</b></td>
          <td style="padding: 8px; border: 1px solid #ddd;">${subject}</td>
        </tr>
      </table>

      <h3 style="margin-top: 20px;">📝 Mensaje:</h3>
      <p style="background: #f9f9f9; padding: 15px; border-left: 4px solid #4CAF50; white-space: pre-wrap;">
        ${message}
      </p>

      <hr style="margin-top: 30px;" />
      <p style="font-size: 12px; color: #888;">
        Este mensaje fue enviado automáticamente desde el formulario de contacto de tu página web.
      </p>
    </div>
  `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({
        status: "success",
        message: "Mensaje enviado correctamente ✅",
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Error enviando correo:", error);
    return new Response(
      JSON.stringify({
        status: "error",
        message: "No se pudo enviar el mensaje ❌",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
