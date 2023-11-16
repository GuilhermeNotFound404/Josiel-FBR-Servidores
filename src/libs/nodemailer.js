import nodemailer from 'nodemailer';
// basicamente quando tu da esse comando, ele serve para conectado em um servido de e-mail, isso demora uns 5 segundos pra mais
// na vercel a versão gratuita limita em requisicões de até 10 segundos, se demorar mais que isso sua requisição da erro, por isso geralmente não se conecta usando servidor de e-mail usando serverless
export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: "guilherme.souza617@etec.sp.gov.br",
    pass: "Chesterbennington123"
  }
});

export const promisifySendMail = async (mailOptions) => {
  return new Promise((res, rej) => {
    transporter.sendMail(mailOptions, (err, result) => {
      console.log(err)
      console.log(result)
      if (err) {
        rej(err)
      } else {
        res(result)
      }
    })
  })
}
