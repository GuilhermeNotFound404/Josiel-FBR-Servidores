import nodemailer from 'nodemailer';
export const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: "guilherme.souza617@etec.sp.gov.br",
    pass: "Chesterbennington123"
  },
  pool: true, // Habilitar pooling
  connectionTimeout: 5000
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
