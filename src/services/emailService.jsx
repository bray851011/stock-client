import emailjs from 'emailjs-com';

const sendActivationEmail = (name, email) => {
  emailjs.send('service_9wdzqye', 'SAAT', {
    to_name: name,
    to_email: email,
    activation_link: `http://localhost:8000/activate?name=${name}`
  }, 'alnBYg9S1Fu95lqMp')
    .then((result) => {
      console.log('Email sent successfully:', result.text);
    }, (error) => {
      console.error('Error sending email:', error.text);
    });
};

export default sendActivationEmail;