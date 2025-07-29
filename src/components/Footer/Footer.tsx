import React, { useState } from 'react';
import Image from 'next/image';
import FooterModal from './FooterModal';

interface FooterColumnProps {
  imgUrl: string;
  title: string;
  text: string;
  imgWidth?: string;
}

const FooterColumn: React.FC<FooterColumnProps> = ({ imgUrl, title, text, imgWidth = '150' }) => {
  // Calculate image height to maintain aspect ratio with larger size
  const aspectRatio = 100 / parseInt(imgWidth);
  const imageHeight = 200 * aspectRatio; // Increased from 160 to 200

  return (
    <div className="flex-1 min-w-[250px] max-w-[350px] p-4 text-center">
      <div className="h-full flex flex-col items-center">
        <div
          className="w-full flex items-center justify-center"
          style={{ height: `${imageHeight}px` }}
        >
          <div className="relative w-full max-w-[200px] h-full">
            <Image
              src={imgUrl}
              alt={title}
              width={200}
              height={imageHeight}
              className="w-full h-full object-contain"
              style={{ objectPosition: 'center' }}
            />
          </div>
        </div>
        <h3 className="text-base font-bold mt-4 mb-2 text-gray-800 whitespace-nowrap">{title}</h3>
        <p className="text-gray-600 !text-[14px] md:!text-[16px] leading-relaxed">{text}</p>
      </div>
    </div>
  );
};

interface FooterLinkProps {
  label: string;
  id: string;
  onClick: (id: string) => void;
}

const FooterLink: React.FC<FooterLinkProps> = ({ label, id, onClick }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    onClick(id);
  };

  return (
    <a
      href="#"
      className="text-white cursor-pointer hover:text-white transition-colors duration-300 mx-2"
      onClick={handleClick}
    >
      {label}
    </a>
  );
};

const FooterLinks: React.FC<{ loadInfo: (id: string) => void }> = ({ loadInfo }) => (
  <div className="w-full text-[14px] md:text-[18px] text-center flex flex-wrap justify-center items-center gap-2 ">
    <FooterLink label="Terms & Disclaimer" id="terms-pop-modal" onClick={loadInfo} />
    <FooterLink label="Privacy Policy" id="privacy-policy-modal" onClick={loadInfo} />
    <FooterLink label="Shipping Policy" id="shipping-policy-modal" onClick={loadInfo} />
    <FooterLink label="Return Policy" id="return-policy-modal" onClick={loadInfo} />
  </div>
);

const Footer: React.FC = () => {
  const [modalId, setModalId] = useState<string>('');
  const [showModal, setShowModal] = useState<boolean>(false);

  const loadInfo = (id: string) => {
    setModalId(id);
    setShowModal(true);
    // Removed the line that hides the scrollbar
  };

  const closeModal = () => {
    setShowModal(false);
    setModalId('');
    // Removed the line that restores the scrollbar
  };

  return (
    <footer className="w-full mt-2 bg-[#242833] pb-12">
      <div className="text-white bg-[#242833]">
        <div className="text-center text-white text-[18px] mb-2 md:-mb-1">
          © <b>{new Date().getFullYear()} VNSH.com</b> All Rights Reserved.
        </div>
        <div className="-mt-[7px]">
          <FooterLinks loadInfo={loadInfo} />
        </div>
      </div>

      <div
        className={`fixed inset-0 bg-black/70 flex items-start justify-center z-50 pt-10 px-4 overflow-y-auto transition-opacity duration-300 ease-in-out ${!showModal ? 'pointer-events-none' : ''}`}
        onClick={closeModal}
        style={{
          opacity: showModal ? 1 : 0,
          transition: 'opacity 300ms ease-in-out',
        }}
      >
        <div
          className={`bg-white rounded-lg max-w-6xl w-full max-h-[80vh] overflow-y-auto relative mx-auto transition-all duration-300 ease-in-out transform shadow-2xl ${showModal ? 'translate-y-0' : '-translate-y-10'}`}
          onClick={e => e.stopPropagation()}
          style={{
            transition: 'transform 300ms ease-in-out, opacity 300ms ease-in-out',
            opacity: showModal ? 1 : 0,
          }}
        >
          <button
            className="absolute top-4 right-4 text-2xl text-gray-500 hover:text-gray-800 bg-transparent border-none hover:bg-transparent"
            onClick={closeModal}
            aria-label="Close modal"
          >
            &times;
          </button>
          <FooterModal modalId={modalId} closeModal={closeModal} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
