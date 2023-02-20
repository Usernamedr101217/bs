import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

export default function Customize() {
    const [show, setShow] = useState(false)
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        gadget1Name: '',
        gadget1Description: '',
        gadget2Name: '',
        gadget2Description: '',
        star1Name: '',
        star1Description: '',
        star2Name: '',
        star2Description: '',
    });
    const [customize, setCustomize] = useState(
        JSON.parse(localStorage.getItem('customize') || '{}')
    );

    useEffect(() => {
        setFormData({
          name: localStorage.getItem('name') || '',
          description: localStorage.getItem('description') || '',
          gadget1Name: localStorage.getItem('gadget1Name') || '',
          gadget1Description: localStorage.getItem('gadget1Description') || '',
          gadget2Name: localStorage.getItem('gadget2Name') || '',
          gadget2Description: localStorage.getItem('gadget2Description') || '',
          star1Name: localStorage.getItem('star1Name') || '',
          star1Description: localStorage.getItem('star1Description') || '',
          star2Name: localStorage.getItem('star2Name') || '',
          star2Description: localStorage.getItem('star2Description') || '',
        });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
        localStorage.setItem(name, value);
    };

    const handleSaveClick = () => {

        const customize = JSON.parse(localStorage.getItem('customize') || '{}');

        customize.name = formData.name;
        customize.description = formData.description;
        customize.gadget1Name = formData.gadget1Name;
        customize.gadget1Description = formData.gadget1Description;
        customize.gadget2Name = formData.gadget2Name;
        customize.gadget2Description = formData.gadget2Description;
        customize.star1Name = formData.star1Name;
        customize.star1Description = formData.star1Description;
        customize.star2Name = formData.star2Name;
        customize.star2Description = formData.star2Description;

        localStorage.setItem('customize', JSON.stringify(customize));
        setCustomize(customize);
        setShow(true);
    }


    return (
        <div id="custom">
            <header><h2>Customize</h2></header>
            <div className="cus-sec">
                <section>
                    <div>
                        <h4>Name: </h4>
                        <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
                    </div>
                    <textarea name="description" value={formData.description} onChange={handleInputChange} id="" cols="40" rows="5"></textarea>
                </section>
                <section className="input-add">
                    <div>
                        <h5>Gadget:</h5>
                        <img src="/src/assets/gadget.webp" alt="" className="add-img" />
                        <form>
                            <label>Name: </label><input type="text" name="gadget1Name" value={formData.gadget1Name} onChange={handleInputChange} />
                            <textarea name="gadget1Description" value={formData.gadget1Description} onChange={handleInputChange} id="" cols="40" rows="5"></textarea>
                        </form>
                        <form>
                            <label>Name: </label><input type="text" name="gadget2Name" value={formData.gadget2Name} onChange={handleInputChange} />
                            <textarea name="gadget2Description" value={formData.gadget2Description} onChange={handleInputChange} id="" cols="40" rows="5"></textarea>
                        </form>
                    </div>
                    <div>
                        <h5>Star power:</h5>
                        <img src="/src/assets/star.webp" alt="" className="add-img" />
                        <form>
                            <label>Name: </label><input type="text" name="star1Name" value={formData.star1Name} onChange={handleInputChange} />
                            <textarea name="star1Description" value={formData.star1Description} onChange={handleInputChange} id="" cols="40" rows="5"></textarea>
                        </form>
                        <form>
                            <label>Name: </label><input type="text" name="star2Name" value={formData.star2Name} onChange={handleInputChange} />
                            <textarea name="star2Description" value={formData.star2Description} onChange={handleInputChange} id="" cols="40" rows="5"></textarea>
                        </form>
                    </div>
                    <button onClick={handleSaveClick}>Save</button>
                </section>
                <section className={show ? 'customize show' : 'customize'}>
                    <h4>Your customize: </h4><br />
                    <div className='box' >
                      <div className="modal-content">
                        <div className="mod-hea">
                          <div>
                            <img src='' alt="" style={{ width: '0' }}/>
                            <h4>{customize.name}</h4>
                          </div>
                          <p>{customize.description}</p>
                        </div>
                        <div className="mod-add">
                          <section>
                            <div>
                                <img src='/star.png' alt="stpw" className="add-img"/>
                                <h5>{customize.star1Name}</h5>
                                <p>{customize.star1Description}</p>
                            </div>
                            <div>
                                <img src='/star.png' alt="stpw" className="add-img"/>
                                <h5>{customize.star2Name}</h5>
                                <p>{customize.star2Description}</p>
                            </div>
                          </section>
                          <section>
                            <div>
                                <img src='/gadget.png' alt="stpw" className="add-img"/>
                                <h5 style={{ color: '#2bfc32' }}>{customize.gadget1Name}</h5>
                                <p style={{ color: '#2bfc32' }}>{customize.gadget1Description}</p>
                            </div>
                            <div>
                                <img src='/gadget.png' alt="stpw" className="add-img"/>
                                <h5 style={{ color: '#2bfc32' }}>{customize.gadget2Name}</h5>
                                <p style={{ color: '#2bfc32' }}>{customize.gadget2Description}</p>
                            </div>
                          </section>
                        </div>
                      </div>
                    </div>
                </section>
            </div>

        </div>
    )
}