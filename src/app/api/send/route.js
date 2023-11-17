import { promisifySendMail } from "@/libs/nodemailer";

export async function POST(request) {
    const { email, subject, message } = await request.json()

    try {
        // esse e-mail ele vai mandar para ele mesmo?es
        // pq eu iria querer entrar no seu site para enviar um e-mail para mim mesmo?!(!??!?! porque não tem banco de dados 
        // é assim que envia um e-mail, mas não para o e-mail do cara que digitou não tem nem sentindo
        
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