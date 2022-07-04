const contactSection = document.createElement('section');
contactSection.id = 'contact';
contactSection.classList.add('contact-info', 'd-flex', 'col', 'd-off');
contactSection.innerHTML = `<h2 class="section-title">Contact information</h2>
     <p> Do you have a question or you just want to say <q>Hello</q>? <br />
         You can reachout to us: </p>
      <ul>
        <li>Our e-mail: mail@mail.com</li>
        <li>Our phome number: 0043586534422</li>
        <li>Our address: Streetname 22, 84503 City, Country</li>
      </ul>`;

export default contactSection;