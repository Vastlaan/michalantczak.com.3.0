const express = require("express");
const bodyParser = require("body-parser");
const sgMail = require("@sendgrid/mail");
const keys = require("./config/keys");

const app = express();

//initialize sendgrig API key
sgMail.setApiKey(keys.SgSecret);

app.use(bodyParser.json());

app.post("/api/submitContactForm", (req, res) => {
    const { name, email, message } = req.body;
    const msg = {
        to: email,
        from: "no-reply@michalantczak.com",
        subject: "Contact form submission",
        html: `
            <h1 style='background-color: #0b4f6c; color: white; width: 100%; padding: 1rem 2rem; text-align: center;'>Michal Antczak</h1>
            <h3 style='text-align: center; font-size: 25px;'>Thank you <strong>${name}</strong></h3>
            <p style='text-align:center; font-size: 20px;'>I successfully recived your message. I will contact you, as soon as possible.</p>
            <p style='text-align:center; font-size: 20px; background-color: lightyellow; padding: 2rem;'>${message}</p>
        `,
    };

    sgMail.send(msg);

    res.status(200).json("Sucess");
});

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
    const path = require("path");
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
    });
}

const PORT = process.env.PORT || 4500;

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});
