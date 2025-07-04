import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL; 

// console.log('Api :',process.env.RESEND_API_KEY);    
export async function POST(req , res) {
  const {body} = req;
  const {email , subject , message } = body;
  try {
    const { data, error } = await resend.emails.send({
      from: fromEmail,
      to: ['husbantech08@gmail.com'],
      subject: 'Hello world',
      react: (
        <>
          <h1>{subject}</h1>
          <p>Thank you for contacting us!</p>
          <p>New message submitted:</p>  
          <p>{message}</p>

        </>
      ),
    });

    if (error) {
        return Response.json({ error }, { status: 500 });
    }
    
    return Response.json(data);
} catch (error) {
    return Response.json({ error }, { status: 500 });
}
}
