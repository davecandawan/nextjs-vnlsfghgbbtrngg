import React from 'react';

interface FooterModalProps {
  modalId: string;
  closeModal: () => void;
}

const FooterModal: React.FC<FooterModalProps> = ({ modalId, closeModal }) => {
  // Only render the modal if we have a valid modalId
  if (!modalId) return null;

  // Function to get the appropriate content based on modalId
  const getModalContent = () => {
    switch (modalId) {
      case 'terms-pop-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <span className="text-2xl font-bold text-black">Terms &amp; Disclaimer</span>
            </div>
            <div className="prose max-w-none text-base">
              <p className="font-semibold m-0 mb-2">Effective Date: January 1st, 2019</p>
              <p className="mb-4 text-black">
                To review material modifications and their effective dates scroll to the bottom of
                the page.
              </p>
              <div className="text-black">
                <ol className="list-decimal pl-5 space-y-3 m-0">
                  <li>
                    <span className="font-semibold">Parties.</span> The parties to these Terms of
                    Use are you, and the owner of this VNSH.com website business, Sicuro Brands LLC
                    ("Sicuro Brands"). All references to "we", "us", "our", this "website" or this
                    "site" shall be construed to mean this website business and Sicuro Brands.
                  </li>
                  <li>
                    <span className="font-semibold">Modification.</span> We reserve the right to
                    modify these Terms of Use at any time, and without prior notice, by posting an
                    amended Terms of Use that is always accessible through the Terms of Use link on
                    this site's home page. You should scroll to the bottom of this page periodically
                    to review material modifications and their effective dates. YOUR CONTINUED USE
                    OF THIS SITE FOLLOWING OUR POSTING OF A MODIFICATION NOTICE OR NEW TERMS OF USE
                    ON THIS SITE WILL CONSTITUTE BINDING ACCEPTANCE OF THE MODIFICATION OR NEW TERMS
                    OF USE.
                  </li>
                  <li>
                    <span className="font-semibold">Use And Restrictions.</span> Subject to these
                    Terms of Use, our Privacy Policy, and the additional policies posted at the
                    bottom of our home page, including without limitation our Return Policy, you may
                    use the public areas of this site, but only for your own internal purposes. You
                    agree not to access (or attempt to access) this site by any means other than
                    through the interface we provide, unless you have been specifically allowed to
                    do so in a separate agreement. You agree not to access (or attempt to access)
                    this site through any automated means (including use of scripts or web
                    crawlers), and you agree to comply with the instructions set out in any
                    robots.txt file present on this site. You are not authorized to (i) resell,
                    sublicense, transfer, assign, or distribute the site, its services or content;
                    (ii) modify or make derivative works based on the site, its services or content;
                    or (iii) "frame" or "mirror" the site, its services or content on any other
                    server or Internet-enabled device. All rights not expressly granted in this
                    Agreement are reserved by us and our licensors.
                  </li>
                  <li>
                    <span className="font-semibold">How We Treat Postings To This Site.</span> We
                    will not treat information that you post to areas of this site that are viewable
                    by others (for example, to a blog, forum or chat-room) as proprietary, private,
                    or confidential. We have no obligation to monitor posts to this site or to
                    exercise any editorial control over such posts; however, we reserve the right to
                    review such posts and to remove any material that, in our judgment, is not
                    appropriate. Posting, transmitting, promoting, using, distributing or storing
                    content that could subject us to any legal liability, whether in tort or
                    otherwise, or that is in violation of any applicable law or regulation, or
                    otherwise contrary to commonly accepted community standards, is prohibited,
                    including without limitation information and material protected by copyright,
                    trademark, trade secret, nondisclosure or confidentiality agreements, or other
                    intellectual property rights, and material that is obscene, defamatory,
                    constitutes a threat, or violates export control laws.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Defamation; Communications Decency Act Notice.
                    </span>{' '}
                    This site is a provider of "interactive computer services" under the
                    Communications Decency Act, 47 U.S.C. Section 230, and as such, our liability
                    for defamation and other claims arising out of any postings to this site by
                    third parties is limited as described therein. We are not responsible for
                    content or any other information posted to this site by third parties. We
                    neither warrant the accuracy of such postings or exercise any editorial control
                    over such posts, nor do we assume any legal obligation for editorial control of
                    content posted by third parties or liability in connection with such postings,
                    including any responsibility or liability for investigating or verifying the
                    accuracy of any content or any other information contained in such postings.
                  </li>
                  <li>
                    <span className="font-semibold">Monitoring.</span> We reserve the right, but not
                    the obligation, to monitor your access and use of this site without notification
                    to you. We may record or log your use in a manner as set out in our Privacy
                    Policy that is accessible though the Privacy Policy link on this site's home
                    page.
                  </li>
                  <li>
                    <span className="font-semibold">Separate Agreements.</span> You may acquire
                    products, services and/or content from this site. We reserve the right to
                    require that you agree to separate agreements as a condition of your use and/or
                    purchase of such products, services and/or content.
                  </li>
                  <li>
                    <span className="font-semibold">Ownership.</span> The material provided on this
                    site is protected by law, including, but not limited to, United States copyright
                    law and international treaties. The copyrights and other intellectual property
                    in the content of this site is owned by us and/or others. Except for the limited
                    rights granted herein, all other rights are reserved.
                  </li>
                  <li>
                    <span className="font-semibold">DMCA Notice.</span> This site is an Internet
                    "service provider" under the Digital Millennium Copyright Act, 17 U.S.C. Section
                    512 ("DMCA"). As Required by the DMCA, this site maintains specific contact
                    information provided below, including an e-mail address, for notifications of
                    claimed infringement regarding materials posted to this site. All notices should
                    be addressed to the contact person specified below (our agent for notice of
                    claimed infringement):
                    <p className="pl-4 mt-2">Notification of Claimed Infringement:</p>
                    <p className="pl-4">
                      Sicuro Brands
                      <br />
                      2121 Lohmans Crossing Rd #504-662,
                      <br />
                      Lakeway, TX 78734
                    </p>
                    <p className="pl-4">Agent's Name/Email Address: customercare (at) VNSH.com</p>
                    <p className="pl-4 mt-2">
                      You may contact our agent for notice of claimed infringement specified above
                      with complaints regarding allegedly infringing posted material and we will
                      investigate those complaints. If the posted material is believed in good faith
                      by us to violate any applicable law, we will remove or disable access to any
                      such material, and we will notify the posting party that the material has been
                      blocked or removed.
                    </p>
                    <p className="pl-4 mt-2">
                      In notifying us of alleged copyright infringement, the DMCA requires that you
                      include the following information: (i) description of the copyrighted work
                      that is the subject of claimed infringement; (ii) description of the
                      infringing material and information sufficient to permit us to locate the
                      alleged material; (iii) contact information for you, including your address,
                      telephone number and/or e-mail address; (iv) a statement by you that you have
                      a good faith belief that the material in the manner complained of is not
                      authorized by the copyright owner, or its agent, or by the operation of any
                      law; (v) a statement by you, signed under penalty of perjury, that the
                      information in the notification is accurate and that you have the authority to
                      enforce the copyrights that are claimed to be infringed; and (vi) a physical
                      or electronic signature of the copyright owner or a person authorized to act
                      on the copyright owner's behalf. Failure to include all of the above-listed
                      information may result in the delay of the processing of your complaint.
                    </p>
                  </li>
                </ol>

                <ol className="list-decimal pl-5 space-y-3 mt-6" start={10}>
                  <li>
                    <span className="font-semibold">Warranty Disclaimers.</span>
                    <p className="pl-4 mt-2">
                      10.1 EXCEPT AS MAY BE PROVIDED IN ANY SEPARATE WRITTEN AGREEMENTS SIGNED BY
                      THE PARTIES, THE SERVICES, CONTENT, AND/OR PRODUCTS ON THIS SITE ARE PROVIDED
                      "AS-IS", AND NEITHER WE NOR ANY OF OUR LICENSORS MAKE ANY REPRESENTATION OR
                      WARRANTY WITH RESPECT TO SUCH PRODUCTS, SERVICES, AND/OR CONTENT. EXCEPT AS
                      MAY BE PROVIDED IN ANY SEPARATE WRITTEN AGREEMENT SIGNED BY THE PARTIES OR
                      SEPARATE AGREEMENT ORIGINATING FROM THIS SITE, THIS SITE AND ITS LICENSORS
                      SPECIFICALLY DISCLAIM, TO THE FULLEST EXTENT PERMITTED BY LAW, ANY AND ALL
                      WARRANTIES, EXPRESS OR IMPLIED, RELATING TO THIS SITE OR PRODUCTS, SERVICES
                      AND/OR CONTENT ACQUIRED FROM THIS SITE, INCLUDING BUT NOT LIMITED TO, IMPLIED
                      WARRANTIES OF MERCHANTABILITY, COMPLETENESS, TIMELINESS, CORRECTNESS,
                      NON-INFRINGEMENT, OR FITNESS FOR ANY PARTICULAR PURPOSE. THIS SITE AND ITS
                      LICENSORS DO NOT REPRESENT OR WARRANT THAT THIS SITE, ITS PRODUCTS, SERVICES,
                      AND/OR CONTENT: (A) WILL BE SECURE, TIMELY, UNINTERRUPTED OR ERROR-FREE OR
                      OPERATE IN COMBINATION WITH ANY OTHER HARDWARE, SOFTWARE, SYSTEM OR DATA, (B)
                      WILL MEET YOUR REQUIREMENTS OR EXPECTATIONS, OR (C) WILL BE FREE OF VIRUSES OR
                      OTHER HARMFUL COMPONENTS.
                    </p>
                    <p className="pl-4 mt-2">
                      10.2 IN USING OUR SITE AND RELATED MATERIALS AND SERVICES, IT REMAINS YOUR
                      RESPONSIBILITY TO COMPLY WITH ANY AND ALL APPLICABLE LOCAL, STATE, AND FEDERAL
                      CODES, REGULATIONS, AND LAWS REGARDING BUILDING STANDARDS, INSPECTION
                      REQUIREMENTS, PERMITTING REQUIREMENTS, PUBLIC SAFETY STANDARDS, AND OTHER
                      RELEVANT CONCERNS. THIS INCLUDES ANY APPLICABLE HOMEOWNERS ASSOCIATION RULES
                      AND/OR HOMEOWNERS INSURANCE GUIDELINES. YOU SHOULD CONTACT PROFESSIONALS
                      AND/OR EXPERTS FOR ASSISTANCE AND/OR ADVICE AS IS NECESSARY TO SAFELY AND
                      PROPERLY COMPLETE ANY IMPLEMENTATION OF THE METHODS AND SYSTEMS DESCRIBED IN
                      THE MATERIALS. YOU ARE RESPONSIBLE FOR YOUR ACTIONS, AND AGREE TO INDEMNIFY
                      AND/OR HOLD HARMLESS SICURO BRANDS FOR ANY LOSS, INJURY, DEATH, CLAIM (WHETHER
                      VALID OR INVALID), JUDGMENT, SUIT, PROCEEDING, DAMAGES, COSTS AND/OR EXPENSES
                      OF ANY NATURE WHATSOEVER ARISING FROM ANY ACTION TAKEN BY YOU WHEN USING OR
                      MISUSING INFORMATION IN THE MATERIALS.
                    </p>
                    <p className="pl-4 mt-2">
                      10.3 ALL PRODUCTS FROM THIS SITE, US OR OUR RELATED COMPANIES ARE STRICTLY FOR
                      INFORMATIONAL PURPOSES ONLY. WHILE ALL ATTEMPTS HAVE BEEN MADE TO VERIFY
                      INFORMATION PROVIDED ON OUR WEBSITE AND IN THE PUBLICATIONS, NEITHER THE
                      AUTHORS NOR THE PUBLISHERS ASSUMES ANY RESPONSIBILITY OR LIABILITY. THE
                      AUTHORS AND PUBLISHERS DISCLAIMS ANY RESPONSIBILITY FOR THE ACCURACY OF THE
                      CONTENT, INCLUDING BUT NOT LIMITED TO ERRORS OR OMISSIONS. LOSS OF PROPERTY,
                      INJURY TO SELF OR OTHERWISE, OR EVEN DEATH CAN OCCUR AS A DIRECT OR INDIRECT
                      CONSEQUENCE OF THE USE AND APPLICATION OF ANY CONTENT FOUND HEREIN.
                    </p>
                    <p className="pl-4 mt-2">
                      10.4 THESE DISCLAIMERS CONSTITUTE AN ESSENTIAL PART OF THIS AGREEMENT. NO
                      PURCHASE OR USE OF THE ITEMS OFFERED BY THIS SITE IS AUTHORIZED HEREUNDER
                      EXCEPT UNDER THESE DISCLAIMERS. IF IMPLIED WARRANTIES MAY NOT BE DISCLAIMED
                      UNDER APPLICABLE LAW, THEN ANY IMPLIED WARRANTIES ARE LIMITED IN DURATION TO
                      THE PERIOD REQUIRED BY APPLICABLE LAW. SOME STATES OR JURISDICTIONS DO NOT
                      ALLOW LIMITATIONS ON HOW LONG AN IMPLIED WARRANTY MAY LAST, SO THE ABOVE
                      LIMITATIONS MAY NOT APPLY TO YOU.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Limitation of Liability.</span> IN NO EVENT
                    SHALL THIS SITE AND/OR ITS LICENSORS BE LIABLE TO ANYONE FOR ANY DIRECT,
                    INDIRECT, PUNITIVE, SPECIAL, EXEMPLARY, INCIDENTAL, CONSEQUENTIAL OR OTHER
                    DAMAGES OF ANY TYPE OR KIND (INCLUDING LOSS OF DATA, REVENUE, PROFITS, USE OR
                    OTHER ECONOMIC ADVANTAGE) ARISING OUT OF, OR IN ANY WAY CONNECTED WITH THIS
                    SITE, ITS PRODUCTS, SERVICES, AND/OR CONTENT, ANY INTERRUPTION, INACCURACY,
                    ERROR OR OMISSION, REGARDLESS OF CAUSE, EVEN IF THIS SITE OR OUR LICENSORS HAVE
                    BEEN PREVIOUSLY ADVISED OF THE POSSIBILITY OF SUCH DAMAGES.
                  </li>
                  <li>
                    <span className="font-semibold">Links to This Site.</span> We grant to you a
                    limited, revocable, and nonexclusive right to create a hyperlink to this site
                    provided that the link does not portray us or our products or services in a
                    false, misleading, derogatory, or offensive matter. You may not use any logo,
                    trademark, or tradename that may be displayed on this site or other proprietary
                    graphic image in the link without our prior written consent.
                  </li>
                  <li>
                    <span className="font-semibold">Links to Third Party Websites.</span> We do not
                    review or control third party websites that link to or from this site, and we
                    are not responsible for their content, and do not represent that their content
                    is accurate or appropriate. Your use of any third party site is on your own
                    initiative and at your own risk, and may be subject to the other sites' terms of
                    use and privacy policy.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Participation In Promotions of Advertisers.
                    </span>{' '}
                    You may enter into correspondence with or participate in promotions of
                    advertisers promoting their products, services or content on this site. Any such
                    correspondence or participation, including the delivery of and the payment for
                    products, services or content, are solely between you and each such advertiser.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Consumer Rights Information; California Civil Code Section 1789.3.
                    </span>{' '}
                    If this site charges for services, products, content, or information, pricing
                    information will be posted as part of the ordering process for this site. We
                    maintain specific contact information including an e-mail address for
                    notifications of complaints and for inquiries regarding pricing policies in
                    accordance with California Civil Code Section 1789.3. All correspondence should
                    be addressed to our agent for notice at the following address:
                    <p className="pl-4 mt-2">
                      Notification of Consumer Rights Complaint or Pricing Inquiry:
                    </p>
                    <p className="pl-4">
                      Sicuro Brands
                      <br />
                      2121 Lohmans Crossing Rd #504-662,
                      <br />
                      Lakeway, TX 78734
                      <br />
                      Contact: customercare (at) VNSH.com
                    </p>
                    <p className="pl-4 mt-2">
                      You may contact us with complaints and inquiries regarding pricing and we will
                      investigate those matters and respond to the inquiries.
                    </p>
                    <p className="pl-4 mt-2">
                      The Complaint Assistance Unit of the Division of Consumer Services of the
                      Department of Consumer Affairs may be contacted in writing at 1020 N. Street,
                      #501, Sacramento, CA 95814, or by telephone at 1-916-445-1254.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Arbitration.</span> Except for actions to
                    protect intellectual property rights and to enforce an arbitrator's decision
                    hereunder, all disputes, controversies, or claims arising out of or relating to
                    this Agreement or a breach thereof shall be submitted to and finally resolved by
                    arbitration under the rules of the American Arbitration Association ("AAA") then
                    in effect. There shall be one arbitrator, and such arbitrator shall be chosen by
                    mutual agreement of the parties in accordance with AAA rules. The arbitration
                    shall take place in Denver, Colorado, USA, and may be conducted by telephone or
                    online. The arbitrator shall apply the laws of the State of Colorado, USA to all
                    issues in dispute. The controversy or claim shall be arbitrated on an individual
                    basis, and shall not be consolidated in any arbitration with any claim or
                    controversy of any other party. The findings of the arbitrator shall be final
                    and binding on the parties, and may be entered in any court of competent
                    jurisdiction for enforcement. Enforcements of any award or judgment shall be
                    governed by the United Nations Convention on the Recognition and Enforcement of
                    Foreign Arbitral Awards. Should either party file an action contrary to this
                    provision, the other party may recover attorney's fees and costs up to $1000.00.
                  </li>
                  <li>
                    <span className="font-semibold">Jurisdiction And Venue.</span> The courts of
                    Denver County in the State of Colorado, USA and the nearest U.S. District Court
                    in the State of Colorado shall be the exclusive jurisdiction and venue for all
                    legal proceedings that are not arbitrated under these Terms of Use.
                  </li>
                  <li>
                    <span className="font-semibold">Controlling Law.</span> This Agreement shall be
                    construed under the laws of the State of Colorado, USA, excluding rules
                    regarding conflicts of law. The application of the United Nations Convention on
                    Contracts for the International Sale of Goods is expressly excluded.
                  </li>
                  <li>
                    <span className="font-semibold">
                      Onward Transfer of Personal Information Outside Your Country of Residence.
                    </span>{' '}
                    Any personal information which we may collect on this site will be stored and
                    processed in our servers located only in the United States. If you reside
                    outside the United States, you consent to the transfer of personal information
                    outside your country of residence to the United States.
                  </li>
                  <li>
                    <span className="font-semibold">Severability.</span> If any provision of these
                    terms is declared invalid or unenforceable, such provision shall be deemed
                    modified to the extent necessary and possible to render it valid and
                    enforceable. In any event, the unenforceability or invalidity of any provision
                    shall not affect any other provision of these terms, and these terms shall
                    continue in full force and effect, and be construed and enforced, as if such
                    provision had not been included, or had been modified as above provided, as the
                    case may be.
                  </li>
                  <li>
                    <span className="font-semibold">Force Majeure.</span> We shall not be liable for
                    damages for any delay or failure of delivery arising out of causes beyond our
                    reasonable control and without our fault or negligence, including, but not
                    limited to, Acts of God, acts of civil or military authority, fires, riots,
                    wars, embargoes, Internet disruptions, hacker attacks, or communications
                    failures.
                  </li>
                  <li>
                    <span className="font-semibold">Privacy.</span> Please review this site's
                    Privacy Policy which also governs your visit to this site. Our Privacy Policy is
                    always accessible on our site's home page.
                  </li>
                  <li>
                    <span className="font-semibold">Purchases.</span> Credit Cards - We accept the
                    following credit cards: Visa, MasterCard, and Discover. There is no surcharge
                    for using your credit card to make purchases. Please be sure to provide your
                    exact billing address and telephone number (i.e. the address and phone number
                    your credit card bank has on file for you). Incorrect information will cause a
                    delay in processing your order.
                    <p className="pl-4 mt-2">
                      Money Orders, Cashier's Checks, Company Checks, &amp; Personal Checks We
                      accept money orders, cashier's checks, personal checks, and company checks in
                      U.S. Dollars only. Orders are processed upon receipt of a money order or
                      cashier's check. For personal and company checks, please allow up to 10
                      banking days after receipt for clearance of funds before the order is
                      processed. We cannot guarantee the availability of a product by the time funds
                      clear or payment is received. We will charge a $25 fee on all returned checks.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Multiple Product Orders.</span> For a multiple
                    product order, we will make every attempt to ship all products contained in the
                    order at the same time. Products that are unavailable at the time of shipping
                    will be shipped as they become available, unless you inform us otherwise. You
                    will only be charged for products contained in a given shipment, plus any
                    applicable shipping charges. You will only be charged for shipping at the rate
                    quoted to you on your purchase receipt. The entirety of this shipping charge may
                    be applied to the first product(s) shipped on a multiple shipment order.
                  </li>
                  <li>
                    <span className="font-semibold">Order Acceptance Policy.</span> Your receipt of
                    an electronic or other form of order confirmation does not signify our
                    acceptance of your order, nor does it constitute confirmation of our offer to
                    sell. Sample Store reserves the right at any time after receipt of your order to
                    accept or decline your order for any reason or to supply less than the quantity
                    you ordered of any item.
                  </li>
                  <li>
                    <span className="font-semibold">Other Conditions.</span> These Conditions will
                    supersede any terms and/or conditions you include with any purchase order,
                    regardless of whether Sample Store. signs them or not. We reserve the right to
                    make changes to this site and these Conditions at any time.
                  </li>
                  <li>
                    <span className="font-semibold">Out-of-Stock Products.</span> We will ship your
                    product as it becomes available. Usually, products ship the same day if ordered
                    by 5:00PM, or by the next business day if your order is received after this time
                    and for orders received on Saturday, Sunday or any major holiday. However, there
                    may be times when the product you have ordered is out-of-stock which will delay
                    fulfilling your order. We will keep you informed of any products that you have
                    ordered that are out-of-stock and unavailable for immediate shipment. You may
                    cancel your order at any time prior to shipping.
                  </li>
                  <li>
                    <span className="font-semibold">Contests and Special Offers.</span> To keep you
                    informed about our latest offers, we may notify you of current promotions,
                    specials and new additions to the Sample Store site. You may unsubscribe from
                    our newsletters by following the unsubscribe instructions in any email you
                    receive from us.
                    <p className="pl-4 mt-2">
                      When entering any of our contests or prize drawings, you provide your name,
                      email address and mailing address. If you win, we will send the prize to the
                      address entered and notify you by email. When you enter a contest or drawing
                      you are also included in our newsletter list to receive notice of promotions,
                      specials and new additions to the Sample Store site. You may unsubscribe from
                      this news list by following the unsubscribe instructions in any email
                      received.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Returns.</span> We offer what we believe to be
                    the "best in industry" policy for returns. Please review our Return Policy for
                    terms and conditions.
                  </li>
                  <li>
                    <span className="font-semibold">Shipping Policy.</span> Shipping Time – Most
                    orders received before 5:00PM will ship the same day, provided the product
                    ordered is in stock. Most orders received after 5:00 PM will ship the next
                    business day. Orders are not processed or shipped on Saturday or Sunday, except
                    by prior arrangement.
                    <p className="pl-4 mt-2">
                      We cannot guarantee when an order will arrive. Consider any shipping or
                      transit time offered to you by Sample Store or other parties only as an
                      estimate. We encourage you to order in a timely fashion to avoid delays caused
                      by shipping or product availability.
                    </p>
                  </li>
                  <li>
                    <span className="font-semibold">Taxes.</span> Our Store shall automatically
                    charge and withhold the applicable sales tax for orders to be delivered to
                    addresses within the same state. For orders shipped to other states, you are
                    solely responsible for all sales taxes or other taxes.
                  </li>
                  <li>
                    <span className="font-semibold">Typographical Errors.</span> In the event a
                    product is listed at an incorrect price due to typographical error or error in
                    pricing information received from our suppliers, Our Store shall have the right
                    to refuse or cancel any orders placed for product listed at the incorrect price.
                    Our Store shall have the right to refuse or cancel any such orders whether or
                    not the order has been confirmed and your credit card charged. If your credit
                    card has already been charged for the purchase and your order is canceled, Our
                    Store shall immediately issue a credit to your credit card account in the amount
                    of the incorrect price.
                  </li>
                </ol>
                <p className="pl-4 mt-6">Material Modifications Since January 1, 2019: NONE</p>
              </div>
            </div>
          </>
        );

      case 'privacy-policy-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <span className="text-2xl font-bold text-black">Privacy Policy</span>
            </div>
            <div className="prose max-w-none space-y-4 text-black">
              <p className="font-semibold">Effective Date: January 1st, 2019</p>
              <p>
                To review material modifications and their effective dates scroll to the bottom of
                the page.
              </p>

              <div className="space-y-4">
                <p>
                  Sicuro Brands, LLC ("Sicuro Brands") owns and operates this VNSH.com website
                  business. All references to "we", "us", this "website" or this "site" shall be
                  construed to mean Sicuro Brands Publishing. We understand that visitors to this
                  website are concerned about the privacy of information. The following describes
                  our privacy policy regarding information, including Personal Information (defined
                  below), that we collect through this website.
                </p>

                <p>
                  By using this website you are accepting the practices described in this Privacy
                  Policy.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">How We Modify This Privacy Policy</h3>
                <p>
                  We reserve the right to modify this Privacy Policy at any time, and without prior
                  notice, by posting an amended Privacy Policy that is always accessible by clicking
                  on the "Privacy Policy" link on this site's home page. Your continued use of this
                  site indicates your acceptance of the amended Privacy Policy.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">
                  The Types of Information We Collect And How We Collect It
                </h3>
                <p>
                  <strong>Personal Information.</strong> We collect personal information that may be
                  used to identify you ("Personal Information"). We collect Personal Information
                  from you when you register on our site, place an order, subscribe to our
                  newsletter, respond to a survey, fill out a form or order an affiliate product
                  from another company we are working with. Personal Information that we collect may
                  vary with each separate purpose for which you provide it, and it may include one
                  or more of the following categories: name, physical address, an email address,
                  phone number, credit card information including credit card number, expiration
                  date, and billing address.
                </p>

                <p>
                  <strong>Usage Data.</strong> We reserve the right to collect information based on
                  your usage of this site which is information collected automatically from this
                  site (or third party services employed in this site), which can include: the IP
                  addresses or domain names of the computers utilized by the users who use this
                  site, the URI addresses (Uniform Resource Identifier), the time of the request,
                  the method utilized to submit the request to the server, the size of the file
                  received in response, the numerical code indicating the status of the server's
                  answer (successful outcome, error, etc.), the country of origin, the features of
                  the browser and the operating system utilized by the user, the various time
                  details per visit (e.g., the time spent on each page within the site) and the
                  details about the path followed within the site with special reference to the
                  sequence of pages visited, heat map data, and other parameters about the device
                  operating system and/or the user's IT environment ("Usage Data"). Usage Data is
                  essentially anonymous when collected, but could be used indirectly to identify a
                  person.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">How We Use Your Information</h3>
                <p>
                  Any of the information we collect from you may be used in one of the following
                  ways:
                </p>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    To personalize your experience (your information helps us to better respond to
                    your individual needs)
                  </li>
                  <li>
                    To improve our website (we continually strive to improve our website offerings
                    based on the information and feedback we receive from you)
                  </li>
                  <li>
                    To improve customer service (your information helps us to more effectively
                    respond to your customer service requests and support needs)
                  </li>
                  <li>To administer a contest, promotion, survey or other site feature</li>
                  <li>To send periodic emails</li>
                </ul>

                <p>
                  The email address you provide for order processing, may be used to send you
                  information and updates pertaining to your order or request, in addition to
                  receiving occasional company news, updates, promotions, related product or service
                  information, etc.
                </p>

                <p className="font-semibold">
                  Note: If at any time you would like to unsubscribe from receiving future emails,
                  we include unsubscribe instructions at the bottom of each email.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">
                  How We Disclose Or Share Your Information
                </h3>
                <p>
                  <strong>California Privacy Rights.</strong> California Civil Code Section 1798.83
                  permits California residents to request certain information regarding disclosure
                  of their Personal Information to third parties for purposes of direct marketing.
                  You may request further information about our compliance with California Civil
                  Code Section 1798.83 at the following email address:{' '}
                  <a href="mailto:customercare@vnsh.com" className="text-blue-600 hover:underline">
                    customercare@vnsh.com
                  </a>
                  .
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">How We Protect Your Information</h3>
                <p>
                  We will implement reasonable and appropriate security procedures consistent with
                  prevailing industry standards to protect data from unauthorized access by physical
                  and electronic intrusion.
                </p>
                <p>
                  We utilize password protected directories and databases to safeguard your
                  information.
                </p>
                <p>
                  We offer the use of a secure server. All supplied sensitive/credit information is
                  transmitted via Secure Socket Layer (SSL) technology and then encrypted into our
                  Payment gateway providers database only to be accessible by those authorized with
                  special access rights to such systems, and are required to keep the information
                  confidential.
                </p>
                <p>
                  After a transaction, your Personal Information (credit cards, social security
                  numbers, financials, etc.) will not be stored on our servers.
                </p>
                <p>
                  Despite all of these efforts to protect your information, no data transmission
                  over the Internet can be guaranteed to be 100% secure. We cannot, therefore,
                  warrant or ensure the security of any information you transmit to us or from our
                  online products or services, and you do so at your own risk.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">Cookies and Tracking Technologies</h3>
                <p>
                  <strong>1st Party Cookies.</strong> We use 1<sup>st</sup> party cookies (passed by
                  us) to keep track of your current shopping session to personalize your experience
                  and so that you may retrieve your shopping cart at any time.
                </p>

                <p>
                  <strong>3rd Party Cookies for Web Analytics and Reporting.</strong> We reserve the
                  right to use web analytics services provided by 3rd parties. These services use
                  3rd party cookies (cookies passed by others, not by us) to collect Usage Data
                  about your use of this site. These web analytics services may also transfer this
                  information to third parties where required to do so by law, or where such third
                  parties process the information on the service's behalf.
                </p>

                <p>
                  <strong>Google Analytics</strong> is a web analysis service provided by Google
                  Inc. ("Google"). Google utilizes the data collected to track and examine the use
                  of this site, to prepare reports on its activities, and to share them with other
                  Google services. Information collected: cookie and Usage Data. Visit Google's
                  Privacy Policy{' '}
                  <a
                    href="https://www.google.com/intl/en/policies/?fg=1"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  . You may opt out of the Google Analytics service with the Google's Browser Add-on
                  that's available{' '}
                  <a
                    href="https://tools.google.com/dlpage/gaoptout/"
                    className="text-blue-600 hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    here
                  </a>
                  .
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">Do Not Track Requests</h3>
                <p>
                  Some Web browsers incorporate a "Do Not Track" feature that signals to websites
                  that you visit that you do not want to have your online activity tracked. Each
                  browser communicates "Do Not Track" signals to websites differently, making it
                  unworkable to honor each and every request correctly. In order to alleviate any
                  communication error between browsers and websites, we do not respond to "Do Not
                  Track" signals at this time. As the technology and communication between browser
                  and website improves, we will reevaluate the ability to honor "Do Not Track"
                  signals and may make changes to our policy.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">
                  Children's Online Privacy Protection Act Compliance
                </h3>
                <p>
                  We are committed to preserving online privacy for all of its website visitors,
                  including children. This site is a general audience site. Consistent with the
                  Children's Online Privacy Protection Act (COPPA), we will not knowingly collect
                  any information from, or sell to, children under the age of 13. If you are a
                  parent or guardian who has discovered that your child under the age of 13 has
                  submitted his or her personally identifiable information without your permission
                  or consent, we will remove the information from our active list, at your request.
                </p>

                <h3 className="font-bold text-lg mt-6 mb-2">Contacting Us</h3>
                <p>
                  If there are any questions regarding this privacy policy you may contact us using
                  the information found at this{' '}
                  <a href="/pages/contact" className="text-blue-600 hover:underline">
                    link
                  </a>{' '}
                  or by mail at:
                </p>
                <p className="mt-2">
                  Sicuro Brands
                  <br />
                  2121 Lohmans Crossing Rd #504-662,
                  <br />
                  Lakeway, TX 78734
                </p>
              </div>
            </div>
          </>
        );

      case 'shipping-policy-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <span className="text-2xl font-bold text-black">Shipping Policy</span>
            </div>
            <div className="prose max-w-none space-y-4 text-black">
              <p className="px-3">
                Orders are shipped within 24 hours of placing your order Sunday through Thursday.
              </p>
              <p className="px-3">
                Orders received Friday, Saturday and Sunday will go out first thing Monday morning.
              </p>
              <p className="px-3">
                You can reach support with any questions at{' '}
                <a href="tel:1-888-526-1885" className="font-bold text-blue-600 hover:underline">
                  1-888-526-1885
                </a>
                .
              </p>
            </div>
          </>
        );

      case 'return-policy-modal':
        return (
          <>
            <div className="border-b border-gray-200 pb-4 mb-4">
              <span className="text-2xl font-bold text-black">Returns Policy</span>
            </div>
            <div className="prose max-w-none space-y-4 text-black">
              <p className="px-3">
                If you would like to return your purchase for a refund, you must reach out to
                customer support by either email or phone to receive a return merchandise
                authorization (RMA).
              </p>
              <p className="px-3">
                If you return your purchase without a RMA, we can not guarantee you credit. You have
                up to 365 days from purchase to request a refund. Call{' '}
                <a href="tel:1-888-526-1885" className="font-bold text-blue-600 hover:underline">
                  1-888-526-1885
                </a>
                .
              </p>
            </div>
          </>
        );
      default:
        return null;
    }
  };

  return <div className="p-6">{getModalContent()}</div>;
};

export default FooterModal;
