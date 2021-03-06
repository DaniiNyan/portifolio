import React, { useState } from "react";
import BioStyle from "./Bio.module.css";
import fotoDani from "./fotoDani.jpg";
import Image from "react-bootstrap/Image";
import ModalContact from "./ModalContact/ModalContact";
import Button from "react-bootstrap/Button";

const bio = props => {
  const [modalState, setModalState] = useState({
    modalShow: false
  });

  const handlerModal = () => {
    setModalState({
      ...modalState,
      modalShow: !modalState.modalShow
    });
  };

  return (
    <div id="bio" className={BioStyle.Bio}>
      <div className={BioStyle.container}>
        <p>
          Sou estudante do Técnico de Informática da FUNDATEC e participante 
          da 15ª edição da Aceleradora Ágil, programa da Thought Works em parceria com o Centro
          de Inovação da PUCRS. Desejo ser uma desenvolvedora completa, que possui conhecimento sobre
          todas as <i>stacks</i> necessárias para a construção de uma aplicação.
          <br/>
          <span className={BioStyle.escondeTexto}>Atualmente, meu coração pertence ao Java.</span>
        </p>

        <Image
          src={fotoDani}
          alt="Foto"
          className={BioStyle.minhaFoto}
          roundedCircle
        />
        
      </div>
      <ModalContact show={modalState.modalShow} onHide={handlerModal} />
      <Button onClick={handlerModal} bsPrefix={BioStyle.btnPink}>
        Contato
      </Button>
    </div>
  );
};

export default bio;
