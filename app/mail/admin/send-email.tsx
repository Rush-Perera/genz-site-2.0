// "use strict";
// const nodemailer = require("nodemailer");

// const transporter = nodemailer.createTransport({
//   host: "smtp.titan.email",
//   port: 465,
//   secure: true,
//   auth: {
//     user: "no-reply@genztech.lk",
//     pass: "#4zsWsUxckqz3RYf",
//   },
// });

// export default async function sendEmailtoClient(data) {
//     try{
//         const info = await transporter.sendMail({
//             from: '"Fred Foo 👻" <no-reply@genztech.lk>', // sender address
//             to: data.email, // list of receivers
//             subject: "Hello ✔", // Subject line
//             text: "Hello world?", // plain text body
//             html: "<b>Hello world?</b>", // html body
//           });

//           console.log("Message sent: %s", info.messageId);
//     }catch(e){
//         console.log(e)
//     }

      
// }
