import React from 'react';

const AdSense = () => {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8542623725990737"
        crossorigin="anonymous"
      ></script>
      {/*-- mohablog */}
      <ins
        class="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-8542623725990737"
        data-ad-slot="6125999033"
        data-ad-format="auto"
        data-full-width-responsive="true"
      ></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
    </>
  );
};

export default AdSense;