import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom';
import { getContact } from '../api/ContactService';


const ContactDetails = ({ updateContact, updateImage }) => {
  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    title: '',
    status: '',
    photoUrl: ''
  });

  const { id } = useParams();

  const fetchContact = async (id) => {
    try {
      const { data } = await getContact(id);
      setContact(data);
      console.log(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchContact(id);
  }, []);

  return (
    <>
    <Link to={'/contacts'} className='link'><i className='bi bi-arrow-left'></i>Back to list</Link>
    <div className='profile'>
      <div className='profile_details'>
        <img src={contact.photoUrl} alt={`Profile photo of ${contact.name}`} />
        <div className='profile_metadata'>
          <p className='profile_name'>{contact.name}</p>
          <p className='profile_muted'>JPG, GIF, or PNG. Max size of 10Mb</p>
          <button className='btn'><i className='bi bi-cloud-upload'></i> Change photo</button>
        </div>
      </div>
      <div className='profile_settings'> Settings will go here</div>
    </div>

    </>
  )
}

export default ContactDetails