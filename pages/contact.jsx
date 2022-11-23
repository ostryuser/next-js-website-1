import {
  TextInput,
  Textarea,
  Button,
  Container,
  Group,
  Box,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import { showNotification } from "@mantine/notifications";
import styled from "styled-components";

const ContactSection = styled.div`
  height: 100%;
  width: 100%;
`;

const Wrapper = styled.div`
  width: 100%;
  max-width: 1300px;
  margin: 4em auto;
  font-family: Montserrat, sans-serif;

  h1 {
    font-size: 3rem;
    letter-spacing: 20px;
    text-transform: uppercase;
    margin-bottom: 2em;
    text-align: center;
  }
`;

const contact = () => {
  const submitForm = useForm({
    initialValues: {
      email: "",
      name: "",
      message: "",
    },

    validate: {
      email: (value) =>
        /^\S+@\S+$/.test(value) ? null : "Invalid Email Addresss",
    },
  });

  const handleSubmit = async (values) => {
    const request = await fetch("/api/submit", {
      method: "POST",
      body: JSON.stringify(values),
    });
    const result = await request.json();

    if (result.data !== "ok") {
      showNotification({
        title: "Błąd zgłoszenia",
        color: "red",
        message: "Wystąpił błąd w zgłoszeniu",
      });
      return;
    }
    showNotification({
      title: "Zgłoszenie wysłane",
      color: "green",
      message: "Jak najszybciej skontaktuję się z Tobą",
    });
    submitForm.setValues({
      email: "",
      name: "",
      message: "",
    });
  };

  return (
    <ContactSection>
      <Wrapper>
        <h1>KONTAKT</h1>
        <Container
          size={800}
          px={0}
          mt="xl"
          style={{ border: "1px solid lightgray", padding: "3em" }}
        >
          <Box mx="auto">
            <form
              onSubmit={submitForm.onSubmit((values) => handleSubmit(values))}
            >
              <TextInput
                required
                label="Email"
                placeholder="email@email.com"
                {...submitForm.getInputProps("email")}
              />
              <TextInput
                required
                label="Imię"
                placeholder="Jak się nazywasz?"
                {...submitForm.getInputProps("name")}
              />
              <Textarea
                required
                label="Wiadomość"
                placeholder="Tutaj jest miejsce na twoją wiadomość"
                {...submitForm.getInputProps("message")}
              />
              <Group position="right" mt="md">
                <Button type="submit">Prześlij</Button>
              </Group>
            </form>
          </Box>
        </Container>
      </Wrapper>
    </ContactSection>
  );
};

export default contact;
