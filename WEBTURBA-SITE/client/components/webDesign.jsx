import Image from 'next/image';
import React from 'react';
import Logo from "../public/assets/images/logo_blanc.png"
import { BsCheckLg } from "react-icons/bs"

const Design = ({Illustration , title , id}) => {
     return (
          <section className="web_design" id={id}>
               <div className="container_design">
                    <div className="titre_element">
                         <div className="nom">
                              <p>{title}</p>
                         </div>
                         <div className="trait">

                         </div>
                    </div>
                    <div className="card_elements">
                         <div className="card_element">
                              <Image src={Logo} alt='logo de fond en blanc' width={300} height={300} className='image' />
                         </div>
                         <div className="card_element_description">
                              <div className="description">
                                   <p>
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit 
                                        ab aspernatur consequatur aperiam inventore fuga excepturi quibusdam asperiores, 
                                        fugiat, dicta ipsam. Sequi ad reprehenderit cumque molestias 
                                        architecto laboriosam sunt?
                                        Lorem ipsum dolor sit. Lorem ipsum dolor sit, amet consectetur adipisicing 
                                        elit. Consectetur, facere.
                                        Lorem ipsum dolor sit.
                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sit 
                                        ab aspernatur consequatur aperiam inventore fuga excepturi quibusdam asperiores, 
                                        fugiat, dicta ipsam. Sequi ad reprehenderit cumque molestias 
                                        architecto laboriosam sunt? architecto laboriosam sunt? architecto laboriosam sunt?
                                        architecto laboriosam sunt? architecto laboriosam
                                   </p>
                              </div>
                              <div className="illustration">
                                   <div className="icone_card">
                                        <div className="icone">
                                             <BsCheckLg />
                                        </div>
                                        <div className="titre">
                                             <p>Lorem lorem Lorem ipsum dolor sit amet conse</p>
                                        </div>
                                   </div>
                                   <div className="icone_card">
                                        <div className="icone">
                                             <BsCheckLg />
                                        </div>
                                        <div className="titre">
                                             <p>Lorem lorem Lorem ipsum dolor sit amet conse</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div className="card_element_image">
                              <div className="card_image">
                                   <Image src={Illustration} alt="Image d'ullistration" className='image' width={400} height={400} />
                              </div>
                              <div className="illustration">
                                   <div className="icone_card">
                                        <div className="icone">
                                             <BsCheckLg />
                                        </div>
                                        <div className="titre">
                                             <p>Lorem lorem Lorem ipsum dolor sit amet conse</p>
                                        </div>
                                   </div>
                                   <div className="icone_card">
                                        <div className="icone">
                                             <BsCheckLg />
                                        </div>
                                        <div className="titre">
                                             <p>Lorem lorem Lorem ipsum dolor sit amet conse</p>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </section>
     );
};

export default Design;