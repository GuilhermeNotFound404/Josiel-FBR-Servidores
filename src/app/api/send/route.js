import { promisifySendMail } from "@/libs/nodemailer";

export async function POST(request) {
    const { email, subject, message } = await request.json()

    try {
        const mailOptions = {
            from: 'guilherme.souza617@etec.sp.gov.br',
            to: 'leonadokof123@gmail.com',
            subject: subject,
            html: `
                <div>
                    <h1>Olá, o site recebeu uma nova mensagem!</h1>
                    <p>Assunto: ${subject}</p>
                    <p>De: ${email}</p>
                    <p>Mensagem: ${message}</p>
                </div>
            `
        };
    
        console.log("começando a enviar e-mail")
        await promisifySendMail(mailOptions);
    
        return Response.json({
            message: "E-mail enviado com sucesso!"
        })
    } catch (error) {
        console.log("deu erro ao enviar e-mail")
        console.log(error)
        return Response.error()
    }
}
