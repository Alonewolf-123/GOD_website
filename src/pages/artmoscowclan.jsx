import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SmoothScroll from "smooth-scroll";
import dwarfSolderImg from "../assets/img/art/Moscow_Soldier.png";
import dwarfCaposImg from "../assets/img/art/Moscow_Capo.png";
import bossImg from "../assets/img/art/mistery.png";
import dwarfatherImg from "../assets/img/art/mistery.png";


export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 200,
  speedAsDuration: true,
});

const Artmoscowclan = () => {

  const [isShowImgModal, setIsShowImgModal] = useState(false);
  const [modalImg, setModalImg] = useState(dwarfSolderImg);

  const closeModal =() => {
    setIsShowImgModal(false);
  }

  const openDwarfatherModal = () => {
    setModalImg(dwarfatherImg);
    setIsShowImgModal(true);
  }

  const openBossModal = () => {
    setModalImg(bossImg);
    setIsShowImgModal(true);
  }

  const openDwarfCaposModal = () => {
    setModalImg(dwarfCaposImg);
    setIsShowImgModal(true);
  }

  const openDwarfSoldierModal = () => {
    setModalImg(dwarfSolderImg);
    setIsShowImgModal(true);
  }

  return (
    <div className="col-md-8 col-sm-8">
      {
        isShowImgModal &&
        <div id="myModal" className="modal">
          <span className="close" onClick={closeModal}>&times;</span>
          <img className="modal-content" id="img01" src={modalImg} />
          <div id="caption"></div>
        </div>
      }

      <div className="row">
        <div className="col-md-5 col-sm-6">
          <Card onClick={openDwarfatherModal}>
            <Card.Img variant="top" src={dwarfatherImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>Dwarfather</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 col-sm-6">
          <Card onClick={openBossModal}>
            <Card.Img variant="top" src={bossImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>Bosses</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 col-sm-6">
          <Card onClick={openDwarfCaposModal}>
            <Card.Img variant="top" src={dwarfCaposImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>DwarfCapos</Card.Title>
            </Card.Body>
          </Card>
        </div>
        <div className="col-md-5 col-sm-6">
          <Card onClick={openDwarfSoldierModal}>
            <Card.Img variant="top" src={dwarfSolderImg} style={{ width: '100%' }} />
            <Card.Body>
              <Card.Title>DwarfSoldier</Card.Title>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Artmoscowclan;
