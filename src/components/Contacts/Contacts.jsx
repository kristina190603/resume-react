import React from 'react';

const Contacts = () => {
    return (
        <div>
            <div className='textContact'>
                <h3>How to contact me</h3>
            </div>
            <div className='linkss'>
            <a href="https://vk.com/dead_skater666">ВКонтакте</a>
            <a href="https://www.instagram.com/dead_skater__/">Инстаграм</a>
            <a href="https://t.me/Dead_skater666">Телеграм</a>
            <a href="mailto:kristina192003@gmail.com?subject=subject&cc=cc@example.com">Gmail</a>
            </div>
            <div className='number_phone'>
                <h4>My numbers: </h4>
                <p>+996 555 123 456 - Telegram</p>
                <p>+996 771 123 456 - WhatsApp</p>
            </div>
        </div>
    );
};

export default Contacts;