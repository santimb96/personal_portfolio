const emailPattern = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

const sendMail = (nombre, email, asunto, mensaje) =>
  new Promise((resolve, reject) => {
    if (!nombre || !email || !asunto || !mensaje)
      reject("Parámetros incorrectos");
    if (!emailPattern.test(email)) reject("El emailno cumple con el formato");
    const msgData = {
      name: nombre,
      email,
      subject: asunto,
      message: mensaje,
    };

    fetch("https://mail-api.up.railway.app/mail", {
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
