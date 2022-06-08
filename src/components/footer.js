import React from 'react';

function Footer(props) {
    return(
        <div className='color'>
            <div className='container'>
                <div className='row'>
                    <div className='col-7 col-sm-5 mx-auto'>
                        <h4>TRỤ SỞ</h4>
                        <address>
                        Tầng 4 Tòa nhà 123, 123 Võ Văn Tần, phường 6, quận 3, Tp. HCM <br />
                        <span className='ti-mobile'></span> 028. 7307 7979 <br />
                        <span className='ti-email'></span> <a href="giaitrixahoi@admicro.vn">quanlinhanvien@admicro.vn</a>
                        </address>
                    </div>
                    <div className='col-12 col-sm-4 mx-auto'>
                        <a href='/'><i className='ti-facebook font-icon'></i></a>
                        <a href='/'><i className='ti-google font-icon'></i></a>
                        <a href='/'><i className='ti-youtube font-icon'></i></a>
                        <a href='/'><i className='ti-twitter-alt font-icon'></i></a>
                        <a href='/'><i className='ti-wordpress font-icon'></i></a>
                    </div>
                </div>
                <p className='text-center'>© 2018 - 2022 F8. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;