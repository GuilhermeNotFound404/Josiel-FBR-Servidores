//const express = require('express');
//const nodemailer = require('nodemailer');
//const app = express();
//const PORT = 3000;

// Configuração do Nodemailer
//const transporter = nodemailer.createTransport({
//  service: 'Gmail',
//  auth: {
//    user: 'leonadokof123@gmail.com',
//    pass: 'a45404045a'
//  }
//});

//app.use(express.json());

// Rota para lidar com o envio do formulário
//app.post('/api/send', (req, res) => {
//  const { email, subject, message } = req.body;

  // Configuração do e-mail a ser enviado
 // const mailOptions = {
   // from: 'leonadokof123@gmail.com',
   // to: email,
   // subject: subject,
   // text: message
  //};

  // Enviando o e-mail
  //transporter.sendMail(mailOptions, (error, info) => {
   // if (error) {
     // console.log(error);
     // res.status(500).send('Erro ao enviar o e-mail');
    //} else {
     // console.log('E-mail enviado: ' + info.response);
      //res.status(200).send('E-mail enviado com sucesso');
    //}
  //});
//});