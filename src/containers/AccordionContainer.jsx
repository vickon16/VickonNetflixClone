import React from 'react'
import faqsData from "../fixtures/faqs.json";
import {Accordion, OptForm} from '../components';

const AccordionContainer = () => {
  return (
    <Accordion>
      <Accordion.Title>Frequently Asked Questions</Accordion.Title>
      {faqsData.map(item => 
        <Accordion.Item key={item.id}>
          <Accordion.Header>{item.header}</Accordion.Header>
          <Accordion.Body>{item.body}</Accordion.Body>
        </Accordion.Item>
      )}

      <OptForm>
        <OptForm.InputContainer>
          <OptForm.Input placeholder="Email address..." />
          <OptForm.Button>Try it now</OptForm.Button>
        </OptForm.InputContainer>
        <OptForm.Text>Ready to watch? Enter your email  to create or restart your membership</OptForm.Text>
      </OptForm>
    </Accordion>
  )
}

export default AccordionContainer