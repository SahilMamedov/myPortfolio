import { useRef } from "react";
import {
  ContaxtTitle,
  SendButton,
  SendButtonBox,
  StyledTextField,
  TextFieldMessage,
  Wrapper,
} from "./styled";
import emailjs from "@emailjs/browser";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import ReactWhatsapp from "react-whatsapp";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e: any) => {
    e.preventDefault();
    if (form.current) {
      emailjs
        .sendForm(
          "service_4dojbqv",
          "template_er40vy6",
          form.current,
          "xLrhwK9Io5rGg6k4M"
        )
        .then(
          (result: any) => {
            console.log(result.text);
            console.log("mesaj gonderildi");
          },
          (error: any) => {
            console.log(error.text);
          }
        );
      e.target.reset();
    }
  };

  return (
    <Wrapper>
      <Box>
        <ReactWhatsapp
          className=""
          element="webview"
          number="+994 504055044"
          message="Mene yaz"
        >
          Whatsapp
        </ReactWhatsapp>
      </Box>
      <Box component="form" ref={form} onSubmit={sendEmail}>
        <ContaxtTitle>Get In Touch</ContaxtTitle>
        <div>
          <div className=" flex gap-6 mb-6">
            <StyledTextField>
              <TextField
                required
                color="primary"
                label="Name"
                name="user_name"
                variant="filled"
              />
            </StyledTextField>
            <StyledTextField>
              <TextField
                required
                color="primary"
                label="Surname"
                name="user_surname"
                variant="filled"
              />
            </StyledTextField>
          </div>
          <StyledTextField className="mb-6">
            <TextField
              color="primary"
              fullWidth
              name="subject"
              label="Subject *"
              variant="filled"
            />
          </StyledTextField>
          <StyledTextField className="mb-6">
            <TextField
              color="primary"
              fullWidth
              type="email"
              name="user_email"
              label="Email *"
              variant="filled"
            />
          </StyledTextField>
          <StyledTextField>
            <TextField
              label="Message"
              name="message"
              multiline
              rows={4}
              variant="filled"
              fullWidth
              style={TextFieldMessage}
            />
          </StyledTextField>
          <SendButtonBox>
            <SendButton type="submit">Send Message</SendButton>
          </SendButtonBox>
        </div>
      </Box>
    </Wrapper>
  );
};

export default Contact;
