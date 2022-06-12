const sendMail = (nombre, email, asunto, mensaje) =>
  new Promise((resolve, reject) => {
    const msgData = {
      nombre,
      email,
      asunto,
      mensaje,
    };

    fetch("http://localhost:3000/mail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(msgData),
    })
      .then((mail) => resolve(mail))
      .catch((err) => reject(err));
  });

export default sendMail;
