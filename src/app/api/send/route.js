import { promisifySendMail } from "@/libs/nodemailer";

export async function POST(request) {
    const { email, subject, message } = await request.json()

    try {
        const mailOptions = {
            from: 'guilherme.souza617@etec.sp.gov.br',
            to: email,
            subject: subject,
            text: message
        };
        
        await promisifySendMail(mailOptions)
    
        return Response.json({
            message: "E-mail enviado com sucesso!"
        })
    } catch (error) {
        console.log(error)
        return Response.error()
    }
}
// aqui vamos criar uma rota de post porque praticamente estamos criando um e-mail
// uma coisa que é um problema se tu for colocar na vercel, e-mails demorando para se conectar no servidor de e-mail
// geralmente deixamos o servidor conectado sempre, dai quando vamos enviar o e-mail é bem rapido pq oq demora é para conectar
// mas não tem como deixar o servidor sempre conectado na vercel porque não existe um servidor, ele é um servidor temporário, basicmaente depois que termina sua requisição ele é destruido
// então isso ébem paia,  tive que ler  vezes pra entender ksksks