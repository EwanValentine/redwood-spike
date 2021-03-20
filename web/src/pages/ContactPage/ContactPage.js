import styled from 'styled-components'
import {
  Form,
  TextField,
  Submit,
  TextAreaField,
  FieldError,
  Label,
} from '@redwoodjs/forms'
import { gql } from 'graphql'
import MainLayout from 'src/layouts/MainLayout'
import { useForm } from 'react-hook-form'
import { Flash, useFlash, useMutation } from '@redwoodjs/web'

const CREATE_CONTACT = gql`
  mutation CreateContactMutation($input: CreateContactInput!) {
    createContact(input: $input) {
      id
    }
  }
`

const Styles = styled.section`
  button,
  input,
  label,
  textarea {
    display: block;
    outline: none;
  }

  label {
    margin-top: 1rem;
  }

  .error {
    color: red;
  }

  input.error,
  textarea.error {
    border: 1px solid red;
  }
`

const ContactPage = () => {
  const { addMessage } = useFlash()
  const formMethods = useForm({ mode: 'onBlur' })

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      addMessage("Thanks, we'll be in touch", {
        style: { backgroundColor: 'green', color: 'white', padding: '1rem' },
      })
      formMethods.reset()
    },
  })
  const onSubmit = async (data) => {
    try {
      await create({ variables: { input: data } })
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <MainLayout>
      <Flash timeout={2000} />
      <Styles>
        <h2>Contact</h2>
        <Form
          onSubmit={onSubmit}
          disabled={loading}
          validation={{ mode: 'onBlur' }}
          error={error}
          formMethods={formMethods}
        >
          {error && (
            <div style={{ color: 'red' }}>
              {"We couldn't send your message: "}
              {error.message}
            </div>
          )}
          <Label name="name" errorClassName="error">
            Name
          </Label>
          <TextField name="name" required errorClassName="error" />
          <FieldError name="name" className="error" />

          <label htmlFor="email">E-Mail</label>
          <TextField
            name="email"
            validation={{
              required: true,
            }}
            errorClassName="error"
          />
          <FieldError name="email" className="error" />

          <label htmlFor="message">Message</label>
          <TextAreaField name="message" required errorClassName="error" />
          <FieldError name="message" className="error" />

          <Submit>Save</Submit>
        </Form>
      </Styles>
    </MainLayout>
  )
}

export default ContactPage
