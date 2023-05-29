import React from 'react'
import MainlayoutCompany from '../../hoc/mainlayout-company';
import ContactCompany from '../contact-company';
import TransportCompany from '../transport-company';

type Props = {}

const ContactPage = (props: Props) => {
  return (
    <MainlayoutCompany>
      <ContactCompany />
      <TransportCompany />
    </MainlayoutCompany>
  );
}

export default ContactPage