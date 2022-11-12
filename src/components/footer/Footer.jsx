/* eslint-disable react/no-unescaped-entities */
import Icon from '@mdi/react';
import { mdiFacebook } from '@mdi/js';
import { mdiTwitter } from '@mdi/js';
import { mdiInstagram } from '@mdi/js';
import { mdiMapMarker } from '@mdi/js';
import { mdiPhone } from '@mdi/js';
import { mdiAt } from '@mdi/js';

function Footer() {
  return (
    <div className="flex">
      <div className="flex-1 flex flex-col p-5">
        <h3 className="mb-5 font-semibold text-lg">Logo</h3>
        <p className="my-5">
          There are many variations of passages of Lorem Ipsum available, but the majority have
          suffered alteration in some form, by injected humour or randomized words which don't look
          even slightly believable
        </p>
        <div className="flex">
          <Icon path={mdiFacebook} className="icon" />
          <Icon path={mdiInstagram} className="icon" />
          <Icon path={mdiTwitter} className="icon" />
        </div>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-6 font-semibold text-lg">Useful links</h3>
        <ul className="flex flex-wrap">
          <li className="footer-list">Home</li>
          <li className="footer-list">Cart</li>
          <li className="footer-list">Man Fashion</li>
          <li className="footer-list">Woman Fashion</li>
          <li className="footer-list">Accessories</li>
          <li className="footer-list">Order Tracking</li>
          <li className="footer-list">Whishlist</li>
          <li className="footer-list">Terms</li>
        </ul>
      </div>
      <div className="flex-1 p-5">
        <h3 className="mb-6 font-semibold text-lg">Contact</h3>
        <p className="flex items-center mb-5 gap-2">
          <Icon path={mdiPhone} size={1} />
          +1 234 56 78
        </p>
        <p className="flex items-center mb-5 gap-2">
          <Icon path={mdiMapMarker} size={1} />
          622 Fake Street, Fake City 89336
        </p>
        <p className="flex items-center gap-2">
          <Icon path={mdiAt} size={1} />
          contact@logo.dev
        </p>
        <div>
          <img src="./image/products/payment.png" alt="" className="mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
