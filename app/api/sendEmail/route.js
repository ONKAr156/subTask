
import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

export const POST = async (request) => {


    try {
        const { subject, userEmail, message } = await request.json()

        const trasnporter = nodemailer.createTransport({
            service: "gmail",
            host: "",
            port: 465,
            secure: true,
            auth: {
                user: process.env.EMAIL,
                pass: process.env.EMAIL_PASSWORD
            }
        })

        const mailOption = {
            from: 'onkartemp01@gmail.com', //  Email can be changed -------------
            to: userEmail,

            subject: `${subject}`,
            text: `${message} `
        }
        await trasnporter.sendMail(mailOption)
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 })

    } catch (error) {
        console.log(error);
        return NextResponse.json({ message: "Failed to send email" }, { status: 500 })
    }
}
