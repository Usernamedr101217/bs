import React, { useState } from "react";

export default function Filtered({ name, imageUrl, imageUrl3, description, starPowers, gadgets }) {
    const [modalOpen, setModalOpen] = useState(false);

    const Modal = ({ closeModal }) => {
        return (
          <div className={`modal ${modalOpen ? 'open' : ''}`}>
            <div className="modal-content">
              <button className="close-modal" onClick={closeModal}>X</button>
              <div className="mod-hea">
                <div>
                    <img src={imageUrl3} alt="desc" style={{ width: '6em' }}/>
                    <h4>{name}</h4>
                </div>
                <p>-{description}-</p>
              </div>
              <div className="mod-add">
                <section>
                    {starPowers.map((item) => {
                        return(
                            <div>
                                <img src={item.imageUrl} alt="stpw" className="add-img"/>
                                <h5>{item.name}</h5>
                                <p>{item.description}</p>
                            </div>
                        )
                    })}
                </section>
                <section>
                    {gadgets.map((item) => {
                        return(
                            <div>
                                <img src={item.imageUrl} alt="stpw" className="add-img"/>
                                <h5 style={{ color: '#2bfc32' }}>{item.name}</h5>
                                <p style={{ color: '#2bfc32' }}>{item.description}</p>
                            </div>
                        )
                    })}
                </section>
              </div>
            </div>
          </div>
        );
      }

    return (
        <div>
            <article>
                <dir className="brw-hea">
                    <img src={imageUrl} alt="back" className="brw-img" onClick={() => setModalOpen(true)}/>
                </dir>
            </article>
            {modalOpen && <Modal closeModal={() => setModalOpen(false)} />}
        </div>

    )
}