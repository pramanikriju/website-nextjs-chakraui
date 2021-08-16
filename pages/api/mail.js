const mail = require("@sendgrid/mail");
import * as Validator from "validatorjs";

mail.setApiKey(process.env.SENDGRID_API_KEY);
const email_id = process.env.MAIL_TO_ADDRESS;
const email_from_id = process.env.MAIL_FROM_ADDRESS;

export default async function Captcha(req, res) {
  const body = req.body;
  console.log("Request : ", body);
  let rules = {
    name: "required",
    email: "required|email",
    message: "required",
    recaptcha: "required",
  };

  let validation = new Validator(body, rules);
  let recaptcha_pass = verifyCaptcha(body.recaptcha);

  if (validation.passes() && recaptcha_pass) {
    console.log("Validation passed");
    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

    await mail
      .send({
        to: email_id,
        from: email_from_id,
        subject: "New Message from " + body.name,
        text: message,
        html: message.replace(/\r\n/g, "<br>"),
      })
      .then(
        () => {},
        (error) => {
          console.error(error);

          if (error.response) {
            console.error(error.response.body);
          }
        }
      );

    res.status(200).json({ success: true });
  } else {
    console.log("Validation failed");
    res.status(412).json({
      success: false,
      message: "Validation or Recaptcha failed",
      data: validation.errors,
    });
  }
}

const verifyCaptcha = async (recaptcha) => {
  let secret = process.env.RECAPTCHA_SECRET;
  const settings = {
    method: "POST",
    body: JSON.stringify({
      secret: secret,
      response: recaptcha,
    }),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  };

  const response = await fetch(
    `https://www.google.com/recaptcha/api/siteverify`,
    settings
  );
  if (!response.ok) throw Error(response.message);

  try {
    return await response.json().success;
  } catch (err) {
    return false;
  }
};
