import React, { useState } from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";

const ModalCompartir = () => {
  const [displayBasic, setDisplayBasic] = useState(false);
  const [position, setPosition] = useState("center");

  const dialogFuncMap = {
    displayBasic: setDisplayBasic,
  };

  const onClick = (name, position) => {
    dialogFuncMap[`${name}`](true);

    if (position) {
      setPosition(position);
    }
  };

  const onHide = (name) => {
    dialogFuncMap[`${name}`](false);
  };

  const renderFooter = (name) => {
    return (
      <div>
        <Button
          label="Cancelar"
          icon="pi pi-times"
          onClick={() => onHide(name)}
          className="p-button-text"
        />
      </div>
    );
  };
  return (
    <>
      <Button
        label="Compartir "
        icon={<i className="fab fa-whatsapp"></i>}
        onClick={() => onClick("displayBasic")}
        className="p-button-sm col-2 p-button-success"
      />
      <Dialog
        header="Comparta la cotización por WhatsApp"
        visible={displayBasic}
        style={{ width: "50vw" }}
        footer={renderFooter("displayBasic")}
        onHide={() => onHide("displayBasic")}
      >
        <span className="">
          Recuerde intrducir el código de país del número al que desea compartir
          la información
        </span>

        <form>
          <input type="text" placeholder="Ej: +58412 123 45 67" />
          <Button
            className="p-button-sm"
            label="Enviar"
            icon="pi pi-send"
            onClick={() => onHide()}
            autoFocus
          />
        </form>
      </Dialog>
    </>
  );
};

export default ModalCompartir;
