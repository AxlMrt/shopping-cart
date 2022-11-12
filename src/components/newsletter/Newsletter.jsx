import Icon from '@mdi/react';
import { mdiSend } from '@mdi/js';

function Newsletter() {
  return (
    <div className="h-3/5 flex flex-col items-center justify-center">
      <h1 className="text-7xl mb-5">Newsletter</h1>
      <p className="text-base font-light mb-20">Get timely updates from your favorite products</p>
      <div className="w-1/2 h-10 flex justify-between items-center border-2">
        <input type="email" placeholder="Enter your email" className="flex-[8_8_0%] pl-5" />
        <Icon path={mdiSend} size={1} className="flex-1 bg-teal-200 text-white" />
      </div>
    </div>
  );
}

export default Newsletter;
