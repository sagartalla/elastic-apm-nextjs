import Link from 'next/link';
import Head from '../components/head';
import Nav from '../components/nav';
import { init as initApm } from 'elastic-apm-js-base';
// import apm from 'elastic-apm-node';

export default () => {
  var apm = initApm({
    serviceName: 'test-app',
    serverUrl: 'http://localhost:8200',
  });
  apm.addFilter((payload) => { 
    debugger; // this gets hit on the client side and not on the server side
    return payload;
  });
  return (
    <div>
      HELLO NEXTJS
    </div>
  );
};
