import { useEffect, useMemo, useRef } from 'react'

import { type ActionFunction, json, type MetaFunction } from '@remix-run/node'
import { useActionData, useTransition, Form } from '@remix-run/react'

import { Button } from '@/components/atoms'
import FormInput from '@/components/molecules/FormInput'
import FormTextarea from '@/components/molecules/FormTextarea'
import { dispatchContact } from '@/services/contact.server'
import { emailRegEx, requiredFieldMessage, validEmailMessage } from '@/utils/constants'

type TActionData = 
  | {
    name: null | string
    email: null | string
    body: null | string
  } 
  | undefined 

export const meta: MetaFunction = () => ({
  title: 'Contact Me',
  description:
    'Want to discuss a project, suggest something or even only greet? Contact me now',
})

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData()

  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const body = formData.get('body') as string

  const validEmail = email.match(emailRegEx)

  const errors: TActionData = {
    name: name ? null : requiredFieldMessage,
    email: validEmail
      ? null
      : email
        ? validEmailMessage
        : requiredFieldMessage,
    body: body ? null : requiredFieldMessage
  }

  const hasErrors = Object.values(errors).some(errorMessage => errorMessage)
  if (hasErrors) return json<{ success: boolean, errors: TActionData }>({ success: false, errors })

  await dispatchContact({ name, email, body })

  return json({ success: true, message: 'Message sent successfully' })
}

const Contact = () => {
  const formReference = useRef<HTMLFormElement>(null)
  const actionData = useActionData()
  const transition = useTransition()

  const isSending =
    transition.state === 'submitting' &&
    transition.submission.formData.get('_action') === 'create'

  useEffect(() => {
    if (!isSending && actionData?.success) formReference.current?.reset()
  }, [isSending, actionData?.success])

  const renderButtonLabel = useMemo(() => {
    return isSending && !actionData?.success
      ? 'Sending...'
      : actionData?.success
      ? 'Sent!'
      : 'Send'
  }, [isSending, actionData?.success])

  return (
    <section className="flex flex-col items-center">
      <h1 className="headingOne">Contact me</h1>

      <Form className="flex flex-col" method="post" replace ref={formReference}>
        <FormInput
          id="name"
          name="name"
          label="name"
          placeholder="Your preferred name"
          errors={actionData?.errors}
        />
        <FormInput
          className="my-2"
          id="email"
          name="email"
          label="e-mail"
          placeholder="example@domain.com"
          errors={actionData?.errors}
        />
        <FormTextarea
          id="body"
          name="body"
          label="message"
          placeholder="Want to discuss a project, suggest something or even only greet? Tell me everything here!"
          maxLength={500}
          errors={actionData?.errors}
        />
        <Button
          name="_action"
          type="submit"
          label={renderButtonLabel}
          theme={actionData?.success ? 'success' : 'primary'}
          disabled={isSending && !actionData?.success}
        />
      </Form>
    </section>
  )
}

export default Contact
