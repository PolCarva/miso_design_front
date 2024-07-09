import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: any) {
  const { name, email, message, to } = await req.json();

  try {
    const { data, error } = await resend.emails.send({
      from: 'Contacto desde la Website <website@pablocarvalho.dev>',
      to: [to],
      subject: 'Nuevo mensaje de la web de Augusto',
      html: `<p><strong>Nombre:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p><strong>Mensaje:</strong> ${message}</p>`,
    });

    if (error) {
      return new Response(JSON.stringify({ error }), { status: 500 });
    }

    return new Response(JSON.stringify(data), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error }), { status: 500 });
  }
}