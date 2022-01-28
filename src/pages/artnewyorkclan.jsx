import React from 'react';
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import SmoothScroll from "smooth-scroll";
import dwarfSolderImg from "../assets/img/team/02.webp";
import dwarfCaposImg from "../assets/img/team/03.webp";
import bossImg from "../assets/img/team/04.webp";
import dwarfatherImg from "../assets/img/team/05.webp";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const DwarfSoliderCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src={dwarfSolderImg} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title>DwarfSoldier</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

const DwarfCaposCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src={dwarfCaposImg} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title>DwarfCapos</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}

const BossCard = () => {
  return (
    <Card>
      <Card.Img variant="top" src={bossImg} style={{ width: '100%' }} />
      <Card.Body>
        <Card.Title>Boss</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the bulk of
          the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
}


const Artnewyorkclan = () => {
  const [isShowDwarfSolders, setIsShowDwarfSolders] = useState(false);
  const [isShowDwarfCapos, setIsShowDwarfCapos] = useState(false);
  const [isShowBosses, setIsShowBosses] = useState(false);

  const showBosses = () => {
    setIsShowDwarfSolders(false);
    setIsShowDwarfCapos(false);
    setIsShowBosses(true);
    return;
  };

  const showDwarfCapos = () => {
    setIsShowDwarfSolders(false);
    setIsShowDwarfCapos(true);
    setIsShowBosses(false);
    return;
  };

  const showDwarfSoliders = () => {
    setIsShowDwarfSolders(true);
    setIsShowDwarfCapos(false);
    setIsShowBosses(false);
    return;
  };

  const showMainOptions = () => {
    setIsShowDwarfSolders(false);
    setIsShowDwarfCapos(false);
    setIsShowBosses(false);
    return;
  };

  const dwarfSoldierArray = [];
  var i = 0;
  for (i = 0; i < 150; i++) {
    dwarfSoldierArray.push("DwarfSolider");
  }

  const dwarfCaposArray = [];
  for (i = 0; i < 40; i++) {
    dwarfCaposArray.push("DwarfCapos");
  }

  const bossArray = [];
  for (i = 0; i < 9; i++) {
    bossArray.push("Boss");
  }

  return (
    <div className="col-md-8 col-sm-8">
      <div className='row text-right'>
        <button type='button' className="btn btn-art-back" onClick={() => showMainOptions()}><i className="fa fa-long-arrow-left"></i> Back</button>
      </div>
      {
        !isShowBosses && !isShowDwarfCapos && !isShowDwarfSolders &&
        <div className="row">
          <div className="col-md-6 col-sm-6">
            <Card>
              <Card.Img variant="top" src={dwarfatherImg} style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>Dwarfather</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-sm-6">
            <Card onClick={() => showBosses()}>
              <Card.Img variant="top" src={bossImg} style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>Bosses</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onClick={() => showBosses()}>View Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-sm-6">
            <Card onClick={() => showDwarfCapos()}>
              <Card.Img variant="top" src={dwarfCaposImg} style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>DwarfCapos</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onClick={() => showDwarfCapos()}>View Details</Button>
              </Card.Body>
            </Card>
          </div>
          <div className="col-md-6 col-sm-6">
            <Card onClick={() => showDwarfSoliders()}>
              <Card.Img variant="top" src={dwarfSolderImg} style={{ width: '100%' }} />
              <Card.Body>
                <Card.Title>DwarfSoldiers</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the bulk of
                  the card's content.
                </Card.Text>
                <Button variant="primary" onClick={() => showDwarfSoliders()}>View Details</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      }
      {isShowDwarfSolders &&
        <div className="row">
          {dwarfSoldierArray.map((name, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <DwarfSoliderCard />
            </div>
          ))}
        </div>
      }
      {isShowDwarfCapos &&
        <div className="row">
          {dwarfCaposArray.map((name, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <DwarfCaposCard />
            </div>
          ))}
        </div>
      }
      {isShowBosses &&
        <div className="row">
          {bossArray.map((name, index) => (
            <div key={index} className="col-md-4 col-sm-6">
              <BossCard />
            </div>
          ))}
        </div>
      }
    </div>
  );
};

export default Artnewyorkclan;
